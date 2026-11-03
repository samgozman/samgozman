import { digest } from 'ohash/crypto'

/**
 * Redirects og:image URLs signed by an older build to the URL the page emits now.
 *
 * nuxt-og-image signs dynamic `/_og/d/...` URLs and answers 403 "Invalid URL
 * signature" when the signature does not match the current secret. Link preview
 * crawlers (Telegram, Slack, X, ...) cache a page's og:image URL and fetch it
 * again later, often after a redeploy. Before NUXT_OG_IMAGE_SECRET was set, every
 * build signed with a new random secret, so those cached URLs all fail.
 *
 * This middleware does not sign anything the caller asks for. It reads only the
 * page path (`p_`, absent for "/"), renders that page, and redirects to the
 * og:image the page emits. A caller can reach only images that our own pages
 * already publish, so signing still stops arbitrary images being rendered.
 */

const OG_PREFIX = '/_og/d/'
const RE_EXTENSION = /\.(png|jpe?g|webp)$/
const RE_SIGNATURE = /,s_([^,]+)$/
const RE_PAGE_PATH = /(?:^|,)p_([A-Za-z0-9_-]+)(?:,|$)/
const RE_OG_IMAGE = /<meta[^>]+(?:property|name)="og:image"[^>]+content="([^"]+)"/

function sign(segment: string, secret: string) {
  return digest(`${secret}:${segment}`).slice(0, 16)
}

function safeDecode(value: string) {
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

/** Same check as nuxt-og-image, on the raw and on the decoded segment. */
function hasValidSignature(segment: string, secret: string) {
  const match = segment.match(RE_SIGNATURE)
  if (!match) return false
  const params = segment.slice(0, match.index)
  return [params, safeDecode(params)].some((p) => sign(p, secret) === match[1])
}

/** `p_` holds the page path as base64url JSON; it is omitted for "/". */
function pagePathOf(segment: string): string | null {
  const match = segment.match(RE_PAGE_PATH)
  if (!match) return '/'
  try {
    const path = JSON.parse(Buffer.from(match[1], 'base64url').toString('utf8'))
    if (typeof path !== 'string' || !path.startsWith('/') || path.startsWith('//')) return null
    if (path.startsWith('/_') || path.startsWith('/api/') || path.startsWith('/admin')) return null
    return path
  } catch {
    return null
  }
}

export default defineEventHandler(async (event) => {
  if (event.method !== 'GET' && event.method !== 'HEAD') return
  const pathname = event.path.split('?')[0]
  if (!pathname.startsWith(OG_PREFIX)) return

  const config = useRuntimeConfig(event) as Record<string, any>
  const secret: string | undefined =
    config.ogImage?.secret || config['nuxt-og-image']?.security?.secret
  if (!secret) return

  const ext = pathname.match(RE_EXTENSION)
  if (!ext) return
  const segment = pathname.slice(OG_PREFIX.length, -ext[0].length)
  if (hasValidSignature(segment, secret)) return

  const pagePath = pagePathOf(safeDecode(segment))
  if (!pagePath) return

  let current: string | undefined
  try {
    const html = await $fetch<string>(pagePath, { responseType: 'text' })
    current = html.match(RE_OG_IMAGE)?.[1]
  } catch {
    return
  }
  if (!current) return

  const target = new URL(current.replaceAll('&amp;', '&'), 'http://local').pathname
  if (!target.startsWith(OG_PREFIX) || target === pathname) return

  // Temporary: the target changes whenever the page's title or the secret does.
  setResponseHeader(event, 'cache-control', 'public, max-age=3600')
  return sendRedirect(event, target, 302)
})

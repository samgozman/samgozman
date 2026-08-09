export function addColorPunctuationToHtmlString(value: string) {
  return value.replace(/([.,;:!?&*$'])/g, '<span class="text-primary">$1</span>')
}

export function addColorPunctuationForLastSignToHtmlString(value: string) {
  return value.replace(/([.,;:!?&*$'])$/, '<span class="text-primary">$1</span>')
}

const ENDORSED_HOSTS = new Set([
  'gozman.space',
  'www.gozman.space',
  'short-fork.extr.app',
  'yopta.space',
  'apps.apple.com'
])

export function isEndorsedUrl(href: string): boolean {
  let url: URL
  try {
    url = new URL(href)
  } catch {
    return false
  }
  if (ENDORSED_HOSTS.has(url.hostname)) return true
  if (url.hostname === 'github.com') {
    return url.pathname.split('/').filter(Boolean)[0]?.toLowerCase() === 'samgozman'
  }
  return false
}

export function externalLinkRel(href?: string): string {
  let isExternal = false
  try {
    const { protocol } = new URL(href ?? '')
    isExternal = protocol === 'http:' || protocol === 'https:'
  } catch {
    isExternal = false // relative/internal link (e.g. /apps/recurred)
  }
  return isExternal && !isEndorsedUrl(href ?? '')
    ? 'nofollow noopener noreferrer'
    : 'noopener noreferrer'
}

export function calculateAge(date: Date) {
  const today = new Date()
  const age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1
  }

  return age
}

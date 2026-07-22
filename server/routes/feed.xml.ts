import { marked } from 'marked'
import { BloggyApi } from '~/composables/BloggyApi'
import { getAllPosts } from '~/server/utils/getAllPosts'

// Only the most recent posts carry full content, keeping the feed lean and
// bounding the per-post API calls needed to fetch each body.
const FEED_ITEM_LIMIT = 20

const escapeXml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// CDATA can hold raw HTML unescaped, but must never contain the "]]>"
// terminator. Split any occurrence across two CDATA sections.
const wrapCdata = (html: string) => `<![CDATA[${html.replace(/]]>/g, ']]]]><![CDATA[>')}]]>`

export default defineEventHandler(async (event) => {
  const baseUrl = useRuntimeConfig().public.baseUrl
  const posts = await getAllPosts()

  // Newest first, then cap — feed readers and importers only care about recent items.
  const recent = [...posts]
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .slice(0, FEED_ITEM_LIMIT)

  // Fetch each full body in parallel and render its Markdown to HTML. Importers
  // read <content:encoded> first, so this is what makes whole articles import
  // instead of just the preview. Falls back to description-only if a fetch fails.
  const items = await Promise.all(
    recent.map(async (p) => {
      const url = `${baseUrl}/blog/${p.slug}`
      const res = await BloggyApi.getPostBySlug(p.slug)
      const contentEncoded =
        res.ok && res.content
          ? `\n      <content:encoded>${wrapCdata(await marked.parse(res.content))}</content:encoded>`
          : ''

      // Importers map <category> elements to tags (commonly the first 4). Other
      // readers surface them as topics too.
      const categories = (p.keywords ?? [])
        .map((k) => `\n      <category>${escapeXml(k)}</category>`)
        .join('')

      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.created_at).toUTCString()}</pubDate>${categories}
      <description>${escapeXml(p.description)}</description>${contentEncoded}
    </item>`
    })
  )

  const lastBuildDate = recent.length
    ? new Date(Math.max(...recent.map((p) => new Date(p.created_at).getTime()))).toUTCString()
    : new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Sam Gozman — Dev Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Backend engineering, system design, Go performance and developer tooling by Sam Gozman.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items.join('\n')}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return xml
})

import { getAllPosts } from '~/server/utils/getAllPosts'

const escapeXml = (s: string) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export default defineEventHandler(async (event) => {
  const baseUrl = useRuntimeConfig().public.baseUrl
  const posts = await getAllPosts()

  const items = posts
    .map((p) => {
      const url = `${baseUrl}/blog/${p.slug}`
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <pubDate>${new Date(p.created_at).toUTCString()}</pubDate>
      <description>${escapeXml(p.description)}</description>
    </item>`
    })
    .join('\n')

  const lastBuildDate = posts.length
    ? new Date(Math.max(...posts.map((p) => new Date(p.created_at).getTime()))).toUTCString()
    : new Date().toUTCString()

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sam Gozman — Dev Blog</title>
    <link>${baseUrl}/blog</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
    <description>Backend engineering, system design, Go performance and developer tooling by Sam Gozman.</description>
    <language>en</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
${items}
  </channel>
</rss>`

  setHeader(event, 'content-type', 'application/rss+xml; charset=UTF-8')
  return xml
})

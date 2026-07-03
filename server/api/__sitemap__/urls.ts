import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { BloggyApi, type PostListItem } from '~/composables/BloggyApi'

export default defineSitemapEventHandler(async () => {
  // The API rejects limit > 25 (ERR_PARAM_VALIDATION), so page at its max.
  const PER_PAGE = 25
  const posts: PostListItem[] = []

  // Page through every post so the whole catalogue is always in the sitemap.
  let page = 1
  let total = Infinity
  while (posts.length < total) {
    const res = await BloggyApi.getPosts(page, PER_PAGE)
    if (!res || !res.ok) {
      // Return what we have so a transient API hiccup doesn't blank the sitemap.
      break
    }

    posts.push(...res.posts)
    total = res.total

    if (res.posts.length === 0) {
      break
    }
    page++
  }

  return posts.map((p) =>
    asSitemapUrl({
      loc: `/blog/${p.slug}`,
      // Prefer updated_at (freshness signal) when the API exposes it on the
      // list endpoint; fall back to created_at until then.
      lastmod: (p as { updated_at?: string }).updated_at ?? p.created_at
    })
  )
})

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

  const postDate = (p: PostListItem) =>
    // Prefer updated_at (freshness signal) when the API exposes it on the list
    // endpoint; fall back to created_at until then.
    (p as { updated_at?: string }).updated_at ?? p.created_at

  const buildTime = useRuntimeConfig().public.buildTime as string
  // /blog lists the posts, so its lastmod is the freshest of the newest post
  // and the last build (a redeploy can change the listing's copy too).
  const blogLastmod = posts.reduce((latest, p) => {
    const d = postDate(p)
    return d > latest ? d : latest
  }, buildTime)

  return [
    asSitemapUrl({ loc: '/blog', changefreq: 'daily', priority: 0.7, lastmod: blogLastmod }),
    ...posts.map((p) =>
      asSitemapUrl({
        loc: `/blog/${p.slug}`,
        lastmod: postDate(p)
      })
    )
  ]
})

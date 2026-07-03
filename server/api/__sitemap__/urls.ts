import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { type PostListItem } from '~/composables/BloggyApi'
import { getAllPosts } from '~/server/utils/getAllPosts'

export default defineSitemapEventHandler(async () => {
  const posts = await getAllPosts()

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

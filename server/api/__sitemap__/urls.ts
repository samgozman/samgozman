import { asSitemapUrl, defineSitemapEventHandler } from '#imports'
import { BloggyApi } from '~/composables/BloggyApi'

export default defineSitemapEventHandler(async () => {
  // TODO: use specified API just for sitemap
  const res = await BloggyApi.getPosts(1, 15)
  if (!res || !res.ok) {
    return []
  }

  // TODO: use real updated_at date
  return res.posts.map((p) =>
    asSitemapUrl({
      loc: `/blog/${p.slug}`,
      lastmod: p.created_at
    })
  )
})

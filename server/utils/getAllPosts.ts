import { BloggyApi, type PostListItem } from '~/composables/BloggyApi'

// The API rejects limit > 25 (ERR_PARAM_VALIDATION), so page at its max.
const PER_PAGE = 25

/**
 * Fetch the full post catalogue by paging through the API. Returns whatever was
 * collected so far if a request fails, so a transient hiccup never blanks the
 * consumers (sitemap, RSS feed, llms.txt).
 */
export async function getAllPosts(): Promise<PostListItem[]> {
  const posts: PostListItem[] = []
  let page = 1
  let total = Infinity

  while (posts.length < total) {
    const res = await BloggyApi.getPosts(page, PER_PAGE)
    if (!res || !res.ok) {
      break
    }

    posts.push(...res.posts)
    total = res.total

    if (res.posts.length === 0) {
      break
    }
    page++
  }

  return posts
}

import { getAllPosts } from '~/server/utils/getAllPosts'

export default defineEventHandler(async (event) => {
  const baseUrl = useRuntimeConfig().public.baseUrl
  const posts = await getAllPosts()

  const postLines = posts
    .map((p) => `- [${p.title}](${baseUrl}/blog/${p.slug}): ${p.description}`)
    .join('\n')

  const md = `# Sam Gozman

> Developer blog of Sam Gozman — Team Lead and Senior Backend Engineer specializing in Go, Node.js and Rust, and an open-source developer. Writing on backend engineering, system design, Go performance and developer tooling.

## Pages
- [About](${baseUrl}/): background, tech stack and experience
- [Projects](${baseUrl}/projects): open-source and side projects
- [Blog](${baseUrl}/blog): all posts

## Blog posts
${postLines}
`

  setHeader(event, 'content-type', 'text/markdown; charset=UTF-8')
  return md
})

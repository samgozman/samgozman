<script setup lang="ts">
import { ref } from 'vue'

const md = ref<string>()
const createdAt = ref<Date>(new Date())
const title = ref<string>('')

const route = useRoute()
const pageURL = `${useRuntimeConfig().public.baseUrl}${route.fullPath}`
const slug = route.params.slug as string

const { error, data } = await useAsyncData<any, any, PostResponse>(
  `blog-post-${slug}`,
  async (context) => {
    if (!slug) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
      })
    }

    const res = await BloggyApi.getPostBySlug(slug)
    if (!res.ok) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
      })
    }

    return res
  }
)

if (error.value) {
  showError(error.value)
}

if (data.value) {
  md.value = data.value.content
  createdAt.value = new Date(data.value.created_at)
  title.value = data.value.title

  useSeoMeta({
    ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
    title: `${data.value.title} | Sam Gozman`,
    ogType: 'article',
    ogTitle: `${data.value.title} | Sam Gozman`,
    twitterTitle: `${data.value.title} | Sam Gozman`,
    description: data.value.description,
    ogDescription: data.value.description,
    twitterDescription: data.value.description,
    twitterImageAlt: `${data.value.title} | Sam Gozman`,
    articlePublishedTime: createdAt.value.toISOString(),
    articleModifiedTime: data.value.updated_at,
    articleTag: data.value.keywords,
    articleAuthor: ['Sam Gozman']
  })

  // BlogPosting structured data + breadcrumb trail so Google (and AI answer
  // engines) can attribute the article, its dates, author and topic.
  useSchemaOrg([
    defineArticle({
      '@type': 'BlogPosting',
      headline: data.value.title,
      description: data.value.description,
      datePublished: data.value.created_at,
      dateModified: data.value.updated_at,
      author: { '@type': 'Person', name: 'Sam Gozman', url: useRuntimeConfig().public.baseUrl },
      keywords: data.value.keywords,
      // reading_time is provided in seconds; expose as an ISO-8601 duration.
      timeRequired: data.value.reading_time
        ? `PT${Math.max(1, Math.round(data.value.reading_time / 60))}M`
        : undefined
    }),
    defineBreadcrumb({
      itemListElement: [
        { name: 'Home', item: '/' },
        { name: 'Blog', item: '/blog' },
        { name: data.value.title, item: useRoute().path }
      ]
    })
  ])

  defineOgImage('BlogPost', {
    title: data.value.title
  })
}
</script>

<template>
  <div class="max-w-fit">
    <MarkdownView v-if="md" :id="slug" :value="md" :created-at="createdAt" />
    <LazyBlogComments v-if="pageURL" :page-url="pageURL" :page-slug="slug" :page-title="title" />
  </div>
</template>

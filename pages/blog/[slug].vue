<script setup lang="ts">
import { ref } from 'vue'

const md = ref<string>()
const createdAt = ref<Date>(new Date())
const title = ref<string>('')

const route = useRoute()
const pageURL = `${useRuntimeConfig().public.baseUrl}${route.fullPath}`
const slug = route.params.slug as string

const { error, data } = await useAsyncData<any, any, PostResponse>('blog-post', async (context) => {
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
})

if (error.value) {
  showError(error.value)
}

if (data.value) {
  md.value = data.value.content
  createdAt.value = new Date(data.value.created_at)
  title.value = data.value.title

  useServerSeoMeta({
    title: `${data.value.title} | Sam Gozman`,
    ogType: 'article',
    ogTitle: `${data.value.title} | Sam Gozman`,
    description: data.value.description,
    ogDescription: data.value.description
  })
}
</script>

<template>
  <div class="max-w-fit">
    <MarkdownView v-if="md" :value="md" :created-at="createdAt" />
    <BlogComments v-if="pageURL" :page-url="pageURL" :page-slug="slug" :page-title="title" />
  </div>
</template>

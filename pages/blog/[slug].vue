<script setup lang="ts">
import { ref } from 'vue'

const md = ref<string>()
const createdAt = ref<Date>(new Date())
const title = ref<string>('')

const pageURL = window.location.href

const route = useRoute()

const slug = route.params.slug as string

const { error } = useAsyncData('blog-post', async (context) => {
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

  md.value = res.content
  createdAt.value = new Date(res.created_at)
  title.value = res.title
})

if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page Not Found'
  })
}
</script>

<template>
  <div class="max-w-fit">
    <MarkdownView v-if="md" :value="md" :created-at="createdAt" />
    <BlogComments :page-url="pageURL" :page-slug="slug" :page-title="title" />
  </div>
</template>

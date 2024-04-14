<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import { type PostResponse } from '../../../../composables/BloggyApi'

const route = useRoute()
const post = ref<PostResponse>()

onMounted(async () => {
  const slug = route.params.slug as string

  const response = await BloggyApi.getPostBySlug(slug)
  if (!response.ok) {
    console.error(`Post not found: ${slug}. Error: ${response.message}. Code: ${response.code}`)
    // TODO: Redirect to 404
    return
  }

  post.value = response
})

definePageMeta({
  requiresAuth: true,
  middleware: 'auth'
})
</script>

<template>
  <ElementsHeaderMax value="🦄 Edit post." />
  <div class="w-full">
    <MarkdownEdit
      v-if="post"
      :title="post.title"
      :slug="post.slug"
      :description="post.description"
      :keywords="post.keywords?.join(',')"
      :text="post.content"
    />
  </div>
</template>

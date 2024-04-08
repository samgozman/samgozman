<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import MarkdownEdit from '@/components/MarkdownEdit.vue'
import { BloggyApi, type PostResponse } from '@/services/BloggyApi'

const route = useRoute()
const post = ref<PostResponse>()

window.document.title = 'Post edit | Sam Gozman'

onMounted(async () => {
  const slug = route.params.slug as string

  // get post data from API
  const response = await BloggyApi.getPostBySlug(slug)
  if (!response.ok) {
    console.error(`Post not found: ${slug}. Error: ${response.message}. Code: ${response.code}`)
    // TODO: Redirect to 404
    return
  }

  post.value = response
})

// get post data from API
</script>

<template>
  <HeaderMax value="🦄 Edit post." />
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

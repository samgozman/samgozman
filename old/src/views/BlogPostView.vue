<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownView from '@/components/MarkdownView.vue'
import { BloggyApi } from '@/services/BloggyApi'
import BlogComments from '@/components/bloglist/BlogComments.vue'

const md = ref<string>()
const router = useRouter()
const createdAt = ref<Date>(new Date())
const title = ref<string>('')

const route = useRoute()

const slug = route.params.slug as string
const pageURL = window.location.href

onMounted(async () => {
  if (!slug) {
    router.push({ name: 'not-found' })
    return
  }

  const res = await BloggyApi.getPostBySlug(slug)
  if (!res.ok) {
    router.push({ name: 'not-found' })
    return
  }

  window.document.title = `${res.title} | Sam Gozman`

  md.value = res.content
  createdAt.value = new Date(res.created_at)
  title.value = res.title
})
</script>

<template>
  <div class="max-w-fit">
    <MarkdownView v-if="md" :value="md" :created-at="createdAt" />
    <BlogComments :page-url="pageURL" :page-slug="slug" :page-title="title" />
  </div>
</template>

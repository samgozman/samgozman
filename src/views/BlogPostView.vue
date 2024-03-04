<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import MarkdownView from '@/components/MarkdownView.vue'
import { BloggyApi } from '@/services/BloggyApi'

const md = ref<string>()
const router = useRouter()

onMounted(async () => {
  const route = useRoute()
  const slug = route.params.slug as string
  if (!slug) {
    router.push({ name: 'not-found' })
    return
  }

  const res = await BloggyApi.getPostBySlug(slug)
  if (!res.ok) {
    router.push({ name: 'not-found' })
    return
  }

  md.value = res.content
})
</script>

<template>
  <div class="">
    <MarkdownView v-if="md" :value="md" />
  </div>
</template>

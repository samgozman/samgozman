<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import { BloggyApi, type PostListItem } from '@/services/BloggyApi'

const items = ref<PostListItem[]>([])

onMounted(async () => {
  const res = await BloggyApi.getPosts(1, 25)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    return
  }

  items.value.push(...res.posts)
})
</script>

<template>
  <HeaderMax value="Admin Dashboard." />
  <div class="flex justify-end">
    <RouterLink
      class="btn font-poppins font-semibold text-white btn-primary"
      :to="{ name: 'admin-new-post' }"
    >
      Create new post
    </RouterLink>
  </div>
  <div class="grid grid-cols-1 gap-y-2 my-4">
    <div
      v-for="item in items"
      :key="item.slug"
      class="flex items-center justify-between p-2 bg-white rounded-md shadow-md"
    >
      <div class="flex items-center">
        <div class="ml-4">
          <RouterLink
            :to="{ name: 'blog-post', params: { slug: item.slug } }"
            class="text-lg font-semibold hover:underline"
          >
            {{ item.title }}
          </RouterLink>
          <p class="text-sm text-gray-500">{{ item.created_at }}</p>
        </div>
      </div>
      <div class="flex items center">
        <RouterLink
          class="btn text-white btn-primary"
          :to="{ name: 'admin-edit-post', params: { slug: item.slug } }"
        >
          Edit
        </RouterLink>
      </div>
    </div>
  </div>
</template>

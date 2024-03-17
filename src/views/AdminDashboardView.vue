<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useSeoMeta } from 'unhead'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import { BloggyApi, type PostListItem } from '@/services/BloggyApi'
import { StorageKeeper } from '@/services/StorageKeeper'

useSeoMeta({
  title: 'Admin Dashboard | Sam Gozman'
})

const items = ref<PostListItem[]>([])

onMounted(async () => await updatePosts())

const updatePosts = async () => {
  const res = await BloggyApi.getPosts(1, 25)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    return
  }

  items.value = res.posts
}

const onPublish = async (slug: string) => {
  const token = StorageKeeper.get<string>('token')
  if (!token) {
    console.error('No token found')
    return
  }

  const res = await BloggyApi.sendPostToSubscribers(token, slug)
  if (!res.ok) {
    console.error('Failed to publish post:', res)
    return
  }

  await updatePosts()
}

const isValidDate = (dateString: string) => {
  const date = new Date(dateString)
  return !isNaN(date.getTime()) && dateString !== '0001-01-01T00:00:00Z'
}
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
      <div class="flex items center gap-2">
        <button
          class="btn"
          :disabled="isValidDate(item.sent_to_subscribers_at)"
          @click="() => onPublish(item.slug)"
        >
          Send notifications
        </button>
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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { type PostListItem } from '../../composables/BloggyApi'

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

definePageMeta({
  requiresAuth: true,
  middleware: 'auth',
})
</script>

<template>
  <ElementsHeaderMax value="Admin Dashboard." />
  <div class="flex justify-end">
    <NuxtLink
      class="btn font-poppins font-semibold text-white btn-primary"
      :to="{ name: 'admin-post-new' }"
    >
      Create new post
    </NuxtLink>
  </div>
  <div class="grid grid-cols-1 gap-y-2 my-4">
    <div
      v-for="item in items"
      :key="item.slug"
      class="flex items-center justify-between p-2 bg-white rounded-md shadow-md"
    >
      <div class="flex items-center">
        <div class="ml-4">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: item.slug } }"
            class="text-lg font-semibold hover:underline"
          >
            {{ item.title }}
          </NuxtLink>
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
        <NuxtLink
          class="btn text-white btn-primary"
          :to="{ name: 'admin-post-edit-slug', params: { slug: item.slug } }"
        >
          Edit
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

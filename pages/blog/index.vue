<script setup lang="ts">
import { ref } from 'vue'
import { BloggyApi, type PostListItem } from '../../composables/BloggyApi'

useSeoMeta({
  title: 'Blog | Sam Gozman',
  ogTitle: 'Blog | Sam Gozman',
})

const fetchError = ref<Error | null>(null)

const { data, error } = useAsyncData<any, unknown, PostListItem[]>('blog-list', async () => {
  const res = await BloggyApi.getPosts(1, 15)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    fetchError.value = new Error('Failed to fetch posts')
    return
  }

  if (error.value) {
    console.error('Failed to fetch posts:', error.value)
    fetchError.value = new Error('Failed to fetch posts')
    return
  }

  if (res.posts.length === 0) {
    console.error('No posts found')
    fetchError.value = new Error('No posts found')
    return
  }

  return res.posts
})
</script>

<template>
  <ElementsHeaderMax value="Blog." />
  <div v-if="fetchError" class="alert alert-error">
    <p>{{ fetchError.message }}</p>
  </div>

  <div class="grid grid-cols-1 gap-y-2 my-4">
    <BlogListItem v-for="item in data" :key="item.slug" :post="item" />
  </div>

  <!-- TODO: Add pagination here -->

  <ElementsArticleProse>
    <h3 class="text-left">Welcome to Sam Gozman's Dev Blog!</h3>
    <p>
      Hello fellow developers and enthusiasts! I'm thrilled to welcome you to my blog, a space where
      I share insights, experiences, and updates from the world of development. As a lead backend
      engineer with a strong passion for open-source initiatives, I've dedicated myself to crafting
      and refining my own
      <NuxtLink class="link link-hover" :to="{ name: 'projects' }">projects</NuxtLink>. This blog
      marks the second incarnation of my journey, where I continue to explore, create, and
      contribute within the vibrant open-source community.
    </p>
    <p>
      Whether you're a seasoned developer or just starting out on your coding journey, there's
      something here for everyone. <strong>Welcome aboard!</strong>
    </p>
  </ElementsArticleProse>
</template>

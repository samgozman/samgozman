<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import BlogListItem from '@/components/bloglist/BlogListItem.vue'
import { BloggyApi, type PostListItem } from '@/services/BloggyApi'

const items = ref<PostListItem[]>([])
const isLoading = ref(true)

onMounted(async () => {
  const res = await BloggyApi.getPosts(1, 15)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    return
  }

  items.value.push(...res.posts)
  isLoading.value = false
})
</script>

<template>
  <HeaderMax value="Blog." />
  <div class="grid grid-cols-1 gap-y-2 my-4">
    <!-- Skeleton preview -->
    <div v-if="isLoading" class="flex flex-col gap-4 w-full">
      <!-- fist -->
      <div class="flex gap-4 justify-between items-center">
        <div class="skeleton w-16 h-12 shrink-0"></div>
        <div class="flex flex-col flex-grow gap-4">
          <div class="skeleton h-4 w-[70%]"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
        <div class="skeleton w-16 h-12"></div>
      </div>
      <div class="skeleton h-4 w-full md:w-[80%]"></div>
      <div class="skeleton h-4 w-full md:w-[60%]"></div>
      <div class="skeleton h-4 w-full md:w-[40%]"></div>
      <!-- second -->
      <div class="flex gap-4 justify-between items-center">
        <div class="skeleton w-16 h-12 shrink-0"></div>
        <div class="flex flex-col flex-grow gap-4">
          <div class="skeleton h-4 w-[70%]"></div>
          <div class="skeleton h-4 w-full"></div>
        </div>
        <div class="skeleton w-16 h-12"></div>
      </div>
      <div class="skeleton h-4 w-full md:w-[80%]"></div>
      <div class="skeleton h-4 w-full md:w-[60%]"></div>
      <div class="skeleton h-4 w-full md:w-[40%]"></div>
    </div>
    <BlogListItem v-else v-for="item in items" :key="item.slug" :post="item" />
  </div>

  <!-- TODO: Add pagination here -->

  <ArticleProse>
    <h3 class="text-left">Welcome to Sam Gozman's Dev Blog!</h3>
    <p>
      Hello fellow developers and enthusiasts! I'm thrilled to welcome you to my blog, a space where
      I share insights, experiences, and updates from the world of development. As a lead backend
      engineer with a strong passion for open-source initiatives, I've dedicated myself to crafting
      and refining my own
      <RouterLink class="link link-hover" :to="{ name: 'projects' }">projects</RouterLink>. This
      blog marks the second incarnation of my journey, where I continue to explore, create, and
      contribute within the vibrant open-source community.
    </p>
    <p>
      Whether you're a seasoned developer or just starting out on your coding journey, there's
      something here for everyone. <strong>Welcome aboard!</strong>
    </p>
  </ArticleProse>
</template>

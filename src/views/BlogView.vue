<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import BlogListItem from '@/components/bloglist/BlogListItem.vue'
import { BloggyApi, type PostListItem } from '@/services/BloggyApi'

const items = ref<PostListItem[]>([])

onMounted(async () => {
  const res = await BloggyApi.getPosts(1, 15)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    return
  }

  items.value.push(...res.posts)
})
</script>

<template>
  <HeaderMax value="Blog." />
  <div class="grid grid-cols-1 gap-y-2 my-4">
    <BlogListItem v-for="item in items" :key="item.slug" :post="item" />
  </div>

  <!-- TODO: Add pagination here -->

  <ArticleProse>
    <h2>Welcome to Sam Gozman's Dev Blog!</h2>
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

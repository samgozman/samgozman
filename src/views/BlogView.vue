<script setup lang="ts">
import { onMounted, ref } from 'vue'
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
    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor quidem vitae ut nam
      nisi ea facere, officiis debitis corporis sint expedita qui dolore fugit aut, ad, beatae amet
      temporibus.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente dolor quidem vitae ut nam
      nisi ea facere, officiis debitis corporis sint expedita qui dolore fugit aut, ad, beatae amet
      temporibus.
    </p>
  </ArticleProse>
</template>

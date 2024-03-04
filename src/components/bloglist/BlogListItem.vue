<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { type PostListItem } from '@/services/BloggyApi'

const props = defineProps<{
  post: PostListItem
}>()

const createdAt = new Date(props.post.created_at)
const readingTime = Math.floor(props.post.reading_time / 60)
const readingTimeSeconds = props.post.reading_time % 60
</script>

<template>
  <div class="card shadow-lg compact bg-base-100 flex flex-row">
    <!-- Left Section -->
    <div class="p-4 flex flex-col justify-center items-center">
      <p class="text-base-content text-opacity-80 text-2xl font-black font-poppins uppercase">
        {{ `${createdAt.getDate()} ${createdAt.toLocaleString('default', { month: 'short' })}` }}
      </p>
      <p class="text-base-content text-opacity-20 text-4xl font-poppins font-semibold">
        {{ createdAt.getFullYear() }}
      </p>
    </div>

    <!-- Middle Section -->
    <div class="flex-1 p-4 flex flex-col justify-center">
      <RouterLink
        :to="{ name: 'blog-post', params: { slug: post.slug } }"
        class="card-title text-primary font-poppins truncate text-2xl font-semibold hover:underline"
      >
        {{ post.title }}
      </RouterLink>
      <p class="text-base-content text-opacity-80">
        {{ post.description }}
      </p>
      <div class="">
        <div v-for="(keyword, index) in post.keywords" :key="index" class="badge text-sm">
          {{ keyword }}
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="p-4 flex-2 flex flex-col justify-between items-end">
      <div>
        <!-- Empty div to take up space at the top -->
      </div>
      <div>
        <p class="text-sm text-gray-700">{{ readingTime }}m {{ readingTimeSeconds }}s read</p>
      </div>
    </div>
  </div>
</template>

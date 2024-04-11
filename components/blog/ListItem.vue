<script setup lang="ts">
import { type PostListItem } from '../../composables/BloggyApi'

const props = defineProps<{
  post: PostListItem
}>()

const createdAt = new Date(props.post.created_at)
const readingTime = Math.floor(props.post.reading_time / 60)
const readingTimeSeconds = props.post.reading_time % 60
</script>

<template>
  <div
    class="card hover:shadow-lg compact bg-base-100 flex flex-col sm:flex-row transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-102"
  >
    <!-- Left Section -->
    <div
      class="p-1 md:p-4 flex justify-between sm:justify-start sm:gap-2 items-center sm:flex-col sm:items-center"
    >
      <p class="text-base-content text-opacity-80 text-2xl font-black font-poppins uppercase">
        {{ `${createdAt.getDate()} ${createdAt.toLocaleString('en-GB', { month: 'short' })}` }}
      </p>
      <p class="text-base-content text-opacity-20 text-2xl sm:text-4xl font-poppins font-semibold">
        {{ createdAt.getFullYear() }}
      </p>
    </div>

    <!-- Middle Section -->
    <div class="flex-1 p-1 md:p-4 flex flex-col justify-center">
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="card-title text-primary font-poppins text-2xl font-semibold hover:underline"
      >
        {{ post.title }}
      </NuxtLink>
      <p class="text-base-content text-opacity-80 text-justify sm:text-left">
        {{ post.description }}
      </p>
      <div class="flex gap-2 mt-1">
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

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
    class="card relative hover:shadow-lift compact bg-base-100 flex flex-col sm:flex-row transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-[1.02]"
  >
    <!-- Left Section -->
    <div
      class="p-1 md:p-4 flex justify-between sm:justify-start sm:gap-2 items-center sm:flex-col sm:items-center"
    >
      <p
        class="text-base-content text-opacity-80 text-2xl font-black font-poppins uppercase tabular-nums"
      >
        {{ `${createdAt.getDate()} ${createdAt.toLocaleString('en-GB', { month: 'short' })}` }}
      </p>
      <p
        class="text-base-content text-opacity-20 text-2xl sm:text-4xl font-poppins font-semibold tabular-nums"
      >
        {{ createdAt.getFullYear() }}
      </p>
    </div>

    <!-- Middle Section -->
    <div class="flex-1 p-1 md:p-4 flex flex-col justify-center">
      <!-- The after: pseudo-element stretches the link over the whole card,
           so the lifting card is clickable everywhere, not just on the title. -->
      <NuxtLink
        :to="{ name: 'blog-slug', params: { slug: post.slug } }"
        class="card-title text-primary font-poppins text-2xl font-semibold hover:underline after:absolute after:inset-0"
      >
        {{ post.title }}
      </NuxtLink>
      <p class="text-base-content text-opacity-80 text-justify sm:text-left">
        {{ post.description }}
      </p>
      <div class="flex flex-wrap gap-2 mt-1">
        <div v-for="(keyword, index) in post.keywords" :key="index" class="badge text-sm">
          {{ keyword }}
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="p-4 flex-2 flex flex-col justify-end items-end">
      <p class="text-sm text-gray-700 tabular-nums whitespace-nowrap">
        {{ readingTime }}m {{ readingTimeSeconds }}s read
      </p>
    </div>
  </div>
</template>

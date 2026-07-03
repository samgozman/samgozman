<script setup lang="ts">
import { type NuxtError, clearError } from 'nuxt/app'

const props = defineProps({
  error: Object as () => NuxtError
})

const isNotFound = computed(() => props.error?.statusCode === 404)

// TODO: send in sentry
if (!isNotFound.value) {
  console.error('Error page:', props.error)
}

useSeoMeta({
  title: isNotFound.value ? 'Page not found | Sam Gozman' : 'Something went wrong | Sam Gozman',
  robots: 'noindex, follow'
})

// clearError removes the error state and navigates in one step. Doing it
// manually (without clearing) would re-trigger the error page on the next route.
const goTo = (path: string) => clearError({ redirect: path })
</script>

<template>
  <NuxtLayout>
    <div class="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      <h1 class="font-black font-poppins text-8xl md:text-9xl text-primary leading-none">
        {{ error?.statusCode ?? 404 }}
      </h1>

      <template v-if="isNotFound">
        <p class="mt-4 text-2xl md:text-3xl font-bold font-poppins">Well, this is awkward<span class="text-primary">.</span></p>
        <p class="mt-3 max-w-md text-base-content/70">
          That page wandered off somewhere — a few older posts have been retired over the years.
          Good news: the blog is alive and well, with fresh writing.
        </p>
      </template>

      <template v-else>
        <p class="mt-4 text-2xl md:text-3xl font-bold font-poppins">
          {{ error?.statusMessage || 'Something went wrong' }}<span class="text-primary">.</span>
        </p>
        <p class="mt-3 max-w-md text-base-content/70">
          An unexpected error tripped us up. Try the blog or head back home.
        </p>
      </template>

      <div class="mt-8 flex flex-col sm:flex-row gap-3">
        <button class="btn btn-primary" @click="goTo('/blog')">Explore the blog →</button>
        <button class="btn btn-ghost" @click="goTo('/')">Back home</button>
      </div>
    </div>
  </NuxtLayout>
</template>

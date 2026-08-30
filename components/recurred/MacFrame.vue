<script setup lang="ts">
defineProps<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    width="1600"
    height="1043"
    :loading="loading"
    :fetchpriority="fetchpriority"
    class="block w-full h-auto"
  />
</template>

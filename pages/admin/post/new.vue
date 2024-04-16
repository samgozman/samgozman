<script setup lang="ts">
useSeoMeta({
  title: 'New post | Sam Gozman'
})

definePageMeta({
  requiresAuth: true,
  middleware: 'auth'
})
</script>

<template>
  <ElementsHeaderMax value="🔥 Add new post." />

  <div class="w-full">
    <MarkdownEdit />
  </div>
</template>

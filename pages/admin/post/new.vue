<script setup lang="ts">
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

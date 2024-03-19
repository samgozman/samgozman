<script setup lang="ts">
import HeaderMax from '@/components/elements/HeaderMax.vue'
import MarkdownEdit from '@/components/MarkdownEdit.vue'

window.document.title = 'New post | Sam Gozman'
</script>

<template>
  <HeaderMax value="🔥 Add new post." />

  <div class="w-full">
    <MarkdownEdit />
  </div>
</template>

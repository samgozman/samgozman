<template>
  <article
    class="prose prose-headings:font-poppins prose-p:font-sans prose-a:text-orange-500 text-lg sm:text-xl prose-p:text-left sm:prose-p:text-justify sm:prose-p:hyphens-auto"
  >
    <slot />
  </article>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  // Scroll to the hash if it exists
  const hash = window.location.hash.slice(1) // remove the '#' from the start
  const element = document.getElementById(hash)
  if (element) {
    element.scrollIntoView()
  }
})
</script>

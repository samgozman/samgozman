<template>
  <article
    ref="article"
    class="prose prose-headings:font-poppins prose-p:font-sans prose-a:text-orange-500 text-xl prose-p:text-justify"
  >
    <slot />
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { forceMagicDwarfsToColorHeaders } from '@/components/elements/utils'

const article = ref<HTMLElement | null>(null)

/* Add punctuation header styles for */
onMounted(() => {
  if (!article.value) {
    return
  }

  forceMagicDwarfsToColorHeaders(article.value)

  // Scroll to the hash if it exists
  const hash = window.location.hash.slice(1) // remove the '#' from the start
  const element = document.getElementById(hash)
  if (element) {
    element.scrollIntoView()
  }
})
</script>

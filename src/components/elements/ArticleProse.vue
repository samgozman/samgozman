<template>
  <article
    ref="article"
    class="prose prose-headings:font-poppins prose-p:font-sans prose-a:text-orange-500"
  >
    <slot />
  </article>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const article = ref<HTMLElement | null>(null)

/* Add punctuation header styles for */
onMounted(() => {
  if (!article.value) {
    return
  }

  const headers = article.value.querySelectorAll(
    '.prose h1, .prose h2, .prose h3, .prose h4, .prose h5, .prose h6'
  )

  headers.forEach((header) => {
    // Get the first text node of the header
    const textNode = Array.from(header.childNodes).find((node) => node.nodeType === Node.TEXT_NODE)

    if (textNode) {
      // Get the text of the text node
      let text = textNode.nodeValue || ''

      // Replace punctuation with wrapped punctuation
      text = text.replace(/([.,;:!?])/g, '<span class="text-orange-500">$1</span>')

      // Create a temporary div to convert string to HTML
      const tempDiv = document.createElement('div')
      tempDiv.innerHTML = text

      // Insert all new nodes before the old one
      while (tempDiv.firstChild) {
        header.insertBefore(tempDiv.firstChild, textNode)
      }

      // Remove the old text node
      header.removeChild(textNode)
    }
  })
})
</script>

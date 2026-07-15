<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

// Same white-card-on-canvas shell as the default layout, with the Recurred
// violet canvas (see main.css) and Recurred-only navigation.
const isScrolled = ref(false)

const handleScroll = () => {
  const bottomOfWindow =
    window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
  isScrolled.value = window.scrollY > 0 && !bottomOfWindow
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

useHead({
  bodyAttrs: { 'data-canvas': 'recurred' },
  meta: [
    // Smart App Banner: Safari on iOS shows a native banner linking to the app
    { name: 'apple-itunes-app', content: 'app-id=6783705092' },
    { name: 'theme-color', content: '#6455E0' },
    { name: 'theme-color', content: '#6455E0', media: '(prefers-color-scheme: light)' },
    { name: 'theme-color', content: '#8B7CFF', media: '(prefers-color-scheme: dark)' }
  ]
})
</script>

<template>
  <div class="min-h-dvh flex flex-col">
    <div
      data-theme="recurred"
      :class="isScrolled ? 'mx-0 px-3' : 'mx-3 px-0'"
      class="bg-base-100 rounded-xl flex flex-col my-3 min-h-[calc(100dvh-1.5rem)] sm:m-3 sm:p-0 lg:m-5 lg:min-h-[calc(100dvh-2.5rem)] transition-all duration-500"
    >
      <header class="container mb-4 md:mb-0 lg:mb-6 xl:mb-12 mx-auto max-w-6xl">
        <RecurredNavbar />
      </header>
      <main class="flex-1 px-2 md:px-4 container mx-auto max-w-6xl">
        <slot />
      </main>
      <RecurredFooter />
    </div>
  </div>
</template>

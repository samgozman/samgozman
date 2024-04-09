<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
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
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div
      :class="isScrolled ? 'mx-0 px-3' : 'mx-3 px-0'"
      class="bg-base-100 rounded-xl flex flex-col my-3 min-h-[calc(100vh-1.5rem)] sm:m-3 sm:p-0 lg:m-5 lg:min-h-[calc(100vh-2.5rem)] transition-all duration-500"
    >
      <AppHeader />
      <main class="flex-1 px-2 md:px-4 container mx-auto max-w-6xl">
        <slot />
      </main>
      <AppFooter />
    </div>
  </div>
</template>

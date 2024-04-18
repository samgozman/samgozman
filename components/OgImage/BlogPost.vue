<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'title'
  }
)
</script>

<style>
.og-preview {
  font-family: 'Poppins', sans-serif;
}
</style>

<template>
  <div class="h-full w-full flex items-start justify-start bg-white relative text-[#1F2937] og-preview">
    <h1 class="w-full text-7xl p-20 font-black text-left">
      {{ title }}
    </h1>
    <div
      class="w-full text-4xl font-bold px-20 absolute bottom-36 left-0 flex justify-between"
    >
      <span
        >https<span class="text-orange-500">://</span>gozman<span class="text-orange-500">.</span
        >space</span
      >
      <span>Sam Gozman<span class="text-orange-500 mx-1">|</span>Blog</span>
    </div>
    <div class="w-full h-8 bg-orange-500 absolute bottom-20 left-0"></div>
  </div>
</template>

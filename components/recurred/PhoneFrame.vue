<script setup lang="ts">
// Minimal iPhone-style frame (Dynamic Island generation): dark bezel with a
// metallic rim and a black island pill over the screenshot's status bar.
// daisyUI's mockup-phone is the older notch design, hence the custom frame.
defineProps<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()
</script>

<template>
  <div class="relative rounded-[2.6rem] bg-zinc-900 p-2 ring-1 ring-zinc-600/60 shadow-lift-violet">
    <div
      class="absolute top-[2.5%] left-1/2 -translate-x-1/2 w-[28%] h-[3.7%] rounded-full bg-black z-10"
      aria-hidden="true"
    ></div>
    <img
      :src="src"
      :alt="alt"
      width="750"
      height="1630"
      :loading="loading"
      :fetchpriority="fetchpriority"
      class="w-full rounded-[2.1rem]"
    />
  </div>
</template>

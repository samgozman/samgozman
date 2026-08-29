<script setup lang="ts">
// The macOS screenshots are already polished floating windows: real window
// chrome (traffic lights, title bar, rounded corners) and a soft macOS shadow,
// all on a transparent background. So we render the window as-is — no frame,
// no wrapping box (a rounded box + box-shadow would trace the transparent
// margin as a white card), and no CSS `filter: drop-shadow` either: on an
// image this large the filter's rasterized layer clips at its region edge,
// leaving a hard cut that repaints away on scroll. The baked shadow is the lift.
defineProps<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()
</script>

<template>
  <img
    :src="src"
    :alt="alt"
    width="1600"
    height="1043"
    :loading="loading"
    :fetchpriority="fetchpriority"
    class="block w-full h-auto"
  />
</template>

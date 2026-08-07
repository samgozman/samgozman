<script setup lang="ts">
// Landscape iPad frame (iPad Pro generation)
defineProps<{
  src: string
  alt: string
  loading?: 'lazy' | 'eager'
  fetchpriority?: 'high' | 'low' | 'auto'
}>()
</script>

<template>
  <div class="shadow-lift-violet" style="position: relative; aspect-ratio: 1000 / 770">
    <div
      style="
        width: 100%;
        height: 100%;
        border-radius: 3.6% / 5%;
        background: linear-gradient(180deg, #2c2c2e 0%, #1c1c1e 100%);
        position: relative;
        overflow: hidden;
        box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      "
    >
      <div
        aria-hidden="true"
        style="
          position: absolute;
          top: 1.5%;
          left: 50%;
          transform: translateX(-50%);
          width: 0.65%;
          height: 0.85%;
          border-radius: 50%;
          background: #111113;
          z-index: 20;
        "
      ></div>
      <div
        style="
          position: absolute;
          left: 3%;
          top: 3.9%;
          width: 94%;
          height: 92.2%;
          border-radius: 1.6% / 2.2%;
          overflow: hidden;
          background: #000;
        "
      >
        <img
          :src="src"
          :alt="alt"
          width="1800"
          height="1350"
          :loading="loading"
          :fetchpriority="fetchpriority"
          style="display: block; width: 100%; height: 100%; object-fit: cover; object-position: top"
        />
      </div>
    </div>
  </div>
</template>

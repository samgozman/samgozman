<template>
  <h1 :id="id">
    <slot />
  </h1>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

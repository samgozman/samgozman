<script setup lang="ts">
const props = defineProps<{
  value: string
}>()
</script>

<template>
  <a :href="props.value" class="link">{{ props.value }}</a>
</template>

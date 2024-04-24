<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const processed = computed(() => {
  return addColorPunctuationToHtmlString(props.value)
})
</script>

<template>
  <h1 class="not-prose text-5xl font-bold font-poppins mb-4" v-html="processed"></h1>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: string
}>()

const processed = computed(() => {
  return addColorPunctuationForLastSignToHtmlString(props.value)
})
</script>

<template>
  <span class="text-xl font-semibold font-poppins" v-html="processed"></span>
</template>

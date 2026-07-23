<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    value: string
    // `display` suits short page titles; `hero` steps down further on small
    // screens for long headlines that would otherwise dominate mobile.
    size?: 'display' | 'hero'
  }>(),
  { size: 'display' }
)

const processed = computed(() => {
  return addColorPunctuationToHtmlString(props.value)
})

const sizeClass = computed(() =>
  props.size === 'hero' ? 'text-3xl sm:text-4xl md:text-5xl' : 'text-4xl sm:text-5xl'
)
</script>

<template>
  <h1
    :class="sizeClass"
    class="not-prose mb-4 font-poppins font-bold tracking-tight text-balance"
    v-html="processed"
  ></h1>
</template>

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
  // `hero` scales fluidly on phones so a long headline holds two clean lines
  // (never splitting a clause) from small screens up to Pro Max, then steps to
  // the fixed desktop scale at sm+.
  props.size === 'hero'
    ? 'text-[clamp(1.5rem,7vw,1.875rem)] sm:text-4xl md:text-5xl'
    : 'text-4xl sm:text-5xl'
)
</script>

<template>
  <h1
    :class="sizeClass"
    class="not-prose mb-4 font-poppins font-bold tracking-tight text-balance"
    v-html="processed"
  ></h1>
</template>

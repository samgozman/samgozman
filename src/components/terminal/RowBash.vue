<script setup lang="ts">
import type { HLJSApi } from 'highlight.js'

const props = defineProps<{
  hljs: HLJSApi
  value: string
}>()

function toHtmlString(str: string) {
  return props.hljs.highlight(str, { language: 'bash' }).value
}
</script>

<template>
  <pre data-prefix="$"><code v-html="toHtmlString(props.value)"></code></pre>
</template>

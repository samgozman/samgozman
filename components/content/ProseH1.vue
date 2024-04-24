<template>
  <h1 :id="id">
    <span v-html="processedSlotContent" />
  </h1>
</template>

<script setup lang="ts">
import { computed } from '#imports'

defineProps<{ id?: string }>()

const slots = useSlots()

const processedSlotContent = computed(() => {
  const defaultSlot = slots.default ? slots.default()[0].children : ''
  return addColorPunctuationToHtmlString(defaultSlot?.toString() || '')
})
</script>

<template>
  <h2 :id="id">
    <LinkAnchor v-if="generate" :id="id" />
    <span v-html="processedSlotContent" />
  </h2>
</template>

<script setup lang="ts">
import { computed, useRuntimeConfig } from '#imports'

const props = defineProps<{ id?: string }>()

const { headings } = useRuntimeConfig().public.mdc
const generate = computed(() => props.id && headings?.anchorLinks?.h2)

const slots = useSlots()

const processedSlotContent = computed(() => {
  const defaultSlot = slots.default ? slots.default()[0].children : ''
  return addColorPunctuationToHtmlString(defaultSlot?.toString() || '')
})
</script>

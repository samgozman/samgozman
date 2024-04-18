<script setup lang="ts">
import { createTwoPartsTitle } from './utils'

const props = defineProps<{
  value: string
}>()

const title = createTwoPartsTitle(props.value)
</script>

<template>
  <h1 class="not-prose text-5xl font-bold font-poppins mb-4">
    {{ title.part1 }}<span v-if="title.part2" class="text-primary">{{ title.part2 }}</span>
  </h1>
</template>

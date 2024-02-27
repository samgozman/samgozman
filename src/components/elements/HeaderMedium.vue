<script setup lang="ts">
import { createTwoPartsTitle } from './utils'

const props = defineProps<{
  value: string
}>()

const title = createTwoPartsTitle(props.value)
</script>

<template>
  <h2 class="text-2xl font-bold font-poppins mb-2">
    {{ title.part1 }}<span v-if="title.part2" class="text-orange-500">{{ title.part2 }}</span>
  </h2>
</template>

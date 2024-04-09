<script setup lang="ts">
import { createTwoPartsTitle } from '~/composables/utils'

const props = defineProps<{
  value: string
}>()

const title = createTwoPartsTitle(props.value)
</script>

<template class="not-prose text-xl font-semibold font-sans">
  <span class="text-xl font-semibold font-poppins">
    {{ title.part1 }}<span v-if="title.part2" class="text-primary">{{ title.part2 }}</span>
  </span>
</template>

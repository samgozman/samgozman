<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime'

const props = defineProps<{
  id: string
  value: string
  createdAt: Date
}>()

const parsedMarkdown = await parseMarkdown(props.value)
</script>

<style>
/* Custom styles */

.prose li :where(p):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
  margin-top: 0em;
  margin-bottom: 0em;
}
</style>

<template>
  <ElementsArticleProse>
    <ContentRenderer :value="parsedMarkdown" />
    <div class="not-prose flex flex-row justify-between items-center mt-4">
      <div class="mb-2 sm:mb-0">
        <p
          class="text-base-content text-opacity-80 text-2xl font-black font-poppins uppercase tabular-nums"
        >
          {{ `${createdAt.getDate()} ${createdAt.toLocaleString('en-GB', { month: 'short' })}` }}
        </p>
      </div>
      <div>
        <p
          class="text-base-content text-opacity-20 text-2xl sm:text-2xl font-poppins font-semibold tabular-nums"
        >
          {{ createdAt.getFullYear() }}
        </p>
      </div>
    </div>
  </ElementsArticleProse>
</template>

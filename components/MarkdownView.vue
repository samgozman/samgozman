<script setup lang="ts">
import markdownParser from '@nuxt/content/transformers/markdown'

const props = defineProps<{
  id: string
  value: string
  createdAt: Date
}>()

// Note: this a bit of a workaround to get the parsed markdown.
// See: https://github.com/nuxt/content/issues/924#issuecomment-1274633178
// Alternatively, you can use https://github.com/nuxt-modules/mdc to parse the markdown.
// See: https://github.com/nuxt/content/issues/924#issuecomment-1851945345
const parsedMarkdown = markdownParser.parse
  ? await markdownParser.parse(props.id, props.value, {})
  : ''

// TODO: Set font for headers
// TODO: Add anchor links to headers
// TODO: color headers punctuations
</script>

<style>
/* Custom styles */

.prose li :where(p):not(:where([class~='not-prose'], [class~='not-prose'] *)) {
  margin-top: 0em;
  margin-bottom: 0em;
}

.prose .anchor::before {
  content: '#';
}

.prose .anchor {
  text-decoration: none;
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.25em;
  color: var(--tw-prose-body);
  opacity: 0.2;
  transition:
    opacity 0.3s ease,
    color 0.3s ease;
}

.prose .anchor:hover {
  opacity: 1;
  color: oklch(var(--p));
}

.prose h1:first-child .anchor {
  display: none;
}
</style>

<template>
  <ElementsArticleProse>
    <ContentRenderer :value="parsedMarkdown" />
    <div class="not-prose flex flex-row justify-between items-center mt-4">
      <div class="mb-2 sm:mb-0">
        <p class="text-base-content text-opacity-80 text-2xl font-black font-poppins uppercase">
          {{ `${createdAt.getDate()} ${createdAt.toLocaleString('en-GB', { month: 'short' })}` }}
        </p>
      </div>
      <div>
        <p
          class="text-base-content text-opacity-20 text-2xl sm:text-2xl font-poppins font-semibold"
        >
          {{ createdAt.getFullYear() }}
        </p>
      </div>
    </div>
  </ElementsArticleProse>
</template>

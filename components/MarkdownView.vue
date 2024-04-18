<script setup lang="ts">
// Imports only core MD complier
// import CherryEngine from 'cherry-markdown/dist/cherry-markdown.engine.core'

const props = defineProps<{
  value: string
  createdAt: Date
}>()

const html = ref('')

if (process.client) {
  onMounted(async () => {
    const { default: CherryEngine } = await import(
      'cherry-markdown/dist/cherry-markdown.engine.core'
    )
    const engine = new CherryEngine({}) as any
    html.value = engine.makeHtml(props.value) // Note: this is valid call
  })
}
</script>

<style>
/* 
* Part of the cherry-markdown.css with custom colors
* This is a copy of the styles from the cherry-markdown/dist/cherry-markdown.css
*/

/** <Code block> */
div[data-type='codeBlock'] > pre {
  font-size: 1rem;
}

div[data-type='codeBlock'] .token.comment,
div[data-type='codeBlock'] .token.block-comment,
div[data-type='codeBlock'] .token.prolog,
div[data-type='codeBlock'] .token.doctype,
div[data-type='codeBlock'] .token.cdata {
  color: rgb(100 116 139); /* .text-gray-500 */
}
div[data-type='codeBlock'] .token.punctuation {
  color: rgb(203 213 225); /* .text-gray-300 */
}
div[data-type='codeBlock'] .token.tag,
div[data-type='codeBlock'] .token.attr-name,
div[data-type='codeBlock'] .token.namespace,
div[data-type='codeBlock'] .token.deleted {
  color: #e2777a;
}
div[data-type='codeBlock'] .token.function-name {
  color: #6196cc;
}
div[data-type='codeBlock'] .token.boolean,
div[data-type='codeBlock'] .token.number,
div[data-type='codeBlock'] .token.function {
  color: oklch(var(--s));
}
div[data-type='codeBlock'] .token.property,
div[data-type='codeBlock'] .token.class-name,
div[data-type='codeBlock'] .token.constant,
div[data-type='codeBlock'] .token.symbol {
  color: #f8c555;
}
div[data-type='codeBlock'] .token.selector,
div[data-type='codeBlock'] .token.important,
div[data-type='codeBlock'] .token.atrule,
div[data-type='codeBlock'] .token.keyword,
div[data-type='codeBlock'] .token.builtin {
  color: rgb(192 132 252); /* .text-purple-400 */
}
div[data-type='codeBlock'] .token.string,
div[data-type='codeBlock'] .token.char,
div[data-type='codeBlock'] .token.attr-value,
div[data-type='codeBlock'] .token.regex,
div[data-type='codeBlock'] .token.variable {
  color: #7ec699;
}
div[data-type='codeBlock'] .token.operator,
div[data-type='codeBlock'] .token.entity,
div[data-type='codeBlock'] .token.url {
  color: #67cdcc;
}
div[data-type='codeBlock'] .token.important,
div[data-type='codeBlock'] .token.bold {
  font-weight: bold;
}
div[data-type='codeBlock'] .token.italic {
  font-style: italic;
}
div[data-type='codeBlock'] .token.entity {
  cursor: help;
}
div[data-type='codeBlock'] .token.inserted {
  color: green;
}
/** </Code block> */
</style>

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
  <ElementsArticleProse v-if="html">
    <div v-if="html" v-html="html" />
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

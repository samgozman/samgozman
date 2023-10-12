<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import bashExtended from './languages/bashExtended'
import RowTerminal from './RowTerminal.vue'

hljs.registerLanguage('bash', bashExtended)
</script>

<style>
@import 'highlight.js/styles/github-dark.css';
</style>

<template>
  <div class="mockup-code">
    <RowTerminal :hljs="hljs" value="curl -s -L https://gozman.space/portfolio.sh | bash" />
  </div>
</template>

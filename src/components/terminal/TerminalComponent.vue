<script setup lang="ts">
import hljs from 'highlight.js/lib/core'
import bashExtended from './languages/bashExtended'
import RowBash from './RowBash.vue'

hljs.registerLanguage('bash', bashExtended)
</script>

<style>
@import 'highlight.js/styles/github-dark.css';
</style>

<template>
  <div class="mockup-code">
    <RowBash :hljs="hljs" value="ssh sam@gozman.space -p 26 -i ~/.ssh/backend_dev_rsa" />
    <RowBash :hljs="hljs" value="curl -s -L https://gozman.space/portfolio.sh | bash" />
  </div>
</template>

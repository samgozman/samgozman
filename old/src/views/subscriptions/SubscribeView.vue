<script setup lang="ts">
import ArticleProse from '@/components/elements/ArticleProse.vue'
import SubscribeForm from '@/components/SubscribeForm.vue'

window.document.title = 'Subscribe to blog  | Sam Gozman'
</script>

<template>
  <ArticleProse class="flex flex-col items-center sm:items-start">
    <h2>Subscribe to my blog:</h2>
    <p>
      Get the latest blog posts delivered right to your inbox. Enter your email address below and
      click the subscribe button 👾
    </p>
    <SubscribeForm class="not-prose mt-2" />
  </ArticleProse>
</template>

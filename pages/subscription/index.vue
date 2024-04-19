<script setup lang="ts">
useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Subscribe | Sam Gozman',
  ogTitle: 'Subscribe | Sam Gozman',
  twitterTitle: 'Subscribe | Sam Gozman',
  description: 'Subscribe to my blog and get the latest blog posts delivered right to your inbox.',
  ogDescription:
    'Subscribe to my blog and get the latest blog posts delivered right to your inbox.',
  twitterDescription:
    'Subscribe to my blog and get the latest blog posts delivered right to your inbox.',
  twitterImageAlt: 'Subscribe | Sam Gozman'
})
defineOgImageComponent('Default', {
  title: 'Subscribe'
})
</script>

<template>
  <ElementsArticleProse class="flex flex-col items-center sm:items-start">
    <h2>Subscribe to my blog:</h2>
    <p>
      Get the latest blog posts delivered right to your inbox. Enter your email address below and
      click the subscribe button 👾
    </p>
    <SubscribeForm class="not-prose mt-2" />
  </ElementsArticleProse>
</template>

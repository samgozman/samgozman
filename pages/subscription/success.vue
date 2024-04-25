<script setup lang="ts">
useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Subscription confirmation | Sam Gozman'
})
</script>

<template>
  <ElementsArticleProse>
    <ProseH2>Thank you for subscribing!</ProseH2>
    <p>
      You will receive a confirmation email shortly. Please click the link in the email to confirm
      your subscription.
    </p>
  </ElementsArticleProse>
</template>

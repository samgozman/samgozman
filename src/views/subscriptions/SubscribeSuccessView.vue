<script setup lang="ts">
import { useSeoMeta } from 'unhead'
import ArticleProse from '@/components/elements/ArticleProse.vue'

useSeoMeta({
  title: 'Subscription confirmation | Sam Gozman'
})
</script>

<template>
  <ArticleProse>
    <h2>Thank you for subscribing!</h2>
    <p>
      You will receive a confirmation email shortly. Please click the link in the email to confirm
      your subscription.
    </p>
  </ArticleProse>
</template>

<script setup lang="ts">
definePageMeta({ layout: 'recurred' })

// TODO(owner): confirm this is the address you want App Store users writing to.
const supportEmail = 'sam@gozman.space'

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Support | Recurred',
  ogTitle: 'Support | Recurred',
  twitterTitle: 'Support | Recurred',
  description:
    'Get help with Recurred, the subscription tracker for iPhone. Questions, bug reports, and feedback are welcome by email.',
  ogDescription:
    'Get help with Recurred, the subscription tracker for iPhone. Questions, bug reports, and feedback are welcome by email.',
  twitterDescription:
    'Get help with Recurred, the subscription tracker for iPhone. Questions, bug reports, and feedback are welcome by email.'
})

defineOgImage('Recurred')

const faq = [
  {
    q: 'Is Recurred free?',
    a: 'Yes. There are no ads, no subscriptions, and no account.'
  },
  {
    q: 'Does my data leave my device?',
    a: 'Only to sync through your own iCloud. Recurred has no servers holding your subscription data.'
  },
  {
    q: 'How do I sync between devices?',
    a: 'Enable iCloud in Settings. Sync uses your private iCloud account.'
  },
  {
    q: 'How do I report a bug?',
    a: `Email ${supportEmail} with a short description of what happened.`
  }
]
</script>

<template>
  <div class="max-w-2xl pb-16">
    <h1 class="font-poppins font-bold tracking-tight text-4xl mb-6">Recurred Support</h1>
    <p class="text-lg text-gray-600">
      Questions, bug reports, and feedback are all welcome. Write to
      <a class="link text-primary font-medium" :href="`mailto:${supportEmail}`">{{
        supportEmail
      }}</a>
      and you will get a reply from the developer.
    </p>

    <h2 class="font-poppins font-bold tracking-tight text-2xl mt-12 mb-6">Common questions</h2>
    <dl class="space-y-8">
      <div v-for="item in faq" :key="item.q">
        <dt class="font-poppins font-semibold text-lg">{{ item.q }}</dt>
        <dd class="text-gray-600 mt-1.5">{{ item.a }}</dd>
      </div>
    </dl>

    <div class="mt-12 flex flex-wrap gap-x-6 gap-y-2">
      <NuxtLink class="link link-hover text-primary font-medium" to="/apps/recurred"
        >About Recurred</NuxtLink
      >
      <NuxtLink class="link link-hover text-primary font-medium" to="/apps/recurred/privacy"
        >Privacy Policy</NuxtLink
      >
    </div>
  </div>
</template>

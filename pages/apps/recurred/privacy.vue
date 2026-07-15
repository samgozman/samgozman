<script setup lang="ts">
definePageMeta({ layout: 'recurred' })

const supportEmail = 'recurred-app@gozman.space'
const lastUpdated = 'July 15, 2026'

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Privacy Policy | Recurred',
  ogTitle: 'Privacy Policy | Recurred',
  twitterTitle: 'Privacy Policy | Recurred',
  description:
    'Privacy policy for Recurred, the subscription tracker for iPhone. Your data stays on your device: no tracking, no ads, no accounts.',
  ogDescription:
    'Privacy policy for Recurred, the subscription tracker for iPhone. Your data stays on your device: no tracking, no ads, no accounts.',
  twitterDescription:
    'Privacy policy for Recurred, the subscription tracker for iPhone. Your data stays on your device: no tracking, no ads, no accounts.'
})

defineOgImage('Recurred')
</script>

<template>
  <article
    class="prose prose-headings:font-poppins prose-a:text-primary max-w-[70ch] pb-16 text-lg"
  >
    <h1 class="font-poppins font-bold tracking-tight text-4xl">Privacy Policy for Recurred</h1>
    <p>
      <strong>Last updated: {{ lastUpdated }}</strong>
    </p>
    <p>
      Recurred is a subscription tracker for iPhone. This policy explains what data the app handles
      and how. The short version: your subscription data stays on your device, and Recurred does not
      track you, show ads, or sell your data.
    </p>

    <h2>Data stored on your device</h2>
    <p>
      Everything you add to Recurred, such as your subscriptions, prices, categories, and usage
      notes, is stored locally on your device. Recurred has no account system and no server that
      holds this data.
    </p>

    <h2>iCloud sync</h2>
    <p>
      If you enable iCloud, your data syncs through your own private iCloud account using Apple's
      iCloud (CloudKit). This sync is between your devices and your personal iCloud. The developer
      cannot read this data. It is governed by Apple's iCloud terms and privacy policy.
    </p>

    <h2>Crash reports</h2>
    <p>
      Recurred uses Sentry to collect anonymous crash reports so bugs can be found and fixed. These
      reports contain diagnostic information about a crash. They are not linked to your identity,
      are not used to track you, and personally identifying information is not collected.
    </p>

    <h2>Currency exchange rates</h2>
    <p>
      To convert between currencies, Recurred downloads current exchange rates from a service run by
      the developer. It returns rates and nothing else: it does not collect personal or user data,
      and no information about you, your device, or your subscriptions is sent with these requests.
    </p>

    <h2>What Recurred does not do</h2>
    <ul>
      <li>No ads.</li>
      <li>No analytics that profile you.</li>
      <li>No selling or sharing of your data.</li>
      <li>No account, login, or personal profile.</li>
      <li>No tracking across other apps or websites.</li>
    </ul>

    <h2>Third-party brand names and logos</h2>
    <p>
      Recurred displays the names and logos of subscription services so you can recognize your own
      subscriptions. These trademarks belong to their respective owners and are used for
      identification only. Recurred is not affiliated with, endorsed by, or sponsored by these
      companies.
    </p>

    <h2>Children's privacy</h2>
    <p>Recurred does not knowingly collect personal information from anyone, including children.</p>

    <h2>Your rights</h2>
    <p>
      Because your data lives on your device and your own iCloud, you are in control of it. Deleting
      the app removes its local data. You can manage iCloud data through your device's iCloud
      settings.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If this policy changes, the updated version will be posted on this page with a new "Last
      updated" date.
    </p>

    <h2>Contact</h2>
    <p>
      Questions about this policy can be sent to
      <a class="whitespace-nowrap" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a
      >.
    </p>
  </article>
</template>

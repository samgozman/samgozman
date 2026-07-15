<script setup lang="ts">
definePageMeta({ layout: 'recurred' })

const appStoreUrl = 'https://apps.apple.com/app/id6783705092'

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Recurred: Subscription Tracker for iPhone',
  ogTitle: 'Recurred: Subscription Tracker for iPhone',
  twitterTitle: 'Recurred: Subscription Tracker for iPhone',
  description:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  ogDescription:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  twitterDescription:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  twitterImageAlt: 'Recurred: Subscription Tracker for iPhone'
})

defineOgImage('Recurred')

const features = [
  {
    icon: 'i-tabler:coins',
    title: 'Track in any currency',
    text: 'Add each subscription in its own currency and see the total in yours, with exchange rates kept up to date.'
  },
  {
    icon: 'i-tabler:bell-ringing',
    title: 'Never miss a payment',
    text: 'A calendar shows exactly when money leaves your account, and reminders reach you before a renewal or free trial ends.'
  },
  {
    icon: 'i-tabler:calendar-month',
    title: 'See future months',
    text: 'Open any upcoming month to check what you are due to pay. Useful when a few annual bills happen to land together.'
  },
  {
    icon: 'i-tabler:scissors',
    title: "Cancel what you don't use",
    text: 'The Optimizer tracks how often you actually open each service and helps you decide what is worth keeping.'
  },
  {
    icon: 'i-tabler:chart-pie',
    title: 'Know where the money goes',
    text: 'Spending breakdowns by month and category mean nothing quietly drains your account in the background.'
  },
  {
    icon: 'i-tabler:shield-lock',
    title: 'Private by default',
    text: 'Your subscriptions stay on your device and sync only through your own iCloud. Recurred does not track or sell your data.'
  }
]

const screens = [
  {
    src: '/img/recurred/s7.webp',
    alt: 'Recurred payment calendar showing which subscriptions charge on each day of the month',
    title: 'Payment calendar',
    text: 'Every charge on the day it lands.'
  },
  {
    src: '/img/recurred/s9.webp',
    alt: 'Recurred analytics screen with a monthly spending breakdown by category',
    title: 'Monthly breakdown',
    text: 'Spending by category, month by month.'
  },
  {
    src: '/img/recurred/s11.webp',
    alt: 'Recurred Optimizer results suggesting a subscription to cancel based on usage',
    title: 'The Optimizer',
    text: 'Find the subscriptions worth cancelling.'
  }
]
</script>

<template>
  <div class="pb-6">
    <!-- Hero: copy left, home screen right -->
    <section class="grid md:grid-cols-2 gap-10 md:gap-6 items-center pt-2 md:pt-6 pb-16 md:pb-20">
      <div class="text-center md:text-left">
        <div class="flex items-center justify-center md:justify-start gap-3 mb-6">
          <span
            class="inline-flex h-14 w-14 items-center justify-center rounded-[22%] bg-gradient-to-br from-[#8B7CFF] to-[#6455E0] shadow-lift-violet"
          >
            <img src="/img/recurred/glyph.svg" alt="" class="h-8 w-8" />
          </span>
          <span class="font-poppins font-semibold text-3xl">Recurred</span>
        </div>
        <h1
          class="font-poppins font-bold tracking-tight text-balance text-4xl lg:text-5xl leading-tight"
        >
          Every subscription in <span class="text-primary">one place</span>.
        </h1>
        <p class="mt-4 text-lg text-gray-600 text-balance md:max-w-[40ch]">
          Always know what you're paying and when the next charge lands. Free, with no ads and no
          account.
        </p>
        <a :href="appStoreUrl" class="inline-block mt-8" title="Download Recurred on the App Store">
          <img
            src="/img/recurred/appstore-badge.svg"
            alt="Download on the App Store"
            width="156"
            height="52"
            class="h-[52px] w-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          />
        </a>
      </div>
      <div class="relative flex justify-center md:justify-end md:pr-6">
        <div
          class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[85%] -z-0 bg-[radial-gradient(closest-side,rgb(139_124_255/0.35),transparent)]"
          aria-hidden="true"
        ></div>
        <RecurredPhoneFrame
          src="/img/recurred/s1.webp"
          alt="Recurred home screen listing upcoming charges and all subscriptions"
          fetchpriority="high"
          class="relative w-64 lg:w-72"
        />
      </div>
    </section>

    <!-- Screenshots: calendar, analytics, optimizer -->
    <section class="pb-16 md:pb-20">
      <h2 class="font-poppins font-bold tracking-tight text-3xl mb-8">A closer look.</h2>
      <div class="grid sm:grid-cols-3 gap-5">
        <figure
          v-for="screen in screens"
          :key="screen.title"
          class="rounded-3xl bg-[radial-gradient(120%_100%_at_50%_0%,rgb(139_124_255/0.14),rgb(139_124_255/0.03)_70%)] border border-gray-200 p-5 pb-6 flex flex-col items-center text-center"
        >
          <RecurredPhoneFrame
            :src="screen.src"
            :alt="screen.alt"
            loading="lazy"
            class="w-full max-w-56"
          />
          <figcaption class="mt-5">
            <p class="font-poppins font-semibold text-lg">{{ screen.title }}</p>
            <p class="text-gray-600 mt-1">{{ screen.text }}</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Features -->
    <section id="features" class="pb-16 md:pb-20 scroll-mt-8">
      <h2 class="font-poppins font-bold tracking-tight text-3xl mb-8">What it does.</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-gray-200 p-6 transition-shadow duration-300 hover:shadow-lift-violet"
        >
          <span
            class="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#6455E0]/10 text-primary"
          >
            <Icon :name="feature.icon" class="text-2xl" />
          </span>
          <h3 class="font-poppins font-semibold text-lg mt-4">{{ feature.title }}</h3>
          <p class="text-gray-600 mt-2">{{ feature.text }}</p>
        </div>
      </div>
    </section>

    <!-- Privacy callout -->
    <section class="pb-16 md:pb-20">
      <div
        class="relative overflow-hidden rounded-3xl bg-[radial-gradient(120%_140%_at_15%_0%,#8B7CFF,#6455E0_60%)] px-8 py-12 md:px-14 md:py-16 text-white"
      >
        <img
          src="/img/recurred/glyph.svg"
          alt=""
          aria-hidden="true"
          class="absolute -right-10 -bottom-14 h-64 w-64 opacity-15 rotate-12 hidden sm:block"
        />
        <h2 class="font-poppins font-bold tracking-tight text-3xl text-balance">
          Your data stays yours.
        </h2>
        <p class="mt-4 text-lg text-white/90 max-w-[52ch]">
          Everything you add lives on your device and syncs through your own iCloud. No account, no
          ads, no tracking, and your subscription data never reaches anyone else's servers.
        </p>
        <NuxtLink
          to="/apps/recurred/privacy"
          class="inline-block mt-6 font-medium underline underline-offset-4 decoration-white/50 hover:decoration-white"
        >
          Read the privacy policy
        </NuxtLink>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="pb-14 md:pb-20 text-center">
      <h2 class="font-poppins font-bold tracking-tight text-3xl text-balance">
        Get your subscriptions under control.
      </h2>
      <p class="mt-3 text-gray-600">Free for iPhone. Requires iOS 18 or later.</p>
      <a :href="appStoreUrl" class="inline-block mt-6" title="Download Recurred on the App Store">
        <img
          src="/img/recurred/appstore-badge.svg"
          alt="Download on the App Store"
          width="156"
          height="52"
          loading="lazy"
          class="h-[52px] w-auto transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
        />
      </a>
    </section>
  </div>
</template>

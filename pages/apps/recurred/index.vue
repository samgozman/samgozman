<script setup lang="ts">
definePageMeta({ layout: 'recurred' })

const appStoreUrl = 'https://apps.apple.com/app/id6783705092'

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Recurred: Subscription Tracker for iPhone & iPad',
  ogTitle: 'Recurred: Subscription Tracker for iPhone & iPad',
  twitterTitle: 'Recurred: Subscription Tracker for iPhone & iPad',
  description:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  ogDescription:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  twitterDescription:
    "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
  twitterImageAlt: 'Recurred: Subscription Tracker for iPhone & iPad'
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
    text: 'The Optimizer lets you log how often you use each service over a set period, then helps you decide what is worth keeping.'
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
  },
  {
    icon: 'i-tabler:layout-grid',
    title: 'Widgets on your home screen',
    text: 'Up Next shows what is due and how much, or the next three charges with names and prices. This Month tracks how much has already left your account and what next month is shaping up to cost.'
  },
  {
    icon: 'i-tabler:sparkles',
    title: 'Add them by describing them',
    text: 'Write or dictate your subscriptions in your own words and Recurred fills in the details, read entirely on your device. Needs an iPhone with Apple Intelligence.'
  },
  {
    icon: 'i-tabler:file-spreadsheet',
    title: 'Import from a spreadsheet',
    text: 'Already keep your subscriptions in a CSV file? Bring the whole list across at once instead of adding them one by one.'
  }
]

// Six, so the three-column grid fills two even rows. Ordered as the journey
// through the app: add, schedule, then understand and act. Captions run long
// enough to fill two lines in a card, so none of them strands a single word on
// a line of its own.
const screens = [
  {
    src: '/img/recurred/s2.webp',
    alt: 'Recurred add-subscription screen with a grid of popular services to pick from',
    title: 'Add in seconds',
    text: 'Tap one of the popular services, or search for your own.'
  },
  {
    src: '/img/recurred/s7.webp',
    alt: 'Recurred import screen where several subscriptions are described in a sentence for the app to extract',
    title: 'Or just describe them',
    text: 'Write or dictate the whole list and your iPhone fills in the details.'
  },
  {
    src: '/img/recurred/s5.webp',
    alt: 'Recurred payment calendar showing which subscriptions charge on each day of the month',
    title: 'Payment calendar',
    text: 'Every charge on the day it lands, so nothing arrives unannounced.'
  },
  {
    src: '/img/recurred/s4.webp',
    alt: 'Recurred subscription details showing impact analysis with the yearly cost and share of its category',
    title: 'What one costs you',
    text: 'The yearly figure, and how much of a category it quietly takes.'
  },
  {
    src: '/img/recurred/s6.webp',
    alt: 'Recurred analytics screen with monthly spending bars, a yearly summary and a breakdown by currency',
    title: 'The year at a glance',
    text: 'Totals by month and by year, in every currency you pay in.'
  },
  {
    src: '/img/recurred/s13.webp',
    alt: 'Recurred Optimizer summary showing the yearly saving from the subscriptions you cancelled',
    title: 'The Optimizer',
    text: 'Cut what you never open and watch the yearly total drop.'
  }
]

const ipadCallouts = [
  {
    icon: 'i-tabler:layout-dashboard',
    title: 'The whole dashboard at once',
    text: 'Totals, upcoming charges and every subscription together, with no scrolling to find them.'
  },
  {
    icon: 'i-tabler:columns-2',
    title: 'Calendar and totals, together',
    text: "The month's payment calendar sits right beside the numbers it adds up to."
  },
  {
    icon: 'i-tabler:devices',
    title: 'The same list everywhere',
    text: "Add a subscription on your iPhone and it's already on your iPad, synced through your iCloud."
  }
]

const faqs = [
  {
    q: 'Is Recurred free?',
    a: 'Yes. Every feature is unlocked, with no ads and no in-app purchases — there is no subscription required to track your subscriptions.'
  },
  {
    q: 'Does Recurred connect to my bank?',
    a: 'No. There is no bank login and no account to create. You add what you pay for yourself, so Recurred never touches your financial accounts.'
  },
  {
    q: 'Where is my data kept?',
    a: 'On your device. It syncs only through your own iCloud, so your subscriptions move between iPhone and iPad without passing through anyone else’s servers. Nothing is tracked or sold.'
  },
  {
    q: 'Is there an Android version?',
    a: 'No, and there are no plans for one. Recurred is built to be fully native on iPhone and iPad rather than spread thin across platforms.'
  },
  {
    q: 'Does it work on iPad?',
    a: 'Yes. It is a universal app — the same subscriptions, synced through iCloud, with a layout that uses the bigger screen to show your details side by side.'
  },
  {
    q: 'Are there home screen widgets?',
    a: 'Two. Up Next shows the charges about to land, and This Month tracks your spending against what you usually pay — both without opening the app.'
  },
  {
    q: "Can Recurred help me cancel subscriptions I don't use?",
    a: 'Yes. Over a tracking period you set, you log how often you actually use each service — Recurred does not watch you in the background. It then sorts them by usage and shows how much you would save a year by cutting the ones you barely touch.'
  },
  {
    q: 'Do I need Apple Intelligence?',
    a: 'No. It only powers a few small touches — describing your subscriptions in plain English for Recurred to fill in, or suggesting a fitting icon from Apple’s own symbols when a service is not one of the built-in ones — all handled on your device. Everything else, including importing a CSV, works without it.'
  },
  {
    q: 'Who makes Recurred?',
    a: 'One developer. I built it to get my own subscriptions under control, then made it good enough to share — which is why it stays free and private, with every feature unlocked.'
  }
]

useSchemaOrg([
  defineSoftwareApp({
    '@type': 'MobileApplication',
    name: 'Recurred',
    description:
      "Every subscription in one place, so you always know what you're paying and when. Free, private, no ads and no account.",
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'iOS 18.0 or later, iPadOS 18.0 or later',
    // No softwareVersion: it ships every few days and no rich result uses it,
    // so a hardcoded value would only ever drift out of date.
    downloadUrl: appStoreUrl,
    featureList: features.map((feature) => feature.title),
    offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' }
  }),
  defineWebPage({ '@type': ['WebPage', 'FAQPage'] }),
  ...faqs.map((faq) => defineQuestion({ name: faq.q, acceptedAnswer: faq.a }))
])
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
            <p class="text-gray-600 mt-1 text-balance">{{ screen.text }}</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="pb-16 md:pb-20">
      <div
        class="relative overflow-hidden rounded-3xl border border-gray-200 bg-[radial-gradient(120%_100%_at_50%_0%,rgb(139_124_255/0.14),rgb(139_124_255/0.03)_70%)] px-6 py-12 md:px-12 md:py-16"
      >
        <div class="text-center max-w-2xl mx-auto">
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-[#6455E0]/10 text-primary font-medium px-3 py-1 text-sm"
          >
            <Icon name="i-tabler:device-ipad" class="text-base" />
            Now on iPad
          </span>
          <h2 class="font-poppins font-bold tracking-tight text-3xl mt-5 text-balance">
            Made for the bigger screen.
          </h2>
          <p class="mt-4 text-lg text-gray-600 text-balance">
            Recurred uses every inch of the iPad, so your whole subscription picture sits on one
            screen instead of one tap away.
          </p>
        </div>

        <!-- Centerpiece: the home dashboard, the screen the extra room helps most -->
        <div class="relative mt-10 md:mt-12 flex justify-center">
          <div
            class="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80%] -z-0 bg-[radial-gradient(closest-side,rgb(139_124_255/0.35),transparent)]"
            aria-hidden="true"
          ></div>
          <RecurredTabletFrame
            src="/img/recurred/ipad-home.webp"
            alt="Recurred on iPad showing the home dashboard: the month's total, spending by category, upcoming charges and every subscription grouped by type, all on one screen"
            loading="lazy"
            class="relative w-full max-w-3xl"
          />
        </div>

        <div class="grid sm:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div v-for="callout in ipadCallouts" :key="callout.title" class="text-center">
            <span
              class="mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-[#6455E0]/10 text-primary"
            >
              <Icon :name="callout.icon" class="text-2xl" />
            </span>
            <h3 class="font-poppins font-semibold text-lg mt-4">{{ callout.title }}</h3>
            <p class="text-gray-600 mt-2 text-balance">{{ callout.text }}</p>
          </div>
        </div>

        <!-- Proof of the side-by-side claim -->
        <figure class="mt-12 max-w-4xl mx-auto">
          <RecurredTabletFrame
            src="/img/recurred/ipad-analytics.webp"
            alt="Recurred analytics on iPad with the monthly payment calendar on the left and this month's totals, the yearly summary and a currency breakdown on the right"
            loading="lazy"
            class="w-full"
          />
          <figcaption class="mt-5 text-center text-gray-600 text-balance">
            A month's payment calendar and the totals it adds up to, read together instead of one
            after the other.
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

    <section id="faq" class="pb-16 md:pb-20 scroll-mt-8">
      <div class="max-w-3xl mx-auto">
        <h2 class="font-poppins font-bold tracking-tight text-3xl mb-8">Questions, answered.</h2>
        <details v-for="faq in faqs" :key="faq.q" class="group border-b border-gray-200">
          <summary
            class="flex items-center justify-between gap-4 cursor-pointer list-none py-4 font-poppins font-semibold text-lg [&::-webkit-details-marker]:hidden"
          >
            {{ faq.q }}
            <Icon
              name="i-tabler:chevron-down"
              class="shrink-0 text-xl text-gray-400 transition-transform duration-200 group-open:rotate-180"
            />
          </summary>
          <p class="text-gray-600 pb-4 pr-8 text-balance">{{ faq.a }}</p>
        </details>
      </div>
    </section>

    <!-- Closing CTA -->
    <section class="pb-14 md:pb-20 text-center">
      <h2 class="font-poppins font-bold tracking-tight text-3xl text-balance">
        Get your subscriptions under control.
      </h2>
      <p class="mt-3 text-gray-600">
        Free for iPhone and iPad. Requires iOS or iPadOS 18 or later.
      </p>
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

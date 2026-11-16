<script setup lang="ts">
definePageMeta({ layout: 'recurred' })

const supportEmail = 'recurred-app@gozman.space'
const lastUpdated = 'November 16, 2026'

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Privacy Policy | Recurred',
  ogTitle: 'Privacy Policy | Recurred',
  twitterTitle: 'Privacy Policy | Recurred',
  description:
    'Privacy policy for Recurred, the subscription tracker for iPhone, iPad and Mac. Your data stays on your device: no tracking, no ads, no accounts.',
  ogDescription:
    'Privacy policy for Recurred, the subscription tracker for iPhone, iPad and Mac. Your data stays on your device: no tracking, no ads, no accounts.',
  twitterDescription:
    'Privacy policy for Recurred, the subscription tracker for iPhone, iPad and Mac. Your data stays on your device: no tracking, no ads, no accounts.'
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
      Recurred is a subscription tracker for iPhone, iPad and Mac. This policy explains what data the
      app handles and how. The short version: your subscription data stays on your device, and
      Recurred does not track you, show ads, or sell your data. If you choose to, you can share
      anonymous usage data to help improve the app. It's off unless you turn it on.
    </p>

    <h2>Data stored on your device</h2>
    <p>
      Everything you add to Recurred, such as your subscriptions, prices, categories, and usage
      notes, is stored locally on your device. Recurred has no account system. Your subscriptions,
      prices, categories and notes are never sent to us.
    </p>

    <h2>iCloud sync</h2>
    <p>
      If you enable iCloud, your data syncs through your own private iCloud account using Apple's
      iCloud (CloudKit). This sync is between your devices and your personal iCloud. The developer
      cannot read this data. It is governed by Apple's iCloud terms and privacy policy.
    </p>

    <h2>Crash reports</h2>
    <p>
      Recurred uses
      <a href="https://sentry.io/privacy/" target="_blank" rel="nofollow noopener noreferrer">Sentry</a>
      to collect anonymous crash reports so bugs can be found and fixed. These reports contain
      diagnostic information about a crash. They are not linked to your identity, are not used to
      track you, and personally identifying information is not collected.
    </p>

    <h2>Currency exchange rates</h2>
    <p>
      To convert between currencies, Recurred downloads current exchange rates from a service run by
      the developer. It returns rates and nothing else: it does not collect personal or user data,
      and no information about you, your device, or your subscriptions is sent with these requests.
    </p>

    <h2>Optional usage data</h2>
    <p>
      Recurred can share anonymous usage data with us to help decide what to improve. It is off until
      you agree: the app asks once, during setup or at the top of Settings, and you can change your
      answer any time in Settings → Usage Data.
    </p>
    <p><strong>What is sent, only if you agree:</strong></p>
    <ul>
      <li>
        Which screens and features you use, and whether a task like adding a subscription was
        finished or cancelled.
      </li>
      <li>
        When the app is opened and closed, and how (for example from a widget or a notification).
      </li>
      <li>
        Rounded counts, such as "4–10 subscriptions", and which options are on (for example iCloud
        sync, reminders, appearance, widgets in use).
      </li>
      <li>A rough range of your monthly spending, converted to US dollars (for example "51–100").</li>
      <li>
        Your region and App Store country, your time zone (our server keeps only its country), your
        device and app language, your base currency and your region's currency.
      </li>
      <li>The app version, the type of device (iPhone, iPad or Mac) and the system version.</li>
      <li>
        A random identifier for this installation. On supported devices this is an Apple App Attest
        key, which proves the data comes from the genuine app; it is not your Apple ID or a device
        identifier used for advertising.
      </li>
    </ul>
    <p>
      <strong>What is never sent:</strong> subscription names, exact prices, notes, dates, search
      text, file names or which templates you pick. No advertising identifier, no tracking across
      apps or websites.
    </p>
    <p>
      <strong>Where it goes:</strong> only to a server we run ourselves, at a hosting provider in
      Germany (EU). It is not shared with or sold to anyone and no third-party analytics service is
      involved. Our server does not store IP addresses.
    </p>
    <p>
      <strong>How long it is kept:</strong> events are linked to the random identifier for up to
      three years, after which they are anonymized. If you turn sharing off, collection stops at once
      and what was already sent is unlinked from your installation.
    </p>
    <p>
      <strong>Legal basis (EU/UK):</strong> your consent, which you can withdraw at any time without
      affecting the rest of the app.
    </p>

    <h2>What Recurred does not do</h2>
    <ul>
      <li>No ads.</li>
      <li>
        No profiling or tracking. The optional usage data is anonymous and is used only in aggregate
        to decide what to improve.
      </li>
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
      Your subscriptions live on your device and in your own iCloud, so you control them: deleting
      the app removes its local data, and iCloud data is managed in your device's iCloud settings.
    </p>
    <p>
      For the optional usage data, you can stop sharing at any time in Settings → Usage Data. This
      stops collection, unlinks what was already sent from your installation, and deletes the random
      identifier on your device.
    </p>
    <p>
      The usage data carries no name, email or account, and the app never shows its random
      identifier, so we have no way to tell which data is yours. That means we can't look up, hand
      over, correct or delete a particular person's usage data on request (GDPR Art. 11). Turning
      sharing off is how you withdraw your consent and remove the link. If you are in the EU or UK,
      you can also complain to your local data protection authority.
    </p>

    <h2>Changes to this policy</h2>
    <p>
      If this policy changes, the updated version will be posted on this page with a new "Last
      updated" date.
    </p>

    <h2>Who is responsible</h2>
    <p>
      Recurred is developed by Semen Gozman, Netanya, Israel, who is responsible for the data
      described in this policy. For any privacy question or request, email
      <a class="whitespace-nowrap" :href="`mailto:${supportEmail}`">{{ supportEmail }}</a
      >.
    </p>
  </article>
</template>

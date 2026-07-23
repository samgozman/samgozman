<script setup lang="ts">
const experience = calculateAge(new Date('2016-07-01'))
const age = calculateAge(new Date('1997-06-01'))

useSeoMeta({
  ogUrl: `${useRuntimeConfig().public.baseUrl}${useRoute().path}`,
  title: 'Sam Gozman | Engineering Team Lead & Senior Backend Engineer',
  ogTitle: 'Sam Gozman | Engineering Team Lead & Senior Backend Engineer',
  twitterTitle: 'Sam Gozman | Engineering Team Lead & Senior Backend Engineer',
  description:
    'Sam Gozman is an Engineering Team Lead and Senior Backend Engineer working in Go, Node.js, and Rust, with a focus on fintech and open source.',
  ogDescription:
    'Sam Gozman is an Engineering Team Lead and Senior Backend Engineer working in Go, Node.js, and Rust, with a focus on fintech and open source.',
  twitterDescription:
    'Sam Gozman is an Engineering Team Lead and Senior Backend Engineer working in Go, Node.js, and Rust, with a focus on fintech and open source.',
  twitterImageAlt: 'Sam Gozman | Engineering Team Lead & Senior Backend Engineer',
  ogType: 'profile',
  profileFirstName: 'Sam',
  profileLastName: 'Gozman',
  profileUsername: 'samgozman'
})

defineOgImage('Default', {
  title: 'Profile'
})
</script>

<template>
  <ElementsArticleProse class="md:max-w-[100ch]">
    <!-- Mobile: profile header with a prominent portrait. The full portrait
         column below is desktop-only. -->
    <div class="not-prose mb-6 flex items-center gap-5 md:hidden">
      <img
        class="w-[44%] shrink-0 aspect-[3/4] rounded-2xl object-cover object-[center_22%] shadow-lift"
        src="/img/me.jpg"
        alt="Portrait of Sam Gozman"
      />
      <div class="flex min-w-0 flex-col gap-3">
        <div class="leading-tight">
          <p class="text-lg text-base-content/60">👋 Hi, I am</p>
          <p class="font-poppins text-2xl font-semibold">Sam Gozman</p>
        </div>
        <ul class="flex flex-wrap gap-2 text-2xl text-primary">
          <li>
            <a
              href="https://github.com/samgozman"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              class="inline-flex p-1.5"
            >
              <Icon name="i-ion:logo-github" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/samgozman/"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              class="inline-flex p-1.5"
            >
              <Icon name="i-ion:logo-linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://t.me/samgozman"
              target="_blank"
              rel="noopener noreferrer"
              title="Telegram"
              class="inline-flex p-1.5"
            >
              <Icon name="i-tabler:brand-telegram" />
            </a>
          </li>
          <li>
            <a href="mailto:sam@gozman.space" title="Mail to me: sam@gozman.space" class="inline-flex p-1.5">
              <Icon name="i-ion:mail-outline" />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-col md:flex-row">
      <img
        class="not-prose hidden rounded-xl md:mr-8 md:block md:max-h-[24rem] lg:max-h-[34rem]"
        src="/img/me.jpg"
        alt="Portrait of Sam Gozman"
      />

      <div class="grow">
        <div class="badge badge-outline badge-lg mb-2 hidden md:inline-flex">
          Hi, I am Sam Gozman! 👋
        </div>
        <ElementsHeaderMax
          value="Engineering Team Lead & Senior Backend Engineer."
          size="hero"
          class="text-left"
        />
        <p>
          Welcome to my dev
          <NuxtLink class="link link-hover" :to="{ name: 'blog' }">blog</NuxtLink> 2.0! I'm a Senior
          Backend Engineer and a Team Lead with expertise in Golang and NodeJS and a big fan of
          open-source. I've been working as a developer over the course of the last
          <strong>{{ experience }}+ years</strong>.
        </p>
        <p>
          My programming journey began at the age of <strong>12</strong>, tinkering with mods for a
          computer game and soon diving into web development by creating my first website. With
          solid commercial experience since 2016. Now I'm {{ age }} years old and I specialize in
          backend development, particularly drawn to fintech, stocks, savings, and investments
          fields.
        </p>
        <p>
          My main stack includes Go, NodeJS, Rust, PostgreSQL, Redis, VueJS, Docker, Linux, and Git,
          forming a versatile toolkit for efficient development.
        </p>
        <div class="grow hidden md:flex justify-center items-center">
          <ul class="not-prose menu menu-horizontal rounded-box">
            <li>
              <a
                href="https://github.com/samgozman"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <Icon name="i-ion:logo-github" class="text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samgozman/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <Icon name="i-ion:logo-linkedin" class="text-4xl" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/samgozman"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <Icon name="i-tabler:brand-telegram" class="text-4xl" />
              </a>
            </li>
            <li>
              <a href="mailto:sam@gozman.space" title="Mail to me: sam@gozman.space">
                <Icon name="i-ion:mail-outline" class="text-4xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ElementsArticleProse>
</template>

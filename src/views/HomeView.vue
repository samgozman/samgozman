<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { useSeoMeta } from 'unhead'
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'

useSeoMeta({
  title: 'Sam Gozman | Backend Engineer & Open Source Developer',
  description: 'Developer blog of Sam Gozman. Backend Engineer & Open Source Developer.',
  ogDescription: 'Developer blog of Sam Gozman. Backend Engineer & Open Source Developer.',
  ogTitle: 'Sam Gozman | Backend Engineer & Open Source Developer',
  ogType: 'website',
  ogUrl: 'https://gozman.space',
  ogSiteName: 'Sam Gozman',
  twitterCard: 'summary_large_image',
  twitterImageAlt: 'Sam Gozman | Backend Engineer & Open Source Developer'
})

function calculateAge(date: Date) {
  const today = new Date()
  const age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1
  }

  return age
}

const experience = calculateAge(new Date('2016-07-01'))
</script>

<template>
  <ArticleProse class="md:max-w-[100ch]">
    <div class="flex flex-col md:flex-row">
      <div class="avatar not-prose mb-4 md:my-0 mx-auto md:mr-8">
        <div class="w-64 md:w-96">
          <img class="rounded-full md:rounded-xl md:max-h-[38rem]" src="/img/me.jpg" />
        </div>
      </div>

      <div class="flex-grow">
        <div class="badge badge-outline badge-lg mb-2">Hi, I am Sam Gozman! 👋</div>
        <HeaderMax value="Backend Engineer & Open Source Developer." class="text-left" />
        <p>
          Welcome to my dev
          <RouterLink class="link link-hover" :to="{ name: 'blog' }">blog</RouterLink> 2.0! I'm an
          experienced Backend Engineer with expertise in Golang and NodeJS and a big fan of
          open-source. I've been working as a developer over the course of the last
          <strong>{{ experience }}+ years</strong>.
        </p>
        <p>
          My programming journey began at the age of <strong>12</strong>, tinkering with mods for a
          computer game and soon diving into web development by creating my first website. With
          solid commercial experience since 2016, I now specialize in backend development,
          particularly drawn to fintech, stocks, savings, and investments fields.
        </p>
        <p>
          My main stack includes Go, NodeJS, Rust, PostgreSQL, Redis, VueJS, Docker, Linux, and Git,
          forming a versatile toolkit for efficient development.
        </p>
        <div class="flex-grow flex justify-center items-center">
          <ul class="not-prose menu menu-horizontal rounded-box">
            <li>
              <a
                href="https://github.com/samgozman"
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
              >
                <ion-icon name="logo-github" class="text-4xl"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/samgozman/"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
              >
                <ion-icon name="logo-linkedin" class="text-4xl"></ion-icon>
              </a>
            </li>
            <li>
              <a
                href="https://t.me/samgozman"
                target="_blank"
                rel="noopener noreferrer"
                title="Telegram"
              >
                <ion-icon name="paper-plane-outline" class="text-4xl"></ion-icon>
              </a>
            </li>
            <li>
              <a href="mailto:sam@gozman.space" title="Mail to me: sam@gozman.space">
                <ion-icon name="mail-outline" class="text-4xl"></ion-icon>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </ArticleProse>
</template>

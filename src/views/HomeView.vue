<script setup lang="ts">
import HeaderMax from '@/components/elements/HeaderMax.vue'
import ArticleProse from '@/components/elements/ArticleProse.vue'

function calculateAge(date: Date) {
  const today = new Date()
  const age = today.getFullYear() - date.getFullYear()
  const m = today.getMonth() - date.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    return age - 1
  }

  return age
}

const age = calculateAge(new Date('1997-06-01'))
const experience = calculateAge(new Date('2016-07-01'))
</script>

<template>
  <HeaderMax value="Sam Gozman." />

  <ArticleProse class="md:max-w-[100ch] lg:max-w-[90ch]">
    <h2>Backend Engineer.</h2>
    <div class="flex flex-col md:flex-row">
      <img
        class="mask mask-hexagon-2 mx-[8ch] my-4 md:my-0 md:ml-0 md:mr-8 md:max-h-56 order-first md:order-none"
        src="/img/me.jpg"
      />
      <div class="flex-grow">
        <p class="text-justify">
          Hi! My name is <strong>Sam Gozman</strong>, {{ age }}
          years old. I'm an experienced Backend Engineer with expertise in Golang and NodeJS and a
          big fan of open-source. I've been working as a developer over the course of the last
          <strong>{{ experience }}+ years</strong>.
        </p>
        <p class="text-justify">
          My programming journey began at the age of <strong>12</strong>, tinkering with mods for a
          computer game and soon diving into web development by creating my first website. With
          solid commercial experience since 2016, I now specialize in backend development,
          particularly drawn to fintech, stocks, savings, and investments fields.
        </p>
        <p class="text-justify">
          My main stack includes Go, NodeJS, Rust, PostgreSQL, Redis, VueJS, Docker, Linux, and Git,
          forming a versatile toolkit for efficient development.
        </p>
      </div>
    </div>
    <h3>Navigation:</h3>
    <p>menu items of the website</p>
    <h3>Contacts:</h3>
    <p>all socials in one place</p>
  </ArticleProse>
</template>

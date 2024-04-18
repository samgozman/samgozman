<script setup lang="ts">
const experience = calculateAge(new Date('2016-07-01'))
const age = calculateAge(new Date('1997-06-01'))

useSeoMeta({
  title: 'Sam Gozman | Backend Engineer & Open Source Developer',
  ogTitle: 'Sam Gozman | Backend Engineer & Open Source Developer',
  ogType: 'profile',
  profileFirstName: 'Sam',
  profileLastName: 'Gozman',
  profileUsername: 'samgozman'
})
</script>

<template>
  <ElementsArticleProse class="md:max-w-[100ch]">
    <div class="flex flex-col md:flex-row">
      <img
        class="not-prose rounded-xl mb-4 mx-auto max-w-[60%] md:max-w-full md:my-0 md:ml-0 md:mr-8 md:max-h-[24rem] lg:max-h-[34rem]"
        src="/img/me.jpg"
      />

      <div class="flex-grow">
        <div class="badge badge-outline badge-lg mb-2">Hi, I am Sam Gozman! 👋</div>
        <ElementsHeaderMax value="Backend Engineer & Open Source Developer." class="text-left" />
        <p>
          Welcome to my dev
          <NuxtLink class="link link-hover" :to="{ name: 'blog' }">blog</NuxtLink> 2.0! I'm an
          experienced Backend Engineer with expertise in Golang and NodeJS and a big fan of
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
        <div class="flex-grow flex justify-center items-center">
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

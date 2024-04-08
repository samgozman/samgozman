<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SubscribeForm from './SubscribeForm.vue'
</script>

<template>
  <footer
    class="footer container mx-auto max-w-6xl p-4 flex flex-col sm:flex-row justify-center sm:justify-between items-center sm:items-end"
  >
    <aside class="order-2 sm:order-1">
      <div class="text-center md:text-left">
        <div
          class="grid grid-flow-col gap-4 md:gap-0 mb-8 md:mb-0 text-3xl md:text-2xl text-primary"
        >
          <a href="https://github.com/samgozman" target="_blank" rel="noopener noreferrer">
            <ion-icon name="logo-github"></ion-icon>
          </a>
          <a
            href="https://www.linkedin.com/in/samgozman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
          <a href="https://t.me/samgozman" target="_blank" rel="noopener noreferrer">
            <ion-icon name="paper-plane-outline"></ion-icon>
          </a>
        </div>
        <p class="my-2 text-2xl md:text-xl">Sam Gozman</p>
        <p class="mt-2 text-xl md:text-sm">Backend Engineer:<br />Golang, NodeJS, Rust.</p>
      </div>
    </aside>
    <div class="order-3 sm:order-2 flex">
      <fieldset class="form-control">
        <h6 class="footer-title text-center text-xl md:text-sm md:text-right px-2">
          Subscribe to my blog
        </h6>
        <SubscribeForm />
      </fieldset>
    </div>
    <nav class="order-1 sm:hidden text-xl mt-6 flex flex-col items-center">
      <h6 class="footer-title">Navigation</h6>
      <RouterLink class="link link-hover" :to="{ name: 'home' }">About</RouterLink>
      <RouterLink class="link link-hover" :to="{ name: 'blog' }">Blog</RouterLink>
      <RouterLink class="link link-hover" :to="{ name: 'projects' }">Projects</RouterLink>
    </nav>
  </footer>
</template>

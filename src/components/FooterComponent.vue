<script setup lang="ts">
import { RouterLink } from 'vue-router'
import SubscribeForm from './SubscribeForm.vue'
</script>

<template>
  <footer
    class="footer container mx-auto max-w-6xl p-4 flex flex-col md:flex-row justify-center md:justify-between items-center"
  >
    <aside class="order-2 md:order-1">
      <div class="text-center">
        <div class="grid grid-flow-col gap-4 text-2xl text-primary">
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
        <p class="my-2 text-xl">Sam Gozman</p>
        <p class="my-2">Backend Engineer:<br />Golang, NodeJS, Rust.</p>
      </div>
    </aside>
    <div class="order-3 md:order-2 flex justify-center md:justify-end">
      <SubscribeForm />
    </div>
    <nav class="order-1 md:hidden">
      <h6 class="footer-title">Blog navigation</h6>
      <RouterLink class="link link-hover" :to="{ name: 'home' }">About</RouterLink>
      <RouterLink class="link link-hover" :to="{ name: 'blog' }">Blog</RouterLink>
      <RouterLink class="link link-hover" :to="{ name: 'projects' }">Projects</RouterLink>
    </nav>
  </footer>
</template>

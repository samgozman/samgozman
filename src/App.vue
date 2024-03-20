<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { StorageKeeper } from '@/services/StorageKeeper'
import { BloggyApi } from '@/services/BloggyApi'

// Token TTL in milliseconds
const ttl = Number(import.meta.env.VITE_AUTH_TOKEN_TTL_SECONDS) * 1000

onMounted(async () => {
  // Refresh token while user is still active on the page
  setInterval(async () => {
    const token = StorageKeeper.get<string>('token')
    if (!token) {
      return
    }

    const refreshToken = await BloggyApi.refreshToken(token)
    if (!refreshToken.ok) {
      console.error('Token refresh failed:', refreshToken.message)
      StorageKeeper.remove('token')
      return
    }

    const expireTime = new Date().getTime() + ttl
    StorageKeeper.set<string>('token', refreshToken.token, expireTime)
  }, ttl)
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="bg-base-100 rounded-xl flex flex-col m-3 min-h-[calc(100vh-1.5rem)] lg:m-5 lg:min-h-[calc(100vh-2.5rem)]"
    >
      <header class="container mb-4 md:mb-0 lg:mb-6 xl:mb-12 mx-auto max-w-6xl">
        <NavbarComponent />
      </header>
      <main class="flex-1 px-2 md:px-4 container mx-auto max-w-6xl">
        <RouterView />
      </main>
      <FooterComponent />
    </div>
  </div>
</template>

<style>
/* Note: OKLCH Colors Workaround For Disqus Embed.js */
:root,
[data-theme] {
  background-color: #ffffff;
  color: #1f2937;
}
.bg-base-100 {
  background-color: #ffffff;
}
</style>

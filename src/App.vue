<script setup lang="ts">
import { RouterView } from 'vue-router'
import { onMounted } from 'vue'
import NavbarComponent from './components/NavbarComponent.vue'
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
      class="bg-white flex flex-col m-3 min-h-[calc(100vh-1.5rem)] md:m-5 md:min-h-[calc(100vh-2.5rem)]"
    >
      <header class="container mb-6 md:mb-12 mx-auto max-w-6xl">
        <NavbarComponent />
      </header>
      <main class="flex-1 px-2 container mx-auto max-w-6xl">
        <RouterView />
      </main>
      <footer class="container mx-auto max-w-6xl p-4">
        <div class="flex justify-center space-x-4 text-primary text-2xl">
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
        <p class="text-center mt-4 text-xl">Sam Gozman</p>
        <!-- mail -->
        <p class="text-center mt-1">
          <a href="mailto:sam@gozman.space" class="hover:underline">sam@gozman.space</a>
        </p>
      </footer>
    </div>
  </div>
</template>

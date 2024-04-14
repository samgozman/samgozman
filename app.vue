<script setup lang="ts">
import '~/assets/css/main.css'
import { onMounted } from 'vue'

// Token TTL in milliseconds
const ttl = Number(useRuntimeConfig().public.authTokenTTLseconds) * 1000

// TODO: proxy auth request to the server via Nuxt
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
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '~/assets/css/main.css'
import { onMounted } from 'vue'

const baseUrl = useRuntimeConfig().public.baseUrl

// Site-wide structured data. definePerson sets the site identity (this is a
// personal site), which nuxt-schema-org wires up as the WebSite publisher and
// as the default author for articles.
useSchemaOrg([
  definePerson({
    name: 'Sam Gozman',
    image: `${baseUrl}/img/me.jpg`,
    url: baseUrl,
    jobTitle: 'Team Lead & Senior Backend Engineer',
    sameAs: [
      'https://github.com/samgozman',
      'https://www.linkedin.com/in/samgozman/',
      'https://t.me/samgozman'
    ]
  }),
  defineWebSite({
    name: 'Sam Gozman',
    description:
      'Developer blog of Sam Gozman — Team Lead & Senior Backend Engineer (Go, Node.js, Rust) and open-source developer.'
  }),
  defineWebPage()
])

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

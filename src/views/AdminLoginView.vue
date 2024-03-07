<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { StorageKeeper } from '@/services/StorageKeeper'
import { BloggyApi } from '@/services/BloggyApi'
import HeaderMax from '@/components/elements/HeaderMax.vue'

// Token TTL in milliseconds
const ttl = Number(import.meta.env.VITE_AUTH_TOKEN_TTL_SECONDS) * 1000
const clientId = import.meta.env.VITE_GITHUB_CLIENT_ID
const errorCode = ref()
const errorMessage = ref()

onMounted(async () => {
  const urlParams = new URLSearchParams(window.location.search)
  const code = urlParams.get('code')

  if (!code) {
    return
  }

  try {
    const res = await BloggyApi.login(code)
    if (!res.ok) {
      errorCode.value = res.code
      errorMessage.value = res.message
      return
    }

    const expireTime = new Date().getTime() + ttl
    StorageKeeper.set<string>('token', res.token, expireTime)
  } catch (error) {
    errorCode.value = 'unexpected-error'
    errorMessage.value = error
  }
})
</script>

<template>
  <HeaderMax value="👾 Admin login." />

  <div class="w-full">
    <a class="btn" :href="`https://github.com/login/oauth/authorize?client_id=${clientId}`">
      <ion-icon name="logo-github" class="text-xl"></ion-icon>
      Authenticate with GitHub
    </a>
    <div v-if="errorCode && errorMessage" role="alert" class="alert alert-error mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>
        <strong>Message:</strong> {{ errorMessage }}. <strong>Code:</strong> {{ errorCode }}.
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const router = useRouter()

// Token TTL in milliseconds
const config = useRuntimeConfig()
const ttl = Number(config.public.authTokenTTLseconds) * 1000
const clientId = config.public.githubClientId
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

    router.push({ name: 'admin-dashboard' })
  } catch (error) {
    errorCode.value = 'unexpected-error'
    errorMessage.value = error
  }
})
</script>

<template>
  <ElementsHeaderMax value="👾 Admin login." />

  <div class="w-full">
    <a class="btn" :href="`https://github.com/login/oauth/authorize?client_id=${clientId}`">
      <Icon name="i-ion:logo-github" class="text-xl" />
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

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

useSeoMeta({
  title: 'Subscription status | Sam Gozman'
})

const hCaptchaKey = useRuntimeConfig().public.hcaptchaSiteKey

const captchaToken = ref('')
const captcha = ref<VueHcaptcha>()
const error = ref('')

const onCaptchaVerified = (t: string) => {
  captchaToken.value = t
}

const onCaptchaExpired = () => {
  captchaToken.value = ''
}

onMounted(async () => {
  if (!captcha.value) {
    return
  }

  // Get `token` from url query param
  const url = new URL(window.location.href)
  const confirmationToken = url.searchParams.get('token')
  if (!confirmationToken) {
    error.value = 'Invalid token'
    return
  }

  try {
    await captcha.value.executeAsync()

    const res = await BloggyApi.confirmSubscription(confirmationToken, captchaToken.value)
    if (!res.ok) {
      return
    }

    error.value = ''
  } catch (err) {
    error.value = 'Failed to confirm subscription'
    console.error(err)
  }
})
</script>

<template>
  <ElementsArticleProse>
    <h2>Subscription confirmation:</h2>
    <p v-if="error" class="text-error">{{ error }}</p>
    <p v-else>You have successfully subscribed to my blog! 🧡</p>
  </ElementsArticleProse>

  <vue-hcaptcha
    ref="captcha"
    :sitekey="hCaptchaKey"
    size="invisible"
    @verify="onCaptchaVerified"
    @expired="onCaptchaExpired"
  ></vue-hcaptcha>
</template>

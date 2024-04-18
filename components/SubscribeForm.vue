<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

const { data } = useAsyncData(async () => {
  const inputName = `email-${Math.random().toString(36).substring(2, 10)}`
  return inputName
})

const runtimeConfig = useRuntimeConfig()

const hCaptchaKey = runtimeConfig.public.hcaptchaSiteKey

const email = ref('')
const token = ref('')
const captcha = ref<VueHcaptcha>()
const formClicked = ref(false)

const router = useRouter()

const onCaptchaVerified = (t: string) => {
  token.value = t
}

const onCaptchaExpired = () => {
  token.value = ''
}

const onSubmit = async (event: Event) => {
  event.preventDefault()
  if (captcha.value === undefined) {
    return
  }

  if (!email.value) {
    return
  }

  await captcha.value.executeAsync()

  const res = await BloggyApi.subscribeToNewsletter(email.value, token.value)
  if (!res.ok) {
    console.error('Failed to subscribe:', res.message)
    return
  }

  email.value = ''
  router.push({ name: 'subscription-success' })
}

const onInputFocus = () => {
  formClicked.value = true
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="join">
      <input
        :name="data ?? 'email'"
        type="email"
        placeholder="Enter your email"
        class="input input-bordered join-item"
        v-model="email"
        @focus="onInputFocus"
      />
      <button class="btn btn-primary join-item text-base-100">Subscribe</button>
    </div>
    <vue-hcaptcha
      ref="captcha"
      v-if="formClicked"
      :sitekey="hCaptchaKey"
      size="invisible"
      @verify="onCaptchaVerified"
      @expired="onCaptchaExpired"
    ></vue-hcaptcha>
  </form>
</template>

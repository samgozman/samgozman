<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'
import { BloggyApi } from '@/services/BloggyApi'

const hCaptchaKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY

const email = ref('')
const token = ref('')
const captcha = ref<VueHcaptcha>()

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

  router.push({ name: 'subscription-success' })
}
</script>

<template>
  <form @submit="onSubmit">
    <h6 class="footer-title text-center md:text-right px-2">Subscribe to my blog</h6>
    <fieldset class="form-control w-80">
      <div class="join">
        <input
          type="email"
          placeholder="Enter your email"
          class="input input-bordered join-item"
          v-model="email"
        />
        <button class="btn btn-primary join-item text-base-100">Subscribe</button>
      </div>
    </fieldset>
    <vue-hcaptcha
      ref="captcha"
      :sitekey="hCaptchaKey"
      size="invisible"
      @verify="onCaptchaVerified"
      @expired="onCaptchaExpired"
    ></vue-hcaptcha>
  </form>
</template>
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
const submitting = ref(false)
const errorMessage = ref('')

const router = useRouter()

const onCaptchaVerified = (t: string) => {
  token.value = t
}

const onCaptchaExpired = () => {
  token.value = ''
}

const onSubmit = async (event: Event) => {
  event.preventDefault()
  if (captcha.value === undefined || submitting.value) {
    return
  }

  if (!email.value) {
    return
  }

  submitting.value = true
  errorMessage.value = ''
  try {
    await captcha.value.executeAsync()

    const res = await BloggyApi.subscribeToNewsletter(email.value, token.value)
    if (!res.ok) {
      console.error('Failed to subscribe:', res.message)
      errorMessage.value = "Couldn't subscribe. Please try again."
      return
    }

    email.value = ''
    router.push({ name: 'subscription-success' })
  } catch (err) {
    console.error('Failed to subscribe:', err)
    errorMessage.value = "Couldn't subscribe. Please try again."
  } finally {
    submitting.value = false
  }
}

const onInputFocus = () => {
  formClicked.value = true
}
</script>

<template>
  <form @submit="onSubmit">
    <div class="join max-w-full">
      <input
        :name="data ?? 'email'"
        type="email"
        required
        placeholder="Enter your email"
        class="input input-bordered join-item min-w-0"
        v-model="email"
        @focus="onInputFocus"
      />
      <button class="btn btn-primary join-item text-base-100" :disabled="submitting">
        <span v-if="submitting" class="loading loading-spinner loading-sm"></span>
        <span v-else>Subscribe</span>
      </button>
    </div>
    <p v-if="errorMessage" role="alert" class="text-error text-sm mt-2">{{ errorMessage }}</p>
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

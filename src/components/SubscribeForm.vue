<script setup lang="ts">
import { ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha'

const hCaptchaKey = import.meta.env.VITE_HCAPTCHA_SITE_KEY

const email = ref('')
const token = ref('')

const onCaptchaVerified = (t: string) => {
  token.value = t
}

const onCaptchaExpired = () => {
  token.value = ''
}

// TODO: invoke invisible captcha on form on submit:
// https://docs.hcaptcha.com/invisible/
</script>

<template>
  <form>
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
      class="flex justify-center mt-2"
      :sitekey="hCaptchaKey"
      size="invisible"
      @verify="onCaptchaVerified"
      @expired="onCaptchaExpired"
    ></vue-hcaptcha>
  </form>
</template>

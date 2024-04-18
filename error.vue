<script setup lang="ts">
import { nextTick } from 'vue'
import { type NuxtError, clearError } from 'nuxt/app'

const props = defineProps({
  error: Object as () => NuxtError
})

// TODO: send in sentry
if (props.error?.statusCode !== 404) {
  console.error('Error page:', props.error)
}

const handleError = async () => {
  // Note: if you will not wait for the nextTick(), the error will not be cleared.
  // So you might me redirected to the error page again.
  await clearError()
  await nextTick()
  window.location.href = '/'
}
</script>

<template>
  <NuxtLayout>
    <div class="h-[60vh] flex flex-col items-center justify-center">
      <h1 class="font-black font-poppins text-9xl text-primary">{{ error?.statusCode }}</h1>
      <p class="text-xl font-bold font-poppins">{{ error?.statusMessage }}</p>
      <button @click="handleError" class="btn mt-5">Back to home page</button>
    </div>
  </NuxtLayout>
</template>

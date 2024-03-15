<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import { BloggyApi } from '@/services/BloggyApi'

const error = ref('')
const unsubscribeToken = ref('')
const unsubscribeReason = ref('')
const router = useRouter()

onMounted(async () => {
  // Get `token` from url query param
  const url = new URL(window.location.href)
  const token = url.searchParams.get('token')
  if (!token) {
    error.value = 'Invalid token'
    return
  }

  unsubscribeToken.value = token
})

const onSubmit = async (event: Event) => {
  event.preventDefault()

  const res = await BloggyApi.unsubscribe(unsubscribeToken.value, unsubscribeReason.value)
  if (!res.ok) {
    return
  }

  error.value = ''

  router.push({ name: 'home' })
}
</script>

<template>
  <ArticleProse>
    <h2 class="text-center">Unsubscribe fom blog:</h2>

    <form @submit="onSubmit">
      <p v-if="error" class="text-center text-error">{{ error }}</p>
      <p v-else class="text-center">You have successfully unsubscribed from my blog! 😢</p>
      <textarea
        class="form-input"
        placeholder="Reason for unsubscribing"
        :value="unsubscribeReason"
      ></textarea>
      <button class="btn btn-primary">Unsubscribe</button>
    </form>
  </ArticleProse>
</template>

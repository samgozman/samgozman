<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import ArticleProse from '@/components/elements/ArticleProse.vue'
import { BloggyApi } from '@/services/BloggyApi'

window.document.title = 'Unsubscribe  | Sam Gozman'

const error = ref('Confirm unsubscribing')
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

  try {
    const res = await BloggyApi.unsubscribe(unsubscribeToken.value, unsubscribeReason.value)
    if (!res.ok) {
      return
    }

    error.value = ''

    setTimeout(() => {
      router.push({ name: 'home' })
    }, 5000)
  } catch (err) {
    error.value = 'Failed to unsubscribe'
    console.error(err)
  }
}
</script>

<template>
  <ArticleProse>
    <h2>Unsubscribe fom blog:</h2>

    <form @submit="onSubmit">
      <p v-if="error" class="text-error">{{ error }}</p>
      <p v-else>You have successfully unsubscribed from my blog! 😢</p>
      <div class="flex flex-col max-w-80">
        <textarea
          class="textarea textarea-bordered"
          placeholder="Reason for unsubscribing"
          :value="unsubscribeReason"
        ></textarea>
        <button class="btn btn-primary mt-2">Unsubscribe</button>
      </div>
    </form>
  </ArticleProse>
</template>

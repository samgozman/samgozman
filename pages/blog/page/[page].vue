<script setup lang="ts">
const route = useRoute()

const raw = String(route.params.page ?? '')
const pageNum = parseInt(raw, 10)

// Reject non-numeric / padded values so only clean /blog/page/N resolves.
if (String(pageNum) !== raw || pageNum < 1) {
  throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
}

// Page 1 has a canonical home at /blog; redirect to avoid a duplicate URL.
if (pageNum === 1) {
  await navigateTo('/blog', { redirectCode: 301, replace: true })
}
</script>

<template>
  <!-- :key forces a remount on page change so each page fetches its own slice -->
  <BlogListing :key="pageNum" :page="pageNum" />
</template>

/**
 * Warns at startup when NUXT_OG_IMAGE_SECRET is missing. Without it,
 * nuxt-og-image signs og:image URLs with a random per-build secret, and every
 * deploy breaks the og:image URLs that link preview crawlers have cached.
 */
export default defineNitroPlugin(() => {
  if (import.meta.dev) return
  if (!process.env.NUXT_OG_IMAGE_SECRET) {
    console.warn(
      '[og-image] NUXT_OG_IMAGE_SECRET is not set: og:image URLs are signed with a per-build secret ' +
        'and will be rejected after the next deploy. Generate one with `npx nuxt-og-image generate-secret`.'
    )
  }
})

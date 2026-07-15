<template>
  <footer
    class="footer container mx-auto max-w-6xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between gap-8"
  >
    <aside class="flex items-center gap-2.5">
      <span
        class="inline-flex h-8 w-8 items-center justify-center rounded-[22%] bg-gradient-to-br from-[#8B7CFF] to-[#6455E0]"
      >
        <img src="/img/recurred/glyph.svg" alt="" class="h-4 w-4" />
      </span>
      <div>
        <p class="font-poppins font-semibold">Recurred</p>
        <p class="text-sm">Subscription tracker for iPhone</p>
      </div>
    </aside>
    <div class="flex gap-12 sm:gap-16">
      <nav class="flex flex-col gap-2">
        <h6 class="footer-title">Recurred</h6>
        <NuxtLink class="link link-hover" to="/apps/recurred/support">Support</NuxtLink>
        <NuxtLink class="link link-hover" to="/apps/recurred/privacy">Privacy Policy</NuxtLink>
      </nav>
      <nav class="flex flex-col gap-2">
        <h6 class="footer-title">Elsewhere</h6>
        <NuxtLink class="link link-hover" to="/">Home</NuxtLink>
        <NuxtLink class="link link-hover" to="/blog">Blog</NuxtLink>
        <a
          class="link link-hover"
          href="https://github.com/samgozman"
          target="_blank"
          rel="noopener noreferrer"
          >GitHub</a
        >
        <a
          class="link link-hover"
          href="https://x.com/samgozman"
          target="_blank"
          rel="noopener noreferrer"
          >X (Twitter)</a
        >
      </nav>
    </div>
  </footer>
</template>

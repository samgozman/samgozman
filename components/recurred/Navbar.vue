<script setup lang="ts">
// Recurred-only navigation: links stay within the app's pages, the wider
// site is reachable from the footer instead (see the website brief).
const route = useRoute()
const sectionClass = (path: string) => (route.path === path ? 'nav-active' : undefined)
</script>

<template>
  <!-- Plain justify-between instead of daisyUI navbar halves: the fixed 50/50
       split wraps the three links to a second line on phones. -->
  <nav class="flex items-center justify-center sm:justify-between gap-2 px-2 py-3 sm:p-4 min-h-16">
    <!-- Brand is desktop-only: on phones the hero right below carries the app
         icon and name, and the links get the full row to themselves. -->
    <NuxtLink
      to="/apps/recurred"
      class="hidden sm:flex items-center gap-2.5 select-none shrink-0"
      title="Recurred home"
    >
      <span
        class="inline-flex h-9 w-9 items-center justify-center rounded-[22%] bg-gradient-to-br from-[#8B7CFF] to-[#6455E0]"
      >
        <img src="/img/recurred/glyph.svg" alt="" class="h-5 w-5" />
      </span>
      <span class="font-poppins font-semibold text-xl">Recurred</span>
    </NuxtLink>
    <ul class="menu menu-horizontal gap-1 font-poppins font-medium px-0">
      <li><NuxtLink to="/apps/recurred#features">Features</NuxtLink></li>
      <li>
        <NuxtLink to="/apps/recurred/support" :class="sectionClass('/apps/recurred/support')"
          >Support</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/apps/recurred/privacy" :class="sectionClass('/apps/recurred/privacy')"
          >Privacy</NuxtLink
        >
      </li>
    </ul>
  </nav>
</template>

<style scoped>
/* Tailwind v4: @reference so @apply can resolve daisyUI's text-primary. */
@reference '../../assets/css/tailwind.css';
.menu .nav-active {
  @apply text-primary font-semibold;
}
</style>

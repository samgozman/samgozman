<script setup lang="ts">
// Path-prefix matching so nested pages (/blog/my-post, /blog/page/2)
// still highlight their section, which router-link-exact-active would miss.
const route = useRoute()
const isActive = (prefix: string) =>
  prefix === '/' ? route.path === '/' : route.path.startsWith(prefix)
const sectionClass = (prefix: string) => (isActive(prefix) ? 'nav-active' : undefined)

const links = [
  { name: 'index', prefix: '/', label: 'About' },
  { name: 'blog', prefix: '/blog', label: 'Blog' },
  { name: 'projects', prefix: '/projects', label: 'Projects' },
]
</script>

<template>
  <!-- Mobile: two-tier header. Row 1 = signature + Subscribe, Row 2 = full-width
       nav tabs. No hamburger — three links fit comfortably on every phone. -->
  <div class="sm:hidden px-2 pt-2">
    <div class="flex items-center justify-between px-2 py-1">
      <span class="text-xl select-none">
        <ElementsHeaderSignature value="gozman." />
      </span>
      <NuxtLink class="btn btn-sm" :to="{ name: 'subscription' }">Subscribe</NuxtLink>
    </div>
    <nav class="mt-2 flex border-t border-base-200 font-poppins font-medium">
      <NuxtLink
        v-for="link in links"
        :key="link.name"
        :to="{ name: link.name }"
        class="mobile-nav-link flex-1 py-3 text-center"
        :class="{ 'mobile-nav-active': isActive(link.prefix) }"
      >
        {{ link.label }}
      </NuxtLink>
    </nav>
  </div>

  <!-- Desktop: unchanged daisyUI navbar. -->
  <div class="navbar hidden sm:flex sm:p-4">
    <div class="navbar-start">
      <span class="text-xl select-none">
        <ElementsHeaderSignature value="gozman." />
      </span>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal gap-1 font-poppins font-medium">
        <li v-for="link in links" :key="link.name">
          <NuxtLink :to="{ name: link.name }" :class="sectionClass(link.prefix)">{{
            link.label
          }}</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
      <NuxtLink class="btn" :to="{ name: 'subscription' }">Subscribe</NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* Tailwind v4: @reference so @apply can resolve daisyUI's text-primary. */
@reference '../assets/css/tailwind.css';
.menu .nav-active {
  @apply text-primary font-semibold;
}

/* Mobile nav tabs: quiet by default, brand-orange with a short underline when
   the section is active. */
.mobile-nav-link {
  @apply relative text-base-content/60 transition-colors;
}
.mobile-nav-link:hover {
  @apply text-base-content;
}
.mobile-nav-active {
  @apply text-primary font-semibold;
}
.mobile-nav-active::after {
  content: '';
  @apply absolute bottom-0 left-1/2 h-[3px] w-6 -translate-x-1/2 rounded-full bg-primary;
}
</style>

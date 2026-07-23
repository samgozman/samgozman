<script setup lang="ts">
import { ref } from 'vue'

const dropdownVisible = ref(true)

// Path-prefix matching so nested pages (/blog/my-post, /blog/page/2)
// still highlight their section, which router-link-exact-active would miss.
const route = useRoute()
const sectionClass = (prefix: string) => {
  const active = prefix === '/' ? route.path === '/' : route.path.startsWith(prefix)
  return active ? 'nav-active' : undefined
}
</script>

<template>
  <div class="navbar sm:p-4">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost sm:hidden px-3"
          @click="dropdownVisible = true"
        >
          <Icon name="i-ion:menu-outline" class="text-2xl mr-1" />
          <span class="text-xl select-none">
            <ElementsHeaderSignature value="gozman." />
          </span>
        </div>
        <ul
          tabindex="0"
          v-show="dropdownVisible"
          class="menu menu-md dropdown-content mt-2 z-[1] p-2 shadow-sm bg-base-100 rounded-box w-52 font-poppins font-medium"
        >
          <li>
            <NuxtLink
              :to="{ name: 'index' }"
              :class="sectionClass('/')"
              @click="dropdownVisible = false"
              >About</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'blog' }"
              :class="sectionClass('/blog')"
              @click="dropdownVisible = false"
              >Blog</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ name: 'projects' }"
              :class="sectionClass('/projects')"
              @click="dropdownVisible = false"
              >Projects</NuxtLink
            >
          </li>
        </ul>
      </div>
      <span class="text-xl select-none hidden sm:block">
        <ElementsHeaderSignature value="gozman." />
      </span>
    </div>
    <div class="navbar-center hidden sm:flex">
      <ul class="menu menu-horizontal gap-1 font-poppins font-medium">
        <li><NuxtLink :to="{ name: 'index' }" :class="sectionClass('/')">About</NuxtLink></li>
        <li><NuxtLink :to="{ name: 'blog' }" :class="sectionClass('/blog')">Blog</NuxtLink></li>
        <li>
          <NuxtLink :to="{ name: 'projects' }" :class="sectionClass('/projects')"
            >Projects</NuxtLink
          >
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
</style>

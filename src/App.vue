<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="bg-white flex flex-col m-3 min-h-[calc(100vh-1.5rem)] md:m-5 md:min-h-[calc(100vh-2.5rem)]"
    >
      <header class="mb-5 md:mb-10">
        <NavbarComponent />
      </header>
      <main class="flex-1 px-2 md:px-6 2xl:px-0 container mx-auto">
        <RouterView />
      </main>
      <footer class="">Footer</footer>
    </div>
  </div>
</template>

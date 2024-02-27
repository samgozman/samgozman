<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/NavbarComponent.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div
      class="bg-white flex flex-col m-3 min-h-[calc(100vh-1.5rem)] md:m-6 md:min-h-[calc(100vh-3rem)]"
    >
      <header class="">
        <NavbarComponent />
      </header>
      <main class="flex-1">
        <RouterView />
      </main>
      <footer class="">Footer</footer>
    </div>
  </div>
</template>

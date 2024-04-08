<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderSignature from './elements/HeaderSignature.vue'

const dropdownVisible = ref(true)
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
          <ion-icon name="menu-outline" class="text-2xl mr-1"></ion-icon>
          <span class="text-xl select-none">
            <HeaderSignature value="gozman." />
          </span>
        </div>
        <ul
          tabindex="0"
          v-show="dropdownVisible"
          class="menu menu-md dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-poppins font-medium"
        >
          <li>
            <RouterLink :to="{ name: 'home' }" @click="dropdownVisible = false">About</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'blog' }" @click="dropdownVisible = false">Blog</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'projects' }" @click="dropdownVisible = false"
              >Projects</RouterLink
            >
          </li>
        </ul>
      </div>
      <span class="text-xl select-none hidden sm:block">
        <HeaderSignature value="gozman." />
      </span>
    </div>
    <div class="navbar-center hidden sm:flex">
      <ul class="menu menu-horizontal gap-1 font-poppins font-medium">
        <li><RouterLink :to="{ name: 'home' }">About</RouterLink></li>
        <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li>
        <li><RouterLink :to="{ name: 'projects' }">Projects</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <RouterLink class="btn" :to="{ name: 'subscription' }">Subscribe</RouterLink>
    </div>
  </div>
</template>

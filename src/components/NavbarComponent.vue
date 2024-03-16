<script setup lang="ts">
import { RouterLink } from 'vue-router'
import HeaderSignature from './elements/HeaderSignature.vue'
import SubscribeForm from './SubscribeForm.vue'
</script>

<template>
  <div class="navbar bg-white">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden pl-0">
          <ion-icon name="menu-outline" class="text-2xl"></ion-icon>
        </div>
        <ul
          tabindex="0"
          class="menu menu-md dropdown-content mt-2 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-poppins font-medium"
        >
          <li><RouterLink :to="{ name: 'home' }">About</RouterLink></li>
          <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li>
          <li><RouterLink :to="{ name: 'projects' }">Projects</RouterLink></li>
          <li><RouterLink :to="{ name: 'admin-dashboard' }">Admin</RouterLink></li>
        </ul>
      </div>
      <span class="text-xl select-none">
        <HeaderSignature value="gozman." />
      </span>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal px-1 font-poppins font-medium">
        <li><RouterLink :to="{ name: 'home' }">About</RouterLink></li>
        <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li>
        <li><RouterLink :to="{ name: 'projects' }">Projects</RouterLink></li>
        <li><RouterLink :to="{ name: 'admin-dashboard' }">Admin</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button class="btn" onclick="subscribeNavTop.showModal()">Subscribe</button>
      <dialog id="subscribeNavTop" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Subscribe to my blog 🧡</h3>
          <SubscribeForm class="pt-8" />
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>

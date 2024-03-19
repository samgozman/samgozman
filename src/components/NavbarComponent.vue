<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import HeaderSignature from './elements/HeaderSignature.vue'
import SubscribeForm from './SubscribeForm.vue'

const dropdownVisible = ref(true)

const closeModal = () => {
  const dialog = document.getElementById('subscribeNavTop') as HTMLDialogElement
  if (dialog) {
    dialog.close()
  }
}
</script>

<template>
  <div class="navbar md:p-4">
    <div class="navbar-start">
      <div class="dropdown">
        <div
          tabindex="0"
          role="button"
          class="btn btn-ghost lg:hidden px-3"
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
      <span class="text-xl select-none hidden lg:block">
        <HeaderSignature value="gozman." />
      </span>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal gap-1 font-poppins font-medium">
        <li><RouterLink :to="{ name: 'home' }">About</RouterLink></li>
        <li><RouterLink :to="{ name: 'blog' }">Blog</RouterLink></li>
        <li><RouterLink :to="{ name: 'projects' }">Projects</RouterLink></li>
      </ul>
    </div>
    <div class="navbar-end">
      <button class="btn" onclick="subscribeNavTop.showModal()">Subscribe</button>
      <dialog id="subscribeNavTop" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">Subscribe to my blog 🧡</h3>
          <SubscribeForm class="pt-8" @closeModal="closeModal" />
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

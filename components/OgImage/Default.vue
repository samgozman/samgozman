<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
  }>(),
  {
    title: 'Profile'
  }
)
</script>

<template>
  <div
    class="h-full w-full flex-col items-start justify-start bg-white relative text-[#1F2937]"
    style="font-family: 'Poppins', sans-serif"
  >
    <h1 class="w-full text-7xl px-20 pt-20 font-black text-left">Sam Gozman</h1>
    <div class="w-full text-4xl px-20 mt-[-4rem] text-left">
      <p class="mb-0 gap-x-0">Backend Developer<span class="text-orange-500">.</span></p>
      <p class="mt-0 gap-x-0">
        Golang<span class="text-orange-500 mr-1">,</span> NodeJS<span class="text-orange-500 mr-1"
          >,</span
        >
        Rust<span class="text-orange-500">.</span>
      </p>
    </div>
    <div class="w-full text-5xl font-bold px-20 absolute bottom-36 left-0 flex justify-between">
      <span class="gap-x-0"
        >https<span class="text-orange-500">://</span>gozman<span class="text-orange-500">.</span
        >space</span
      >
      <span class="text-orange-500 gap-x-0">{{ title }}</span>
    </div>
    <div class="w-full h-8 bg-orange-500 absolute bottom-20 left-0"></div>
  </div>
</template>

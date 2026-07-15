<script setup lang="ts">
// Shared OG image for every /apps/recurred page: app-branded violet card,
// same bottom-row structure as the site's other OG templates.
</script>

<template>
  <div
    class="h-full w-full flex flex-col items-start justify-start relative text-white"
    style="
      font-family: 'Poppins', sans-serif;
      background: linear-gradient(135deg, #8b7cff 0%, #6455e0 65%);
    "
  >
    <div class="w-full flex items-center gap-x-10 px-20 pt-24">
      <svg width="130" height="128" viewBox="0 0 668 656">
        <g transform="matrix(1,0,0,1,-168,-185)">
          <path
            d="M604.5,185C731.44,185 834.5,288.06 834.5,415C834.5,518.109 766.504,605.463 672.944,634.627L836,841L666,841L518,646C444.557,639.497 402.172,668.761 378,719L332,841L184,841L256,652C306.259,563.345 378.325,514.255 474,508L604.5,508C655.276,508 696.5,466.776 696.5,416C696.5,365.224 656.776,324 606,324L427,324C427,324 496.776,412.899 497.989,413.99C497.991,413.991 367.499,414 342,414L168,185L604.5,185Z"
            fill="white"
          />
        </g>
      </svg>
      <div class="text-8xl font-black gap-x-0">Recurred</div>
    </div>
    <div class="w-full flex flex-col px-20 pt-16 text-5xl font-medium gap-x-0">
      <span class="gap-x-0">Every subscription in one place.</span>
    </div>
    <div class="w-full text-4xl font-bold px-20 absolute bottom-36 left-0 flex justify-between">
      <span class="gap-x-0">gozman.space/apps/recurred</span>
      <span class="gap-x-0">Free on the App Store</span>
    </div>
    <div class="w-full h-8 bg-white absolute bottom-20 left-0"></div>
  </div>
</template>

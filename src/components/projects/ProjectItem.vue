<script setup lang="ts">
interface ProjectItemProps {
  date: string
  title: string
  /** A side item will be displayed relative to the timeline. */
  side: 'left' | 'right'
  /** Will control behavior of vertical lines. */
  type: 'start' | 'middle' | 'end'
  sourceLink?: string
  backendSourceLink?: string
  frontendSourceLink?: string
  telegramLink?: string
  websiteLink?: string
}

defineProps<ProjectItemProps>()
</script>

<template>
  <li>
    <hr v-if="type === 'end' || type === 'middle'" />
    <div class="timeline-middle">
      <ion-icon name="heart-circle" class="text-xl text-primary"></ion-icon>
    </div>
    <div :class="side === 'left' ? 'timeline-start md:text-end' : 'timeline-end'" class="mb-10">
      <time class="font-mono italic">{{ date }}</time>
      <div class="text-lg font-black">{{ title }}</div>
      <p class="text-justify">
        <slot></slot>
      </p>
      <div class="flex-grow flex justify-center items-center">
        <ul class="not-prose menu menu-horizontal rounded-box">
          <li v-if="sourceLink">
            <a :href="sourceLink" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github" class="text-xl"></ion-icon>
              /source
            </a>
          </li>
          <li v-if="backendSourceLink">
            <a :href="backendSourceLink" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github" class="text-xl"></ion-icon>
              /backend
            </a>
          </li>
          <li v-if="frontendSourceLink">
            <a :href="frontendSourceLink" target="_blank" rel="noopener noreferrer">
              <ion-icon name="logo-github" class="text-xl"></ion-icon>
              /frontend
            </a>
          </li>
          <li v-if="telegramLink">
            <a :href="telegramLink" target="_blank" rel="noopener noreferrer">
              <ion-icon name="paper-plane-outline" class="text-xl"></ion-icon>
              telegram
            </a>
          </li>
          <li v-if="websiteLink">
            <a :href="websiteLink" target="_blank">
              <ion-icon name="link-outline" class="text-xl"></ion-icon>
              website
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr v-if="type === 'start' || type === 'middle'" />
  </li>
</template>

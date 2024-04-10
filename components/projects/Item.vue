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
      <Icon v-if="type === 'start'" name="i-ion:arrow-up-circle" class="text-xl text-primary" />
      <Icon v-else name="i-ion:heart-circle" class="text-xl text-primary" />
    </div>
    <div :class="side === 'left' ? 'timeline-start md:text-end' : 'timeline-end'" class="mb-10">
      <time class="font-mono italic">{{ date }}</time>
      <div class="text-lg font-black">{{ title }}</div>
      <p class="text-justify">
        <slot></slot>
      </p>
      <div
        :class="side === 'left' ? 'md:justify-end' : 'md:justify-start'"
        class="flex-grow flex justify-center items-center"
      >
        <ul class="not-prose px-0 py-1 menu menu-horizontal menu-sm">
          <li v-if="sourceLink">
            <a :href="sourceLink" target="_blank" rel="noopener noreferrer">
              <Icon name="i-ion:logo-github" class="text-xl" />
              /source
            </a>
          </li>
          <li v-if="backendSourceLink">
            <a :href="backendSourceLink" target="_blank" rel="noopener noreferrer">
              <Icon name="i-ion:logo-github" class="text-xl" />
              /backend
            </a>
          </li>
          <li v-if="frontendSourceLink">
            <a :href="frontendSourceLink" target="_blank" rel="noopener noreferrer">
              <Icon name="i-ion:logo-github" class="text-xl" />
              /frontend
            </a>
          </li>
          <li v-if="telegramLink">
            <a :href="telegramLink" target="_blank" rel="noopener noreferrer">
              <Icon name="i-tabler:brand-telegram" class="text-xl" />
              telegram
            </a>
          </li>
          <li v-if="websiteLink">
            <a :href="websiteLink" target="_blank">
              <Icon name="i-ion:link-outline" class="text-xl" />
              website
            </a>
          </li>
        </ul>
      </div>
    </div>
    <hr v-if="type === 'start' || type === 'middle'" />
  </li>
</template>

<template>
  <a :href="`#${id}`" class="anchor"></a>
</template>

<script setup lang="ts">
defineProps<{ id?: string }>()
</script>

<style>
.anchor::before {
  content: '#';
}

.anchor {
  text-decoration: none;
  font-size: 1rem;
  vertical-align: middle;
  margin-right: 0.25em;
  color: var(--tw-prose-body);
  opacity: 0.2;
  transition:
    opacity 0.3s ease,
    color 0.3s ease;
}

.anchor:hover {
  opacity: 1;
  color: oklch(var(--p));
}
</style>

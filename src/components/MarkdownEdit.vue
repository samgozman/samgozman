<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CherryEngine from 'cherry-markdown'
import 'cherry-markdown/dist/cherry-markdown.min.css'
import { StorageKeeper } from '@/services/StorageKeeper'

interface LocalPost {
  slug?: string
  title?: string
  description?: string
  keywords?: string
  text?: string
  isPublished?: boolean
}

// Get props from parent (for editing)
const props = ref<LocalPost>({})

// If props are not passed, try to load from local store
if (!props.value.text) {
  const lastPost = StorageKeeper.get<LocalPost>('last-post')
  if (lastPost) {
    props.value = lastPost
  }
}

onMounted(() => {
  new CherryEngine({
    id: 'markdown-container',
    value: props.value.text,
    toolbars: {
      toolbar: [
        'bold',
        'italic',
        'underline',
        'strikethrough',
        '|',
        'color',
        'header',
        '|',
        'ol',
        'ul',
        'checklist',
        '|',
        {
          insert: ['image', 'video', 'link', 'hr', 'br', 'code', 'table']
        },
        'togglePreview',
        'settings'
      ],
      toolbarRight: ['fullScreen', '|'],
      bubble: ['bold', 'italic', 'underline', 'strikethrough', 'sub', 'sup', 'quote', '|', 'color']
    },
    editor: {
      height: '700px',
      defaultModel: 'edit&preview',
      autoSave2Textarea: true
    },
    callback: {
      afterChange: (text: string) => {
        props.value.text = text
      }
    },
    locale: 'en_US'
  }) as any
})

watch(
  () => props.value,
  (newProps) => {
    // local store backup for a week
    StorageKeeper.set<LocalPost>('last-post', newProps, 1000 * 60 * 60 * 24 * 7)
  },
  {
    // To watch on nested properties
    deep: true
  }
)
</script>

<template>
  <div id="markdown-container"></div>

  <div class="mt-6 space-y-2">
    <label class="input input-bordered flex items-center gap-2">
      <strong>Title</strong>
      <input type="text" class="grow" placeholder="Some catchy title" v-model="props.title" />
    </label>

    <!-- TODO: Add format validation -->
    <label class="input input-bordered flex items-center gap-2">
      <strong>URL Slug</strong>
      <input type="text" class="grow" placeholder="some-catchy-name" v-model="props.slug" />
    </label>

    <!-- TODO: Add format validation -->
    <label class="input input-bordered flex items-center gap-2">
      <strong>Keywords (comma separated)</strong>
      <input type="text" class="grow" placeholder="typescript,vuejs" v-model="props.keywords" />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text font-bold">Compact description</span>
      </div>
      <textarea
        placeholder="A short description of the post."
        class="textarea textarea-bordered textarea-md w-full max-w-xl"
        v-model="props.description"
      ></textarea>
    </label>

    <div class="form-control max-w-xl">
      <label class="cursor-pointer label">
        <span class="label-text font-bold">Is published (visible for everyone)</span>
        <input type="checkbox" class="checkbox checkbox-warning" v-model="props.isPublished" />
      </label>
    </div>
  </div>
</template>

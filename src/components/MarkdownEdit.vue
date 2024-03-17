<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import CherryEngine from 'cherry-markdown'
import 'cherry-markdown/dist/cherry-markdown.min.css'
import { StorageKeeper } from '@/services/StorageKeeper'
import { BloggyApi } from '@/services/BloggyApi'

interface LocalPost {
  slug?: string
  title?: string
  description?: string
  keywords?: string
  text?: string
}

// Get props from parent (for editing)
const props = defineProps<LocalPost>()
const post = ref<LocalPost>({ ...props })
const isEditing = ref(false) // Editing mode (for already existing posts)

onMounted(() => {
  // console.log(props.value)
  // If props are not passed, try to load from local store
  if (!props.text || !props.title || !props.slug) {
    const lastPost = StorageKeeper.get<LocalPost>('last-post')
    if (lastPost) {
      post.value = lastPost
    }
  } else {
    post.value = props
    isEditing.value = true
  }

  new CherryEngine({
    id: 'markdown-container',
    value: post.value.text,
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
        post.value = { ...post.value, text: text }
      }
    },
    locale: 'en_US'
  } as any)
})

watch(
  () => post.value,
  (newProps) => {
    // If editing, don't save to local store
    if (isEditing.value) {
      return
    }

    // local store backup for a week
    StorageKeeper.set<LocalPost>('last-post', newProps, 1000 * 60 * 60 * 24 * 7)
  },
  {
    // To watch on nested properties
    deep: true
  }
)

const errorText = ref('')
const savePost = async () => {
  errorText.value = ''

  // validate that all required fields are filled
  if (!post.value.title || !post.value.slug || !post.value.description || !post.value.text) {
    errorText.value = 'Please fill all required fields.'
    return
  }

  // validate that slug is URL friendly
  if (!/^[a-z0-9-]+$/.test(post.value.slug)) {
    errorText.value = 'URL slug can only contain lowercase letters, numbers and hyphens.'
    return
  }

  // validate that keywords are comma separated
  if (post.value.keywords && !/^[a-z0-9,-]+$/.test(post.value.keywords)) {
    errorText.value = 'Keywords can only contain lowercase letters, numbers, hyphens and commas.'
    return
  }

  const token = StorageKeeper.get<string>('token')
  if (!token) {
    errorText.value = 'You need to be logged in to save a post.'
    return
  }

  const keywords = post.value.keywords?.split(',').map((k) => k.trim())

  if (isEditing.value) {
    const response = await BloggyApi.updatePostBySlug(token, post.value.slug, {
      title: post.value.title,
      description: post.value.description,
      keywords: keywords,
      content: post.value.text
    })

    if (!response.ok) {
      errorText.value = `Failed to update the post. ${response.message}. Code: ${response.code}`
      return
    }
  } else {
    const response = await BloggyApi.createPost(token, {
      title: post.value.title,
      slug: post.value.slug,
      description: post.value.description,
      keywords: keywords,
      content: post.value.text
    })

    if (!response.ok) {
      errorText.value = `Failed to save the post. ${response.message}. Code: ${response.code}`
      return
    }
  }

  // Clear local store backup after successful save
  StorageKeeper.remove('last-post')

  // TODO: Redirect to the Edit post page
}

const generateSlug = () => {
  if (post.value.title) {
    post.value.slug = post.value.title
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '')
  }
}
</script>

<template>
  <div id="markdown-container"></div>

  <div class="mt-6 space-y-2">
    <label class="input input-bordered flex items-center gap-2">
      <strong>Title *</strong>
      <input type="text" class="grow" placeholder="Some catchy title" v-model="post.title" />
    </label>

    <div class="join w-full" v-if="!isEditing">
      <label class="input input-bordered flex items-center gap-2 join-item w-full">
        <strong>URL Slug *</strong>
        <input type="text" class="grow" placeholder="some-catchy-name" v-model="post.slug" />
      </label>
      <button class="btn join-item" @click="generateSlug">Generate from title</button>
    </div>

    <label class="input input-bordered flex items-center gap-2">
      <strong>Keywords (comma separated)</strong>
      <input type="text" class="grow" placeholder="typescript,vuejs" v-model="post.keywords" />
    </label>

    <label class="form-control">
      <div class="label">
        <span class="label-text font-bold">Compact description *</span>
      </div>
      <textarea
        placeholder="A short description of the post."
        class="textarea textarea-bordered textarea-md w-full max-w-xl"
        v-model="post.description"
      ></textarea>
    </label>

    <button class="btn w-96 mt-6 text-xl btn-secondary" @click="savePost">
      {{ isEditing ? '👾 Update' : '🚀 Save' }}
    </button>

    <div v-if="errorText" role="alert" class="alert alert-error mt-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="stroke-current shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span>
        {{ errorText }}
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { BloggyApi, type PostListItem } from '~/composables/BloggyApi'

const props = defineProps<{ page: number }>()

const PER_PAGE = 20

const pageSuffix = computed(() => (props.page > 1 ? ` (Page ${props.page})` : ''))

useSeoMeta({
  ogType: 'website',
  title: () => `Blog${pageSuffix.value} | Sam Gozman`,
  ogTitle: () => `Blog${pageSuffix.value} | Sam Gozman`,
  twitterTitle: () => `Blog${pageSuffix.value} | Sam Gozman`,
  description:
    'Developer blog of Sam Gozman. Team Lead, Senior Backend Engineer & Open Source Developer.',
  ogDescription:
    'Developer blog of Sam Gozman. Team Lead, Senior Backend Engineer & Open Source Developer.',
  twitterDescription:
    'Developer blog of Sam Gozman. Team Lead, Senior Backend Engineer & Open Source Developer.',
  twitterImageAlt: 'Blog | Sam Gozman'
})

useSchemaOrg([
  defineWebPage({ '@type': ['CollectionPage'] }),
  defineBreadcrumb({
    itemListElement: [
      { name: 'Home', item: '/' },
      { name: 'Blog', item: '/blog' }
    ]
  })
])

defineOgImage('Default', { title: 'Blog' })

const fetchError = ref<Error | null>(null)

// Keyed per page. Parent routes remount this component on page change (:key),
// so each page fetches its own slice and caches under a distinct key.
const { data } = await useAsyncData(`blog-list-${props.page}`, async () => {
  fetchError.value = null
  const res = await BloggyApi.getPosts(props.page, PER_PAGE)
  if (!res.ok) {
    console.error('Failed to fetch posts:', res)
    fetchError.value = new Error('Failed to fetch posts')
    return { posts: [] as PostListItem[], total: 0 }
  }
  return { posts: res.posts, total: res.total }
})

const totalPages = computed(() => Math.max(1, Math.ceil((data.value?.total ?? 0) / PER_PAGE)))

// Page 1 lives at the clean /blog URL; deeper pages are their own paths.
const pageHref = (n: number) => (n <= 1 ? '/blog' : `/blog/page/${n}`)
</script>

<template>
  <ElementsHeaderMax value="Blog." />
  <div v-if="fetchError" class="alert alert-error">
    <p>{{ fetchError.message }}</p>
  </div>

  <div class="grid grid-cols-1 gap-y-2 my-4">
    <BlogListItem v-for="item in data?.posts" :key="item.slug" :post="item" />
  </div>

  <!-- Crawlable pagination echoing the row date-eyebrow motif. Edge-anchored
       Newer/Older with centered numbers; on mobile the edges become the
       primary buttons and numbers collapse to a "Page X of Y" caption. -->
  <nav
    v-if="totalPages > 1"
    class="mt-10 mb-16 border-t border-base-200 pt-6 flex items-center justify-between gap-3"
    aria-label="Blog pages"
  >
    <NuxtLink v-if="page > 1" :to="pageHref(page - 1)" rel="prev" class="page-edge">
      <span class="text-lg leading-none" aria-hidden="true">←</span> Newer
    </NuxtLink>
    <span v-else class="page-edge page-edge--off" aria-hidden="true">
      <span class="text-lg leading-none">←</span> Newer
    </span>

    <div class="hidden sm:flex items-center gap-1.5">
      <NuxtLink
        v-for="n in totalPages"
        :key="n"
        :to="pageHref(n)"
        class="page-num"
        :class="{ 'page-num--current': n === page }"
        :aria-current="n === page ? 'page' : undefined"
        >{{ n }}</NuxtLink
      >
    </div>
    <span class="sm:hidden font-poppins text-sm font-medium text-base-content/50">
      Page {{ page }} of {{ totalPages }}
    </span>

    <NuxtLink v-if="page < totalPages" :to="pageHref(page + 1)" rel="next" class="page-edge">
      Older <span class="text-lg leading-none" aria-hidden="true">→</span>
    </NuxtLink>
    <span v-else class="page-edge page-edge--off" aria-hidden="true">
      Older <span class="text-lg leading-none">→</span>
    </span>
  </nav>

  <ElementsArticleProse>
    <ProseH3 class="text-left">Welcome to Sam Gozman's Dev Blog!</ProseH3>
    <p>
      Hello fellow developers and enthusiasts! I'm thrilled to welcome you to my blog, a space where
      I share insights, experiences, and updates from the world of development. As a lead backend
      engineer with a strong passion for open-source initiatives, I've dedicated myself to crafting
      and refining my own
      <NuxtLink class="link link-hover" :to="{ name: 'projects' }">projects</NuxtLink>. This blog
      marks the second incarnation of my journey, where I continue to explore, create, and
      contribute within the vibrant open-source community.
    </p>
    <p>
      Whether you're a seasoned developer or just starting out on your coding journey, there's
      something here for everyone. <strong>Welcome aboard!</strong>
    </p>
  </ElementsArticleProse>
</template>

<style scoped>
/* Newer/Older: a bordered button on mobile, a bare uppercase eyebrow on desktop
   (mirroring the date-eyebrow above each post). */
.page-edge {
  @apply inline-flex items-center gap-2 min-h-[3rem] px-4 rounded-lg border border-base-200;
  @apply font-poppins text-sm font-semibold uppercase tracking-wider text-base-content;
  @apply transition-colors;
}
.page-edge:hover {
  @apply border-primary text-primary;
}
.page-edge--off,
.page-edge--off:hover {
  @apply border-base-200/50 text-base-content/25 cursor-default;
}

.page-num {
  @apply inline-flex h-11 min-w-[2.75rem] items-center justify-center px-2 rounded-lg;
  @apply border border-base-200 font-poppins font-bold text-base-content transition-colors;
}
.page-num:hover {
  @apply border-primary text-primary;
}
.page-num--current,
.page-num--current:hover {
  @apply border-primary bg-primary text-white;
}

@media (min-width: 640px) {
  /* On desktop the edges shed their button chrome and read as plain eyebrows. */
  .page-edge {
    @apply border-0 rounded-none px-1;
  }
}
</style>

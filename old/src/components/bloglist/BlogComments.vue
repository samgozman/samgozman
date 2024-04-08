<script setup lang="ts">
const props = defineProps<{
  pageUrl: string
  pageSlug: string
  pageTitle: string
}>()

const disqus_config = function (this: any) {
  this.page.url = props.pageUrl
  this.page.identifier = props.pageSlug
  this.page.title = props.pageTitle.slice(0, 200)
}

;(function () {
  // DON'T EDIT BELOW THIS LINE
  var d = document,
    s = d.createElement('script')
  s.src = 'https://gozman.disqus.com/embed.js'
  s.setAttribute('data-timestamp', String(+new Date()))
  ;(d.head || d.body).appendChild(s)
})()
</script>

<template>
  <div id="disqus_thread" class="my-8"></div>
</template>

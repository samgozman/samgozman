import { onMounted, onUnmounted, ref } from 'vue'

// Shared by the default and recurred layouts: the white card sheds its side
// margins while the page is scrolled, except at the very bottom.
export const useScrolledCard = () => {
  const isScrolled = ref(false)

  const handleScroll = () => {
    const bottomOfWindow =
      window.scrollY + window.innerHeight >= document.documentElement.scrollHeight
    isScrolled.value = window.scrollY > 0 && !bottomOfWindow
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return { isScrolled }
}

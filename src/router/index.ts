import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:id',
      name: 'blog-post',
      component: () => import('../views/BlogPostView.vue')
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('../views/AdminLoginView.vue')
    },
    // TODO: add route to redirect to from GitHub
    {
      path: '/admin/posts/new',
      name: 'admin-new-post',
      component: () => import('../views/AdminPostNewView.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to) => {
  // Check for requiresAuth guard
  if (!to.meta.requiresAuth) {
    return
  }

  // TODO: Add expiration for the stored token
  // const item = {
  //   value: value,
  //   expiry: new Date().getTime() + ttl
  // }
  const token = localStorage.getItem('bloggy-token')

  if (
    !token &&
    // Avoid an infinite redirect
    to.name !== 'admin-login'
  ) {
    // redirect the user to the login page
    return { name: 'admin-login', query: { redirect: to.fullPath } }
  }
})

export default router

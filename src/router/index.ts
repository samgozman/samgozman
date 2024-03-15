import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProjectsView from '@/views/ProjectsView.vue'
import BlogView from '@/views/BlogView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import SubscribeSuccessView from '@/views/subscriptions/SubscribeSuccessView.vue'
import SubscribeConfirmView from '@/views/subscriptions/SubscribeConfirmView.vue'
import { StorageKeeper } from '@/services/StorageKeeper'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView
    },
    {
      path: '/blog/:slug',
      name: 'blog-post',
      component: () => import('@/views/BlogPostView.vue')
    },
    {
      path: 'subscription/success',
      name: 'subscription-success',
      component: SubscribeSuccessView
    },
    {
      path: 'subscription/confirm',
      name: 'subscription-confirm',
      component: SubscribeConfirmView
    },
    {
      path: '/admin/login',
      name: 'admin-login',
      component: () => import('@/views/AdminLoginView.vue')
    },
    {
      path: '/admin/posts/new',
      name: 'admin-new-post',
      component: () => import('@/views/AdminPostNewView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin/posts/:slug',
      name: 'admin-edit-post',
      component: () => import('@/views/AdminPostEditView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'admin-dashboard',
      component: () => import('@/views/AdminDashboardView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: NotFoundView
    }
  ]
})

router.beforeEach(async (to) => {
  // Check for requiresAuth guard
  if (!to.meta.requiresAuth) {
    return
  }

  const token = StorageKeeper.get('token')

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

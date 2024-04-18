export default defineNuxtRouteMiddleware((to, from) => {
  // skip middleware on server
  if (import.meta.server) {
    return
  }

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

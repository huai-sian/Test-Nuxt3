import { useUserStore } from '~/stores/user.store'

export default defineNuxtRouteMiddleware((to) => {
  const userStore = useUserStore()
  if (!userStore.userInfo) {
    ElMessage.warning('尚未登入');
    return navigateTo({ path: 'login', query: { redirect: to.path } })
  }
})

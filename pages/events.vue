<template>
  <div>
    {{ userStore.userInfo }}
  </div>
</template>

<script setup>
  import { useUserStore } from '@/stores/user.store'

  const userStore = useUserStore()

  if(userStore.userInfo) {
    if (process.client) {
      setLocalStorage('userInfo', userStore.userInfo, '30min')
    }
  }

  definePageMeta({
    layout: "products",
    middleware: 'auth',
  })

  useHead({
    title: 'Nuxt | Merch',
    meta: [
      { name: 'description', content: 'Nuxt 3 Merch'}
    ]
  })
</script>
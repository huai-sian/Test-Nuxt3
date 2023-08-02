<template>
  <div>
    <header class="shadow-sm bg-white">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Seven Merch</NuxtLink>
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/events">Events</NuxtLink></li>
          <li><NuxtLink to="/products">Merch</NuxtLink></li>
        </ul>
      </nav>
    </header>
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/events">Events</NuxtLink></li>
        <li><NuxtLink to="/products">Merch</NuxtLink></li>

        <li v-for="locale in availableLocales" :key="locale.code">
          <NuxtLink  :to="switchLocalePath(locale.code)" 
            @click.prevent.stop="setLocale(locale.code);setLocaleCookie(locale.code)"
          >
            {{ locale.name }}
            </NuxtLink>
        </li>
       
      </ul>
    </footer>
  </div>
</template>

<script setup>
const { locale, locales, setLocale, setLocaleCookie } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})
</script>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
</style>
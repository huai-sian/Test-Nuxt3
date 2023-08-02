<template>
  <div class="flex flex-col items-center bg-white py-24">
    <h1 class="my-12 text-5xl font-semibold text-red-500">發生了錯誤！</h1>
    <div class="flex flex-col items-center justify-center">
      <p class="text-xl text-gray-500">{{ error.message }}</p>
      <button
        type="button"
        class="mt-8 block rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
        @click="handleError"
      >
        清除錯誤後回到首頁
      </button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  error: Object
})

const handleError = () => clearError({ redirect: '/' })
</script>
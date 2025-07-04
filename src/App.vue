<template>
  <main class="m-4 md:mx-16 my-2">
    <TheTopbar />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheTopbar from '@/components/TheTopbar.vue'

import { provideToast } from 'vue-toastification'
import 'vue-toastification/dist/index.css'

provideToast()
</script>

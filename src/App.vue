<template>
  <main class="container m-4">
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

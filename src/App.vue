<template>
  <main class="my-2 mx-8 w-auto" id="mainApp">
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

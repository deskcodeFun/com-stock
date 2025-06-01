<template>
  <main class="m-4 md:mx-16 my-2">
    <TheTopbar title="Computer Stock" />
    <RouterView />
  </main>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheTopbar from './components/TheTopbar.vue'
import CardComputer from './components/CardComputer.vue'
</script>

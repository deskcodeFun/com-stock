<template>
  <TheTopbar title="Computer Stock" />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheTopbar from './components/TheTopbar.vue'
</script>

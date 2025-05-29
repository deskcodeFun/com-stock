<template>
  <TheTopbar title="Computer Stock" />
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheTopbar from './components/TheTopbar.vue'
import CardComputer from './components/CardComputer.vue'
</script>

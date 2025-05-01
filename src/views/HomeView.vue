<template>
  <TheTopbar title="Com-Stock" />
  <p class="font-mono">หน้าหลัก ในการแสดงผล</p>
  <router-view />
</template>

<script setup>
import TheTopbar from '../components/TheTopbar.vue'
// import NavSidebar from '@/components/menu/NavSidebar.vue'
</script>

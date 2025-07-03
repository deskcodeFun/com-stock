<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-row rounded-2xl shadow-md md:p-6">
    <p class="font-bold text-blue-900 text-shadow-lg text-2xl">Computer Stock</p>
    <!-- Menu in topbar, create menu-item, Navbar-->
    <nav class="text-lg px-8 py-1 hover:pointer">
      <RouterLink to="/" class="px-4" active-class="bg-sky-200 px-4 py-2 rounded-xl"
        >Home</RouterLink
      >
      <RouterLink to="/services" class="px-4" active-class="bg-sky-200 px-4 py-2 rounded-xl">
        IT-Services
      </RouterLink>
      <RouterLink to="/about" class="px-4" active-class="bg-sky-200 px-4 py-2 rounded-xl">
        about
      </RouterLink>
    </nav>
  </div>
</template>

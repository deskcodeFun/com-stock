<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-auto flex flex-col md:flex-row p-2 md:p-4">
    <p class="font-bold text-sm text-center text-blue-900 text-shadow-lg md:text-2xl">
      Computer Stock
    </p>

    <!-- Menu in topbar, create menu-item, Navbar-->
    <nav class="px-2 text-center md:px-8 hover:pointer">
      <RouterLink
        to="/"
        class="px-4 text-sm md:text-lg"
        active-class="bg-sky-200 px-2 md:px-4 py-1 md:py-2 rounded-xl"
        >Home</RouterLink
      >
      <RouterLink
        to="/services"
        class="px-4 text-sm md:text-lg"
        active-class="bg-sky-200 px-4 py-2 rounded-xl"
      >
        IT-Services
      </RouterLink>
      <RouterLink
        to="/about"
        class="px-4 text-sm md:text-lg"
        active-class="bg-sky-200 px-4 py-2 rounded-xl"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

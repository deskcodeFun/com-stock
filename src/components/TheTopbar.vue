<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="w-auto flex flex-col md:flex-row p-2 md:p-4">
    <p class="font-bold text-sm text-center text-blue-900 text-shadow-lg md:text-2xl">
      Computer Stock
    </p>

    <!-- Menu in topbar, create menu-item, Navbar-->
    <nav class="px-2 text-center mr-4 md:px-8 hover:pointer">
      <RouterLink
        to="/"
        class="px-4 py-2 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
        active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2 hover:bg-sky-200 "
        >Home</RouterLink
      >
      <RouterLink
        to="/services"
        class="px-4 py-2 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
        active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2 hover:bg-sky-200 "
      >
        IT-Services
      </RouterLink>
      <RouterLink
        to="/about"
        class="px-4 py-2 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
        active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2hover:bg-sky-200"
      >
        About
      </RouterLink>
    </nav>
  </div>
</template>

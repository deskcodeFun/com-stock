<script setup>
import { defineProps } from 'vue'
import SearchIcon from '../assets/images/SearchIcon.vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="flex justify-between p-4 rounded-2xl shadow-md mx-4">
    <!-- <img src="@/assets/images/rice_icon.png" alt="logo" /> -->
    <p class="font-bold text-p-blue text-shadow-md text-shadow-gray-900 text-4xl">
      {{ title }}
    </p>
    <!-- TODO: Add Menu in topbar, create menu-item, Navbar-->
    <nav class="py-4">
      <RouterLink to="/" class="text-xl px-2"> home </RouterLink>
      <RouterLink to="/computer" class="text-xl px-2"> Computer </RouterLink>
      <RouterLink to="/user" class="text-xl px-2"> User </RouterLink>
      <RouterLink to="/about" class="text-xl px-2"> about </RouterLink>
    </nav>
    <!-- search box -->
    <div>
      <form method="GET">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <input
            type="search"
            name="q"
            class="border border-slate-400 py-2 mt-1 text-sm text-gray-600 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          />
          <span class="absolute mt-1 inset-y-1 flex items-center pl-1">
            <search-icon></search-icon>
            <button type="submit" class="focus:pointer focus:shadow-outline"></button>
          </span>
        </div>
      </form>
    </div>
  </div>
</template>

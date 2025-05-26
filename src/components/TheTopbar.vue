<script setup>
// import { defineProps } from 'vue'
import SearchIcon from '../assets/images/SearchIcon.vue'
import { RouterLink } from 'vue-router'

defineProps({
  title: String,
})
</script>

<template>
  <div class="flex flex-row justify-start rounded-2xl shadow-lg m-8 p-2">
    <!-- <img src="@/assets/images/rice_icon.png" alt="logo" /> -->
    <p class="font-bold text-p-blue text-shadow-md text-shadow-gray-300 text-2xl">
      {{ title }}
    </p>
    <!-- TODO: Add Menu in topbar, create menu-item, Navbar-->
    <nav class="text-lg px-8 py-1 hover:pointer">
      <RouterLink to="/" class="px-4" active-class="bg-gray-200 px-4 py-2 rounded-xl"
        >Home</RouterLink
      >
      <RouterLink to="/computer" class="px-4" active-class="bg-gray-200 px-4 py-2 rounded-xl">
        Computer
      </RouterLink>
      <RouterLink to="/user" class="px-4" active-class="bg-gray-200 px-4 py-2 rounded-xl">
        User
      </RouterLink>
      <RouterLink to="/about" class="px-4" active-class="bg-gray-200 px-4 py-2 rounded-xl">
        about
      </RouterLink>
    </nav>
    <!-- search box -->
    <div>
      <form method="GET">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <input
            type="search"
            name="q"
            class="border border-slate-200 py-2 text-xs text-gray-600 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
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

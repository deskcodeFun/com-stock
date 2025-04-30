<script setup>
import { defineProps } from 'vue'
import SearchIcon from '../assets/images/SearchIcon.vue'

const props = defineProps({
  title: String,
})
</script>

<template>
  <div class="flex py-4 px-2">
    <!-- <img src="@/assets/images/rice_icon.png" alt="logo" /> -->
    <p class="text-xl text-justify py-1 px-4">{{ title }}</p>
    <!-- TODO: Add Menu in topbar, create menu-item, Navbar-->
    <!-- search box -->
    <div class="mx-auto mr-0 py-1 px-4">
      <form method="GET">
        <div class="relative text-gray-600 focus-within:text-gray-400">
          <span class="absolute mt-1 inset-y-1 flex items-center pl-1">
            <search-icon></search-icon>
            <button
              type="submit"
              class="flex justify-items-end focus:outline-none focus:shadow-outline"
            ></button>
          </span>
          <input
            type="search"
            name="q"
            class="border border-pink10 py-1 mt-1 text-sm text-gray-600 rounded-xl pl-10 focus:outline-none focus:bg-white focus:text-gray-900"
            placeholder="Search..."
            autocomplete="off"
          />
        </div>
      </form>
    </div>
  </div>
  <slot></slot>
</template>

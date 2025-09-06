<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navOpen = ref(false)
</script>

<template>
  <div class="w-auto mt-4 mb-4">
    <div class="pr-2 flex flex-row">
      <button @click="navOpen = !navOpen">
        <Bars3Icon :class="navOpen ? 'hidden' : ''" class="h-6 w-6 text-gray-500" />
        <XMarkIcon :class="navOpen ? '' : 'hidden'" class="h-6 w-6 bg-green-50 text-red-500" />
      </button>
      <p class="ml-1 font-bold text-xl text-blue-900 text-shadow-lg">Computer Stock</p>
    </div>
  </div>
  <Transition name="slide-fade">
    <Teleport to="body">
      <div v-if="navOpen" class="modal  mt-12" @click.self="navOpen = false">
        <nav class="flex flex-col w-full py-4  sm:w-1/2 bg-green-50">
          <RouterLink
            to="/"
            class="px-8 text-lg rounded-xl m-1 p-1 hover:bg-gray-200 md:text-lg"
            active-class="bg-sky-200 px-2 rounded-lg text-xl hover:bg-sky-200 "
            @click="navOpen = !navOpen"
            >Home</RouterLink
          >
          <RouterLink
            to="/services"
            class="px-8 text-lg rounded-xl m-1 p-1 hover:bg-gray-200 md:text-lg"
            active-class="bg-sky-200 px-2 rounded-lg text-xl hover:bg-sky-200 "
            @click="navOpen = !navOpen"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-8 text-lg rounded-xl m-1 p-1 hover:bg-gray-200 md:text-lg"
            active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2hover:bg-sky-200"
            @click="navOpen = !navOpen"
          >
            About
          </RouterLink>
        </nav>
      </div>
    </Teleport>
  </Transition>
</template>

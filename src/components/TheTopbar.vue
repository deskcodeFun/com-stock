<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navOpen = ref(false)
</script>

<template>
  <div class="w-auto flex flex-row justify-between mt-4 mb-4 md:justify-start md:p-2">
    <p class="ml-1 font-bold text-sm md:text-xl mt-1 text-blue-900 text-shadow-lg">
      Computer Stock
    </p>
    <!--Desktop NavBar Menu in topbar, create menu-item, Navbar-->
    <div class="text-center mt-1 hidden sm:inline-block px-8 hover:pointer">
      <nav>
        <RouterLink
          to="/"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200"
          active-class="bg-sky-200 px-4 rounded-lg   py-1 md:py-2 hover:bg-sky-200 "
          >Home
        </RouterLink>
        <RouterLink
          to="/services"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200"
          active-class="bg-sky-200 px-4 rounded-lg   py-1 md:py-2 hover:bg-sky-200 "
        >
          IT-Services
        </RouterLink>
        <RouterLink
          to="/about"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200"
          active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2hover:bg-sky-200"
        >
          About
        </RouterLink>
      </nav>
    </div>
    <!-- Mobile NavBar -->
    <div class="mt-1 sm:hidden">
      <button @click="navOpen = !navOpen">
        <Bars3Icon :class="navOpen ? 'hidden' : ''" class="h-5 w-5 text-gray-500" />
        <XMarkIcon :class="navOpen ? '' : 'hidden'" class="h-5 w-5 text-gray-500" />
      </button>
    </div>
  </div>
  <!-- class="w-auto text-black mx-2 my-4 p-2 border-1 border-blue-950 rounded-lg hover:bg-sky-100" -->
  <Transition name="slide-fade">
    <Teleport to="body">
      <div v-if="navOpen" class="modal mt-8" @click.self="navOpen=false">
        <nav class="flex flex-col w-1/2 bg-green-50">
          <RouterLink
            to="/"
            class="px-4 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
            active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2 hover:bg-sky-200 "
            @click="navOpen = !navOpen"
            >Home</RouterLink
          >
          <RouterLink
            to="/services"
            class="px-4 py-2 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
            active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2 hover:bg-sky-200 "
            @click="navOpen = !navOpen"
          >
            Services
          </RouterLink>
          <RouterLink
            to="/about"
            class="px-4 py-2 text-sm mr-2 rounded-lg hover:bg-gray-200 md:text-lg"
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

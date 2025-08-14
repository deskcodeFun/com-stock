<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Bars4Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const navOpen = ref(false)
</script>

<template>
  <div class=" flex flex-row justify-between md:justify-start md:p-2">
    <p class="ml-1 font-bold text-sm md:text-xl mt-1  text-blue-900 text-shadow-lg">Computer Stock</p>
    <!--Desktop NavBar Menu in topbar, create menu-item, Navbar-->
    <div class=" text-center mt-1 hidden sm:inline-block px-8 hover:pointer">
      <nav >
        <RouterLink
          to="/"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200 "
          active-class="bg-sky-200 px-4 rounded-lg   py-1 md:py-2 hover:bg-sky-200 "
          >Home</RouterLink
        >
        <RouterLink
          to="/services"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200 "
          active-class="bg-sky-200 px-4 rounded-lg   py-1 md:py-2 hover:bg-sky-200 "
        >
          IT-Services
        </RouterLink>
        <RouterLink
          to="/about"
          class="px-4 py-2 text-lg mr-2 rounded-lg hover:bg-gray-200 "
          active-class="bg-sky-200 px-2 rounded-lg  md:px-4 py-1 md:py-2hover:bg-sky-200"
        >
          About
        </RouterLink>
      </nav>

    </div>
    <!-- Mobile NavBar -->
    <div class="mt-1 mr-1 sm:hidden">
      <button @click="navOpen = !navOpen">
        <Bars4Icon :class="navOpen ? 'hidden' : ''" class="h-5 w-5 text-gray-500" />
        <XMarkIcon :class="navOpen ? '' : 'hidden'" class="h-5 w-5 text-gray-500" />
      </button>
    </div>
  </div>
  <div v-if="navOpen" class="">
    <!-- <nav :class="navOpen ? '' : 'hidden'" class=" flex flex-col px-2 py-3 text-left mr-4 mb-2 md:px-8 hover:pointer"> -->
    <Transition name="slide-nav">
      <Teleport to="body">
        <div class="modalNav w-1/2 h-screen">
          <nav :class="navOpen ? '' : 'hidden'" class="flex flex-col">
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
  </div>
</template>
<style scoped>
.modalNav {
  position: fixed;
  z-index: 999;
  top: 45px;
  right: 0;
  margin-right: 1px;
  background-color: rgba(252, 251, 251, 0.964);
}
.slide-nav-enter-active {
  transition: all 0.8s ease-out;
}

.slide-nav-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-nav-enter-from,
.slide-nav-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

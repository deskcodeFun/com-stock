<template>
  <div class="flex flex-col sm:flex-row">
    <!-- submenu with icon -->
    <div class="flex flex-row gap-8 sm:py-1">
      <!-- add new user  -->
      <button
        class="flex flex-row py-1 hover:bg-gray-100"
        @click="router.push('/computer/computer-add')"
      >
        <UserPlusIcon class="h-5 w-5 mr-1 text-gray-500" />
        <p class="text-md">User</p>
      </button>
      <!-- add new computer specification only -->
      <!-- onClick router link to computer-add page -->
      <button
        class="flex flex-row py-1 hover:bg-gray-100"
        @click="router.push('/computer/computer-add')"
      >
        <PlusIcon class="h-5 w-5 mr-1 text-gray-500" />
        <p class="text-md">Computer</p>
      </button>
      <!-- add new service -->
      <button
        class="flex flex-row py-1 hover:bg-gray-100"
        @click="router.push('/computer/computer-add')"
      >
        <SquaresPlusIcon class="h-5 w-5 mr-1 text-gray-500" />
        <p class="text-md">Service</p>
      </button>
    </div>
  </div>
  <!-- dropdown option -->
  <div class="flex flex-row mt-4 gap-8">
    <p class="text-lg font-bold">Computer</p>
    <div class="flex flex-row">
      <!-- <p>Filter by :</p> -->
      <!-- <select class="px-8 py-1 w-fit border-1" @change="handleChange" v-model="officeFilter"> -->
      <select
        class="border-1 text-md px-2 border-black"
        @change="handleChange"
        v-model="officeFilter"
      >
        <!-- <option value="" disabled>Select BU</option> -->
        <option value="0">All</option>
        <option v-for="officeName in officeName.office" :key="officeName.id" :value="officeName.id">
          {{ officeName.short_name }}
        </option>
      </select>
    </div>
  </div>
  <!--  Show data computer by Filter dropdown -->
  <div v-if="computer.isLoading" class="text-green-600 text-2xl text-center">Loading...</div>
  <div v-else>
    <ul class="bg-sky-50/30 flex flex-row flex-wrap justify-center sm:justify-start">
      <li v-for="computer in computer.officeComputers" :key="computer.id">
        <ComputerCard :items="computer" />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useComputer } from '@/stores/computer'
import { useOfficeStore } from '@/stores/office'
import ComputerCard from './ComputerCard.vue'

import {
  SquaresPlusIcon,
  UserPlusIcon,
  PlusIcon,
} from '@heroicons/vue/24/outline'

const computer = useComputer()
const officeName = useOfficeStore()
const router = useRouter()
const route = useRoute()

const officeFilter = ref('')

watch(officeFilter, () => {
  if (officeFilter.value !== undefined) {
    // use function from computer store
    computer.getOfficeComputers(officeFilter.value)
  }
  router.push('/')
})

const handleChange = () => {
  router.push({ query: { officeFilter: officeFilter.value } })
}

onMounted(() => {
  officeFilter.value = route.query.officeFilter || ''
})
</script>

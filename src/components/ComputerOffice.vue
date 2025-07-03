<template>
  <!-- Sub Menu show data by office -->
  <!-- <div class="flex flex-row w-fit mt-4 mb-4">
    <p class="px-4 py-1 rounded-lg text-xl text-gray-400">Select by :</p>
    <BaseButtonFilter @click="store.getOfficeComputers(0)" label="All" />
    <BaseButtonFilter @click="store.getOfficeComputers(1)" label="NPA" />
    <BaseButtonFilter @click="store.getOfficeComputers(2)" label="NPC" />
    <BaseButtonFilter @click="store.getOfficeComputers(3)" label="NPM" />
    <BaseButtonFilter @click="store.getOfficeComputers(4)" label="NRA" />
    <BaseButtonFilter @click="store.getOfficeComputers(5)" label="NRT" />
  </div> -->
  <div class="flex flex-row mt-4">
    <p class="text-xl text-gray-500 pr-4">Filter by :</p>
    <select
      class="px-8 py-1 w-fit border-1 border-blue-300"
      @change="handleChange"
      v-model="officeFilter"
    >
      <option value="0">All</option>
      <option value="1">NPA</option>
      <option value="2">NPC</option>
      <option value="3">NPM</option>
      <option value="4">NRA</option>
      <option value="5">NRT</option>
    </select>
  </div>
  <!--  Show data -->
  <div v-if="store.isLoading" class="text-green-600 text-2xl text-center">Loading...</div>
  <div v-else class="w-fit my-4 flex flex-row flex-wrap justify-start">
    <ComputerCard
      v-for="computer in store.officeComputers"
      :key="computer.id"
      :computer="computer"
    />
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useComputerCountStore } from '@/stores/computerCount'
import ComputerCard from '@/components/ComputerCard.vue'
// import BaseButtonFilter from './BaseButtonFilter.vue'

const store = useComputerCountStore()
const router = useRouter()
const route = useRoute()

const officeFilter = ref('')

watch(officeFilter, () => {
  if (officeFilter.value !== undefined) {
    store.getOfficeComputers(officeFilter.value)
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

<template>
  <div class="flex flex-row my-4">
    <p class="text-sm md:text-lg text-gray-500 mx-8">Filter by :</p>
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
      <option value="6">OHO</option>
    </select>
  </div>
  <!--  Show data -->
  <div v-if="store.isLoading" class="text-green-600 text-2xl text-center">Loading...</div>
  <div v-else>
    <ul class="bg-sky-50/30 flex flex-row flex-wrap justify-center md:justify-start">
      <li v-for="computer in store.officeComputers" :key="computer.id">
        <ComputerCard :computer="computer" />
      </li>
    </ul>
    <!-- <ComputerCard
      v-for="computer in store.officeComputers"
      :key="computer.id"
      :computer="computer"
    /> -->
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useComputerCountStore } from '@/stores/computerCount'
import ComputerCard from '@/components/ComputerCard.vue'
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

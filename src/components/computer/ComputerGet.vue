<template>
  <div class="flex flex-row gap-4">
    <p class="text-sm text-gray-500">
      Filter by :
      <span>
        <select
          class="px-8 py-1 w-fit border-1 border-blue-300"
          @change="handleChange"
          v-model="officeFilter"
        >
          <option value="" disabled>Select BU</option>
          <option
            v-for="officeName in officeName.office"
            :key="officeName.id"
            :value="officeName.id"
          >
            {{ officeName.short_name }}
          </option>
          <option value="0">All</option>
        </select>
      </span>
    </p>
    <!-- toggle view from card to table -->
    <div class="inline-flex flex-row">
      <ListBulletIcon class="h-6 w-6 text-gray-500" />
    </div>
  </div>
  <!--  Show data computer -->
  <div v-if="computer.isLoading" class="text-green-600 text-2xl text-center">Loading...</div>
  <div v-else>
    <p class="mt-4">Computer</p>
    <ul class=" bg-sky-50/30 flex flex-row flex-wrap justify-center sm:justify-start">
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
import { ListBulletIcon } from '@heroicons/vue/24/outline'

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

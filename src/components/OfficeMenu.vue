<template>
  <!-- Sub Menu show data by BU -->
  <div class="flex flex-row w-fit mt-4 mb-4">
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('all')"
    >
      ALL
    </button>
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('Nexus Property Marketing')"
    >
      NPM
    </button>
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('Nexus Property Consultants')"
    >
      NPC
    </button>
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('Nexus Retail Advisory')"
    >
      NRT
    </button>
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('Nexus Real Estate Advisory')"
    >
      NRA
    </button>
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getOfficeComputers('Nexus Property Agency')"
    >
      NPA
    </button>
  </div>
  <!--  Show data -->
  <div v-if="state.isLoading" class="text-green-600 text-2xl text-center">Loading...</div>
  <div v-else class="w-fit my-4 flex flex-row flex-wrap justify-start">
    <ComputerCard v-for="computer in state.computers" :key="computer.id" :computer="computer" />
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import ComputerCard from './ComputerCard.vue'

const state = reactive({
  computers: [],
  isLoading: true,
})

async function getOfficeComputers(bu) {
  const officeName = bu
  if (bu !== 'all') {
    try {
      const { data, error } = await supabase
        .from('computer')
        .select('*,staff!inner(*)')
        .eq('staff.office', officeName)
      state.computers = data
    } catch (error) {
      console.log('Fect data error:', error)
    } finally {
      state.isLoading = false
    }
  } else {
    try {
      const { data, error } = await supabase.from('computer').select('*,staff(*)')
      state.computers = data
    } catch (error) {
      console.log('Fect data error:', error)
    } finally {
      state.isLoading = false
    }
  }
}

onMounted(() => {
  getOfficeComputers('all')
})
</script>

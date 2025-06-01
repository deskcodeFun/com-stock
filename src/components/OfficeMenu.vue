<template>
  <div class="flex flex-row w-fit mt-4 mb-4">
    <button
      class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200"
      @click="getComputers"
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
  <!--  deltail -->
  <CardComputer />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'
import CardComputer from './CardComputer.vue'

const computers = ref([])

async function getComputers() {
  const { data, error } = await supabase.from('computer').select('*,staff(*)')
  //console.log('data is:', data)
  // console.log('error is:', error)
  // console.log('all computer', data)
  computers.value = data
}
async function getOfficeComputers(bu) {
  const officeName = bu
  // const { data, error } = await supabase.from('computer').select('*', 'staff()')
  const { data, error } = await supabase
    .from('computer')
    .select('*,staff!inner(*)')
    .eq('staff.office', officeName)
  // console.log('NPM data:', data)
  computers.value = data
}
onMounted(getComputers(), getOfficeComputers())
</script>

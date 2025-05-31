<!-- show all computer  
     with user name, 
     if use change label staus to used by 'username.lname'
     else label is status and show 'Free'
     sql: supabase.from('computer').select(`*, staff(*)`)
-->
<template>
  <!-- Sub menu filter by office -->
  <div class="flex flex-row w-fit mx-16 mt-4 mb-4">
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
  <div class="w-auto lg:flex-row">
    <div class="mx-8 bg-sky-50 px-4 py-4 border-2 border-gray-200 rounded-2">
      <!-- Totol computer card -->
      <div class="flex flex-row text-2xl pb-4 px-4">
        <p>Total Computer :</p>
        <p class="pl-8">{{ totalComputer }}</p>
      </div>
      <div class="flex flex-row text-xl px-4">
        <p>on use :</p>
        <p class="pl-8">{{ onUseComputer }}</p>
      </div>
      <div class="flex flex-row text-xl px-4">
        <p>on stock :</p>
        <p class="pl-4">{{ totalComputer - onUseComputer }}</p>
      </div>
    </div>
  </div>

  <!--  deltail -->
  <div class="w-fit my-4 mx-2 flex flex-row flex-wrap justify-center">
    <div class="w-fit" v-for="computer in computers" key:computer.id>
      <div class="bg-white border-2 shadow-lg border-gray-200 rounded-2xl w-sm m-4 p-8">
        <img class="w-4xs mx-auto mb-4" src="\src\assets\images\hp1.png" alt="computer image" />

        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left text-xs">
                <p v-if="computer.staff">User</p>
                <p v-else>Status</p>
              </th>
              <td>
                <p v-if="computer.staff" class="text-green-900 font-bold px-4">
                  {{ computer.staff.fname + '.' + computer.staff.lname.substring(0, 1) }}
                </p>
                <p v-else class="text-red-900 font-bold px-4">Free</p>
              </td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Brand</th>
              <td class="text-blue-800 px-4">{{ computer.brand }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">CPU</th>
              <td class="text-blue-800 px-4">{{ computer.cpu.substring(0, 20) }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Ram</th>
              <td class="text-blue-800 px-4">{{ computer.ram.substring(0, 20) }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Assets Tag</th>
              <td class="text-blue-800 px-4">{{ computer.asset_tag }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Serial</th>
              <td class="text-blue-800 px-4">{{ computer.serial_tag }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const computers = ref([])
const totalComputer = ref()
const onUseComputer = ref()
// const officeName = ref()

async function countComputer() {
  const { data, error } = await supabase.from('computer').select('*', { count: 'exact' })
  totalComputer.value = data.length
  // console.log('countComputer data :', data)
  // console.log('totalcomputer.value :', totalComputer)
}
async function countUseComputer() {
  const { data, error } = await supabase
    .from('computer')
    .select('user_id', { count: 'exact' })
    .not('user_id', 'is', null)
  onUseComputer.value = data.length
  // console.log('onUseComputer data :', data)
  // console.log('onUseComputer.value :', onUseComputer)
}

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
onMounted(() => {
  countComputer(), countUseComputer(), getComputers()
})
</script>

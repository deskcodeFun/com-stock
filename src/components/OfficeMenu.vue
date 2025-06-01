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
  <div class="w-fit my-4 flex flex-row flex-wrap justify-start">
    <div class="w-fit" v-for="computer in computers" key:computer.id>
      <div class="bg-white border-2 shadow-lg border-gray-200 rounded-2xl w-sm m-4 p-4">
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
        <RouterLink
          :to="'/computer/' + computer.id"
          class="flex flex-row justify-end mt-2 text-green-700"
          >More Detail...</RouterLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const computers = ref()

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

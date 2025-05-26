<template>
  <!-- create BaseCard to view all computer -->
  <!-- <div class="bg-amber-200 grid grid-cols-4"> -->
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
// import CardComputer from '@/components/CardComputer.vue'
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const computers = ref([])

async function getAllComputers() {
  const { data, error } = await supabase.from('computer').select(`*,staff(fname,lname)`).order('id')

  console.log('data is:', data)
  console.log('error is:', error)
  computers.value = data
}

onMounted(() => {
  getAllComputers()
})
</script>

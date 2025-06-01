<template>
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

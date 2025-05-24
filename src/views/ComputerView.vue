<template>
  <div class="flex flex-row w-fit mx-16 mt-4">
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getComputers">ALL |</button>
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getUseComputer">
      On Use|
    </button>
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getFreeComputer">
      On Stock
    </button>
  </div>
  <div class="w-screen my-4 mx-24 flex flex-row flex-wrap justify-start">
    <div class="w-fit" v-for="computer in computers" key:computer.id>
      <div class="flex flex-row p-4 m-2 bg-white border-2 border-gray-200 rounded-2xl">
        <!-- show pictuer on left -->
        <img class="pr-8 w-fit" src="\src\assets\images\hp1.png" alt="computer image" />

        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Status</th>
              <td class="px-4 text-red-800">
                <p v-if="computer.status">{{ computer.staff[0].user_name }}</p>
                <p v-else class="text-green-800 font-bold">Free</p>
              </td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Brand</th>
              <td class="text-blue-800 px-4">{{ computer.brand }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">CPU</th>
              <td class="text-blue-800 px-4 w-sm text-warp">{{ computer.cpu }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Ram</th>
              <td class="text-blue-800 px-4">{{ computer.ram }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Assets Tag</th>
              <td class="text-blue-800 px-4">{{ computer.asset_tag }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Serial Tag</th>
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

async function getComputers() {
  // const { data, error } = await supabase.from('computer').select().is('status', 'false')

  const { data, error } = await supabase.from('computer').select(`*, staff(user_name)`).order('id')
  console.log(data)
  computers.value = data
}
async function getUseComputer() {
  const { data, error } = await supabase
    .from('computer')
    .select(`*, staff(user_name)`)
    .is('status', 'true')
    .order('id')
  console.log(data)
  computers.value = data
}
async function getFreeComputer() {
  const { data, error } = await supabase
    .from('computer')
    .select(`*, staff(user_name)`)
    .is('status', 'false')
    .order('id')
  console.log(data)
  computers.value = data
}

onMounted(() => {
  getComputers()
})
</script>

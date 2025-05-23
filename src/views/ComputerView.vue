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
      <div class="grid grid-cols-2 w-xl p-4 m-2 bg-white border-2 border-gray-200 rounded-2xl">
        <!-- show pictuer on left -->
        <img class="" src="\src\assets\images\hp1.png" alt="computer image" />

        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left">Brand</th>
              <td class="text-blue-800 px-4">{{ computer.brand }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">CPU</th>
              <td class="text-blue-800 px-4 w-md text-warp">{{ computer.cpu }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Ram</th>
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
            <tr>
              <th class="text-gray-400 text-left align-baseline">Status</th>
              <td class="text-blue-800 px-4">
                {{ computer.status ? 'on use' : 'Free' }}
              </td>
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
// const message = ref('')
// function filter(message) {
//   if (message.value === all) {
//     getComputers()
//     console.log('click on all', message)
//     return
//   } else if (message.value === use) {
//     getUseComputer()
//     console.log('click on Use', message)
//     return
//   } else {
//     getFreeComputer()
//     console.log('click on Stock', message)
//     return
//   }
// }

async function getComputers() {
  // const { data, error } = await supabase.from('computer').select().is('status', 'false')

  const { data, error } = await supabase.from('computer').select().order('id')
  console.log(data)
  computers.value = data
}
async function getUseComputer() {
  const { data, error } = await supabase.from('computer').select().is('status', 'true').order('id')

  //const { data, error } = await supabase.from('computer').select()
  console.log(data)
  computers.value = data
}
async function getFreeComputer() {
  const { data, error } = await supabase.from('computer').select().is('status', 'false').order('id')

  //const { data, error } = await supabase.from('computer').select()
  computers.value = data
}

onMounted(() => {
  getComputers()
})
</script>

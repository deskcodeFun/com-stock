<template>
  <div class="flex flex-row w-fit mx-16 mt-4">
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getAllComputers">
      ALL |
    </button>
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getUseComputer">
      On Use|
    </button>
    <button class="mx-2 text-xl cursor-pointer hover:underline" @click="getFreeComputer">
      On Stock
    </button>
  </div>
  <div class="w-fit my-4 mx-24 flex flex-row flex-wrap lg:justify-start md:justify-center">
    <div class="w-fit" v-for="computer in computers" key:computer.id>
      <div class="flex flex-row p-4 m-2 bg-white border-2 border-gray-200 rounded-2xl">
        <!-- show pictuer on left -->
        <img class="pr-8 w-fit" src="\src\assets\images\hp1.png" alt="computer image" />
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
              <th class="text-gray-400 text-left">Brand</th>
              <td class="text-blue-800 px-4">{{ computer.brand }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">CPU</th>
              <td class="text-blue-800 px-4 w-xs text-warp">{{ computer.cpu }}</td>
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
            <tr>
              <th></th>
              <!-- <td class="text-right" @click="showDetail(computer.id)">more detail</td> -->
              <td class="text-right">
                <RouterLink :to="'/computer/' + computer.id">more detail</RouterLink>
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
import { RouterLink } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'

const computers = ref([])

async function getAllComputers() {
  const { data, error } = await supabase.from('computer').select(`*,staff(fname,lname)`).order('id')

  // console.log('getAllComputer is:', data)
  // console.log('error is:', error)
  computers.value = data
}
async function getUseComputer() {
  const { data, error } = await supabase
    .from('computer')
    .select(`*,staff(fname,lname)`)
    .gt('user_id', '0')
    .order('id')
  // console.log('getUsecomputer', data)
  computers.value = data
}
async function getFreeComputer() {
  const { data, error } = await supabase.from('computer').select().is('user_id', null).order('id')
  // console.log('getFreeComputer', data)
  computers.value = data
}

onMounted(() => {
  getAllComputers()
})
</script>

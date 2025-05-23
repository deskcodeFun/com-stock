<template>
  <!-- create BaseCard to view all computer -->
  <!-- <div class="bg-amber-200 grid grid-cols-4"> -->
  <div class="w-screen my-4 mx-24 flex flex-row flex-wrap justify-start">
    <div class="w-fit" v-for="user in users" key:user.id>
      <div class="bg-white border-2 border-gray-200 rounded-2xl w-xl mx-4 my-4 py-4 px-4">
        <img class="mx-auto mb-4" src="\src\assets\images\hp1.png" alt="computer image" />
        <!-- <p>user name : {{ user.user_name }}</p>
        <p>Department: {{ user.department }}</p>
        <p>Brand: {{ user.computer.brand }}</p> -->

        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left">User Name</th>
              <td class="text-blue-800 px-4">{{ user.user_name }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Office</th>
              <td class="text-blue-800 px-4">{{ user.office }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Department</th>
              <td class="text-blue-800 px-4">{{ user.department }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Brand</th>
              <td class="text-blue-800 px-4">{{ user.computer.brand }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">CPU</th>
              <td class="text-blue-800 px-4">{{ user.computer.cpu }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Ram</th>
              <td class="text-blue-800 px-4">{{ user.computer.ram }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Assets Tag</th>
              <td class="text-blue-800 px-4">{{ user.computer.asset_tag }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Serial</th>
              <td class="text-blue-800 px-4">{{ user.computer.serial_tag }}</td>
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

const users = ref([])

async function getUsers() {
  // const { data, error } = await supabase
  //   .from('user')
  //   .select(`*, computer(id, brand, asset_tag)`)
  //   .is('computer_id', 'null')

  const { data, error } = await supabase
    .from('staff')
    .select(`*, computer(*)`)
    .not('computer_id', 'is', 'null')

  console.log('data is:', data)
  console.log('error is:', error)
  users.value = data
}

onMounted(() => {
  getUsers()
})
</script>

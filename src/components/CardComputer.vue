<template>
  <div class="w-fit h-fit m-4 p-2 bg-white border-2 border-gray-200 rounded-2">
    <!-- show computer image -->
    <div class="flex justify-center w-sm h-auto bg-red-600">
      <img src="\src\assets\images\hp1.png" alt="computer image" />
      <!-- <img src="" alt="computer image"  /> -->
    </div>
    <!-- show 2 colums of short detail  -->
    <div class="grid grid-cols-2 gap-2">
      <div><label>User Name</label>{{ user.user_name }}</div>
      <label>Office</label>{{ user.office }} <label>department</label>{{ user.department }}
      <label>Brand</label>{{ user.computer[0].brand }} <label>CPU</label>{{ user.computer[0].cpu }}
      <label>Ram</label>{{ user.computer[0].ram }} <label>Assets</label
      >{{ user.computer[0].asset_tag }} <label>Serial</label>{{ user.computer[0].serial_tag }}
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const users = ref([])

async function getComputers() {
  const { data, error } = await supabase.from('user').select(`*, computer(*)`)

  console.log('data is:', data)
  console.log('error is:', error)
  users.value = data
}

onMounted(() => {
  getComputers()
})
</script>

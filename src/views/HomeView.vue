<template>
  <!-- create BaseCard to view all computer with user-->
  <ul>
    <li v-for="user in users" key:user.id>
      <p>
        {{ user.user_name }} {{ user.department }} {{ user.office }}
        {{ user.computer[0].brand }}
        {{ user.computer[0].serial_tag }}
        {{ user.computer[0].asset_tag }}
        {{ user.computer[0].brand }}
      </p>
    </li>
  </ul>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const users = ref([])

async function getComputers() {
  const { data, error } = await supabase.from('user').select(
    `
    id,
    user_name,
    department,
    office,
    start_date,
    return_date,
    computer(*)
  `,
  )

  console.log('data is:', data)
  console.log('error is:', error)
  users.value = data
}

onMounted(() => {
  getComputers()
})
</script>

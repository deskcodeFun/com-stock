<template>
  <!-- Total card -->
  <div class="mt-4 w-1/2 bg-sky-50 py-4 border-2 border-gray-200 rounded-2xl">
    <!-- Totol computer card -->
    <div class="flex flex-row text-2xl pb-4 px-4">
      <p>Total Computer :</p>
      <p class="pl-8">{{ totalComputer }}</p>
    </div>
    <!-- On use -->
    <div class="flex flex-row text-xl px-4">
      <p>on use :</p>
      <p class="pl-8">{{ onUseComputer }}</p>
    </div>
    <!-- on stock -->
    <div class="flex flex-row text-xl px-4">
      <p>on stock :</p>
      <p class="pl-4">{{ totalComputer - onUseComputer }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabaseClient.js'

const totalComputer = ref()
const onUseComputer = ref()

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
onMounted(() => {
  countComputer(), countUseComputer()
})
</script>

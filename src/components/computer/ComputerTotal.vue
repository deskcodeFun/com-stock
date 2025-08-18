<template>
  <!-- Total card -->
  <div class="mb-8">
    <div class="w-fit flex flex-col text-sm sm:text-xl sm:flex-row">
      <div class="p-2 rounded-2xl mb-1 sm:mr-4 bg-sky-100/70">
        <p>Total Computer{{ ' : ' + computer.computerTotal }}</p>
      </div>
      <!-- On use -->
      <div class="p-2 rounded-2xl mb-1 sm:mr-4 bg-sky-100/70">
        <p>On Use{{ ' : ' + computer.onUseComputer }}</p>
      </div>
      <!-- on stock computer -->
      <div class="p-2 rounded-2xl mb-1 sm:mr-4 bg-sky-100/70">
        <p>On Stock {{ ' : ' + onStock }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useComputer } from '@/stores/computer'
import { computed } from 'vue'
const computer = useComputer()
const onStock = computed(() => {
  return computer.computerTotal - computer.onUseComputer
})
</script>

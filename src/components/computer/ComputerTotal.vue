<template>
  <!-- Total card -->
  <div class="flex flex-col md:flex-row w-fit">
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>Total Computer{{ ' : ' + computer.computerTotal }}</p>
    </div>
    <!-- On use -->
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>On Use{{ ' : ' + computer.onUseComputer }}</p>
    </div>
    <!-- on stock computer -->
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>On Stock {{ ' : ' + onStock }}</p>
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

<template>
  <!-- Total card -->
  <div class="flex flex-row w-fit">
    <div class="w-3xs flex flex-row text-xl p-4 m-4 rounded-2xl bg-sky-50">
      <p>Total Computer{{ ' : ' + store.totalComputer }}</p>
    </div>
    <!-- On use -->
    <div class="w-3xs flex flex-row text-xl p-4 m-4 rounded-2xl bg-sky-50">
      <p>On Use{{ ' : ' + store.onUseComputer }}</p>
    </div>
    <!-- on stock -->
    <div class="w-3xs flex flex-row text-xl p-4 m-4 rounded-2xl bg-sky-50">
      <p>On Stock {{ ' : ' + onStock }}</p>
    </div>
  </div>
</template>

<script setup>
import { useComputerCountStore } from '@/stores/computerCount.js'
import { computed } from 'vue'
const store = useComputerCountStore()
const onStock = computed(() => {
  return store.totalComputer - store.onUseComputer
})
</script>

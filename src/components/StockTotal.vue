<template>
  <!-- Total card -->
  <div class="flex flex-col md:flex-row w-fit">
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>Total Computer{{ ' : ' + stock.totalComputer }}</p>
    </div>
    <!-- On use -->
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>On Use{{ ' : ' + stock.onUseComputer }}</p>
    </div>
    <!-- on stock -->
    <div
      class="w-3xs flex flex-col text-md md:text-xl p-2 m-1 md:p-4 md:m-4 rounded-2xl bg-sky-50/30"
    >
      <p>On Stock {{ ' : ' + onStock }}</p>
    </div>
  </div>
</template>

<script setup>
import { useStock } from '@/stores/stock'
import { computed } from 'vue'
const stock = useStock()
const onStock = computed(() => {
  return stock.totalComputer - stock.onUseComputer
})
</script>

<template>
  <div>
 <!-- toggle view from card to table -->
    <div class="inline-flex flex-row">
      <ListBulletIcon class="h-6 w-6 text-gray-500" @click="isSwitch = !isSwitch" />
      <!-- <component :is="ComponentToRender" /> -->
    </div>
    {{ isSwitch }}
  </div>
  <component :is="ConponentToRender" />
</template>

<script setup>
import { ref,computed } from 'vue';

// import ComputerCardView from '@/views/ComputerCardView.vue';
// import ComputerTableView from '@/views/ComputerTableView.vue';
import ComputerGet from './ComputerGet.vue';
import ComputerTable from './ComputerTable.vue';
import { ListBulletIcon } from '@heroicons/vue/24/outline'
const isSwitch = ref(false)

const ConponentToRender = computed(()=> isSwitch.value ? ComputerGet : ComputerTable)

</script>


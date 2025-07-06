<template>
  <button
    class="px-2 mx-1 py-1 bg-gray-100 border-1 rounded-lg hover:bg-sky-200 focus:bg-sky-800 focus:text-white"
    v-for="tab in tabs"
    :key="tab"
    @click="currentTab = tab.comp"
  >
    {{ tab.label }}
  </button>
  <ItTodo />
  <div v-if="currentTab !== ''">
    <component :is="currentTab"></component>
  </div>
  <div v-else></div>
</template>

<script setup>
import { shallowRef } from 'vue'

import ChangeComputerForm from '@/components/TodoList/ChangeComputerForm.vue'
import FixForm from '@/components/TodoList/FixForm.vue'
import FormatComputerForm from '@/components/TodoList/FormatComputerForm.vue'
import UpgradeComputerForm from '@/components/TodoList/UpgradeComputerForm.vue'
import OtherForm from '@/components/TodoList/OtherForm.vue'
import ItTodo from '@/components/TodoList/ItTodo.vue'

const currentTab = shallowRef('')
const tabs = [
  {
    label: 'Change Computer',
    comp: ChangeComputerForm,
  },
  {
    label: 'Fix Error',
    comp: FixForm,
  },
  {
    label: 'Format computer',
    comp: FormatComputerForm,
  },
  {
    label: 'Upgrade Computer',
    comp: UpgradeComputerForm,
  },
  {
    label: 'Other',
    comp: OtherForm,
  },
]
</script>

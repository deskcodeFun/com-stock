<template>
  <!-- check login with auth user before add,update,delete computer -->
  <!-- DON'T forget to update computer-update table -->
  <!-- Form: Add new computer we don't need validation data cause it's all text -->

  <!-- sub menu  -->
  <div class="flex flex-col md:flex-row">
    <RouterLink to="/add" class="bg-gray-200 px-4 py-1 rounded-md hover:bg-sky-200">
      Add Computer
    </RouterLink>
  </div>
  <ItTodo />

  <!-- Form: Add new user -->
  <!-- Form: update computer -->
</template>

<script setup>
import ComputerAddNew from '@/components/ComputerAddNew.vue'

import BaseButton from '@/components/BaseButton.vue'
import ItTodo from '@/components/ItTodo.vue'
</script>
<!-- lastComputer.value =data -->
<!-- router.push(`/computer/${data.id}`) -->

<template>
  <!-- check login with auth user before add,update,delete computer -->
  <!-- DON'T forget to update computer-update table -->
  <!-- Form: Add new computer we don't need validation data cause it's all text -->
  <AddNewComputer />
  <!-- Form: Add new user -->
  <!-- Form: update computer -->
</template>

<script setup>
import AddNewComputer from '@/components/AddNewComputer.vue'
</script>
<!-- lastComputer.value =data -->
<!-- router.push(`/computer/${data.id}`) -->

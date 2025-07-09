<template>
  <!-- Show todo list -->
  <ServiceList />
  <!-- Show Add new IT service Job -->
  <button
    @click="toggleComponent"
    class="w-full bg-gray-50 mt-2 p-2 font-bold text-xl hover:bg-sky-200"
  >
    +
  </button>
  <section v-show="showForm">
    <ServiceForm />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceList from '@/components/Services/ServiceList.vue'
import ServiceForm from '@/components/Services/ServiceForm.vue'

let showForm = ref(false)
const toggleComponent = () => {
  return (showForm.value = !showForm.value)
}
</script>

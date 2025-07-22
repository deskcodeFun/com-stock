<template>
  <button class="px-4 py-2 rounded-lg text-md cursor-pointer hover:bg-gray-200 focus:bg-sky-200">
    {{ label }}
  </button>
</template>

<script setup>
defineProps({
  label: String,
})
</script>

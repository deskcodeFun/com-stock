<script setup>
import { useRouter } from 'vue-router'
import { ChevronDoubleLeftIcon } from '@heroicons/vue/24/outline'

const router = useRouter()
</script>

<template>
  <!-- Go Back -->
  <div
    class="w-7 h-7 mb-4 flex flex-row justify-center text-blue-900 align-middle border-2  rounded-full  hover:cursor-pointer hover:bg-gray-200"
    @click="router.back()">
    <ChevronDoubleLeftIcon class="h-4 w-4 mt-1" />
    <!-- <p>Back</p> -->
  </div>
</template>

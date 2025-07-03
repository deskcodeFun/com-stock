<script setup>
import { useRouter } from 'vue-router'
// import { RouterLink } from 'vue-router'

const router = useRouter()
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="m-auto py-6 px-6">
      <button
        @click="router.back()"
        class="px-4 py-1 rounded-xl text-blue-800 bg-gray-200 hover:bg-blue-200"
      >
        <!-- <i class="pi pi-arrow-circle-left mx-2"></i>  -->
        Back
      </button>
      <!-- <RouterLink to="/" class="px-4 py-1 rounded-xl text-blue-800 bg-gray-200 hover:bg-blue-200">
        <i class="pi pi-arrow-circle-left mx-2"></i>  
        Back
      </RouterLink> -->
    </div>
  </section>
</template>

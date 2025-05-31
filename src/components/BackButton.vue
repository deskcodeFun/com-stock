<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="m-auto py-6 px-6">
      <RouterLink to="/computer" class="text-green-500 hover:text-green-600 flex items-center">
        <!-- <i class="pi pi-arrow-circle-left mx-2"></i>  -->
        Back to Computer Listings
      </RouterLink>
    </div>
  </section>
</template>

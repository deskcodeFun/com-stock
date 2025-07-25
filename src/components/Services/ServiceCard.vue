<template>
  <!-- each Service card in each Zone -->

  <div
    @click="open = true"
    class="w-auto text-black mx-2 my-4 p-2 border-1 border-blue-950 rounded-lg hover:bg-sky-100"
  >
    <!-- <Teleport to="body">
      <div v-if="open" class="modal">
        <ServiceModal :itemDetail="item" @toggle-open="open = false" />
      </div>
    </Teleport> -->
    <div class="flex flex-col md:flex-row justify-between">
      <p class="text-gray-500 text-sm">
        Computer :
        <span class="px-2 text-black text-md">
          {{ props.item.asset_tag }}
        </span>
      </p>
      <p class="text-gray-500 text-sm">
        Create date:
        <span class="px-2 text-black text-md">
          {{ props.item.create_at }}
        </span>
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-between">
      <!-- <p class="text-gray-500 text-sm">
        Create date:
        <span class="px-2 text-black text-md">
          {{ props.item.create_at }}
        </span>
      </p> -->
      <p class="text-gray-500 text-sm">
        Appointment:
        <span class="px-2 text-black text-md">
          {{ props.item.appointment }}
        </span>
      </p>
    </div>
    <p class="text-gray-500 text-sm">
      Detail :
      <span class="px-2 text-black text-md text-wrap">
        {{ props.item.detail }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServiceModal from './ServiceModal.vue'

const open = ref(false)
const props = defineProps({
  item: Object,
})
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(219, 45, 45, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
</style>

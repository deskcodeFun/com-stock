<template>
  <div class="modal-content">
    {{ props.itemDetail.id }}
    {{ props.itemDetail.detail }}
    <div class="flex flex-row justify-end">
      <button
        @click="$emit('toggle-open')"
        class="px-4 py-1 mt-4 bg-green-600 text-white rounded-xl"
      >
        Close
      </button>
      <!-- <button class="px-4 py-1 mt-4 bg-green-600 text-white rounded-xl">Cancel</button> -->
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
// const emit = defineEmits('open')
const props = defineProps({ itemDetail: Object })
console.log('item is', props.itemDetail)
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

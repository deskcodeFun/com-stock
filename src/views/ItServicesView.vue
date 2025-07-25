<template>
  <button
    @click="toggleComponent"
    class="mx-4 px-4 py-2bg-gray-50 mt-2 font-bold text-xl hover:bg-sky-200"
  >
    Add New Service
  </button>
  <Transition name="slide-fade">
    <Teleport to="body">
      <div v-if="showForm" class="modal">
        <ServiceForm @toggle-showForm="showForm = false" class="overflow-scroll" />
      </div>
    </Teleport>
  </Transition>

  <!-- show Service table -->
  <div class="relative mx-1 md:mx-8 px-1 md:px-8 mt-4 flex flex-col md:flex-row justify-center">
    <!-- Drop zone 1 -->
    <div class="w-full md:w-1/3 bg-white rounded-2xl md:py-2 md:mb-2">
      <p
        class="mb-2 mx-4 pb-2 border-2 border-blue-600 rounded-2xl text-center text-xl text-blue-800"
      >
        Back Log
      </p>
      <div
        @drop="onDrop($event, 1)"
        @dragenter.prvent
        @dragover.prevent
        class="overflow-y-scroll hide-scroll w-full h-80 md:h-140 md:w-auto mx-1 md:mx-4 bg-sky-50/30 border border-blue-600 rounded-xl min-h-50px"
      >
        <div
          v-for="item in getList(1)"
          :key="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          <ServiceCard :item="item" class="bg-sky-50" />
        </div>
      </div>
    </div>
    <!-- Drop zone 2 -->
    <div class="w-full md:w-1/3 bg-white rounded-2xl py-2 mb-2">
      <p
        class="mb-2 mx-4 pb-2 border-2 border-red-600 rounded-2xl text-center text-xl text-blue-800"
      >
        On Process
      </p>
      <div
        @drop="onDrop($event, 2)"
        @dragenter.prvent
        @dragover.prevent
        class="overflow-y-scroll hide-scroll h-80 w-full md:w-auto md:h-140 mx-1 md:mx-4 bg-sky-50/30 border border-blue-600 rounded-xl min-h-50px"
      >
        <div
          v-for="item in getList(2)"
          :key="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          <ServiceCard :item="item" class="bg-red-50" />
          <!-- {{ item.id + ' ' + item.detail + ' ' + item.state }} -->
        </div>
      </div>
    </div>
    <!-- Drop zone 3 -->
    <div class="w-full md:w-1/3 bg-white rounded-2xl py-2 mb-2">
      <p
        class="mb-2 mx-4 pb-2 border-2 border-green-600 rounded-2xl text-center text-xl text-blue-800"
      >
        Done
      </p>
      <div
        @drop="onDrop($event, 3)"
        @dragenter.prvent
        @dragover.prevent
        class="overflow-y-scroll hide-scroll h-80 w-full md:w-auto md:h-140 mx-1 md:mx-4 bg-sky-50/30 border border-blue-600 rounded-xl min-h-50px"
      >
        <div
          v-for="item in getList(3)"
          :key="item.id"
          draggable="true"
          @dragstart="startDrag($event, item)"
        >
          <ServiceCard :item="item" class="bg-green-50" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useComputerLogStore } from '@/stores/computerLog.js'

import ServiceForm from '@/components/Services/ServiceForm.vue'
import ServiceCard from '@/components/Services/ServiceCard.vue'

const store = useComputerLogStore()

const getList = (list) => {
  if (store.computerLog) {
    // Check if store.computerLog is defined
    return store.computerLog.filter((item) => item.state == list)
  }
  return [] // Return an empty array if undefined
}

const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemID', item.id)
  console.log('startDrag', item)
}
const onDrop = (event, list) => {
  const itemID = event.dataTransfer.getData('itemID')
  const item = store.computerLog.find((item) => item.id == itemID)

  store.updateComputerLog(list, itemID)
  // console.log('update state onDrop', store.computerLog)
  item.state = list
  // item.state = store.updateComputerLog(list, itemID)
}

let showForm = ref(false)
const toggleComponent = () => {
  return (showForm.value = !showForm.value)
}
</script>

<style scoped>
.hide-scroll::-webkit-scrollbar {
  display: none;
}
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(229, 229, 229, 0.61);
  display: flex;
  justify-content: right;
  align-items: top;
  transition: 10s ease-in-out;
}
.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>

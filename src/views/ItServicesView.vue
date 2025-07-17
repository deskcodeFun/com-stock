<template>
  <main class="text-white mt-4 flex flex-row mx-8">
    <!-- Drop zone -->
    <div
      @drop="onDrop($event, 1)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">Back Log</p>
      <div
        v-for="item in getList(1)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
        class="w-auto text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-sky-50"
      >
        {{ item.id + ' ' + item.detail + ' ' + item.state }}
      </div>
    </div>

    <div
      @drop="onDrop($event, 2)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">On Process</p>
      <div
        v-for="item in getList(2)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
        class="w-auto text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-red-50"
      >
        {{ item.id + ' ' + item.detail + ' ' + item.state }}
      </div>
    </div>
    <div
      @drop="onDrop($event, 3)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">Done</p>
      <div
        v-for="item in getList(3)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
        class="w-auto text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-green-50"
      >
        {{ item.id + ' ' + item.detail + ' ' + item.state }}
      </div>
    </div>
  </main>

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
import { ref, watch } from 'vue'
import { useComputerLogStore } from '@/stores/computerLog.js'

import ServiceForm from '@/components/Services/ServiceForm.vue'

const store = useComputerLogStore()

const getList = (list) => {
  return store.computerLog.filter((item) => item.state == list)
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

  item.state = list
  console.log('update state onDrop', store.computerLog)
}

let showForm = ref(false)
const toggleComponent = () => {
  return (showForm.value = !showForm.value)
}
</script>

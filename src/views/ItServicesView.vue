<template>
  <main class="mx-8 px-8 mt-4 flex md:flex-row justify-center">
    <!-- Drop zone 1 -->
    <div
      @drop="onDrop($event, 1)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p
        class="border-b-2 bg-white rounded-2xl text-xl font-bold text-center py-2 mb-2 text-blue-800"
      >
        Back Log
      </p>
      <div
        v-for="item in getList(1)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <ServiceCard :item="item" class="bg-sky-50" />
        <!-- {{ item.id + ' ' + item.detail + ' ' + item.state }} -->
      </div>
    </div>
    <!-- Drop zone 2 -->
    <div
      @drop="onDrop($event, 2)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p
        class="border-b-2 bg-white rounded-2xl text-xl font-bold text-center py-2 mb-2 text-blue-800"
      >
        On Process
      </p>
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
    <!-- Drop zone 3 -->
    <div
      @drop="onDrop($event, 3)"
      @dragenter.prvent
      @dragover.prevent
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
    >
      <p
        class="border-b-2 bg-white rounded-2xl text-xl font-bold text-center py-2 mb-2 text-blue-800"
      >
        Done
      </p>
      <div
        v-for="item in getList(3)"
        :key="item.id"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <ServiceCard :item="item" class="bg-green-50" />
        <!-- {{ item.id + ' ' + item.detail + ' ' + item.state }} -->
      </div>
    </div>
  </main>

  <button
    @click="toggleComponent"
    class="w-3/5 mx-8 px-8 bg-gray-50 mt-2 font-bold text-xl hover:bg-sky-200"
  >
    +
  </button>

  <section v-show="showForm">
    <ServiceForm />
  </section>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useComputerLogStore } from '@/stores/computerLog.js'

import ServiceForm from '@/components/Services/ServiceForm.vue'
import ServiceCard from '@/components/Services/ServiceCard.vue'

const store = useComputerLogStore()

// const getList = (list) => {
//   return store.computerLog.filter((item) => item.state == list)
// }

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

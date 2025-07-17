<script setup>
import { ref } from 'vue'

const getList = (state) => {
  return items.value.filter((item) => item.state == state)
}
const startDrag = (event, item) => {
  event.dataTransfer.dropEffect = 'move'
  event.dataTransfer.effectAllowed = 'move'
  event.dataTransfer.setData('itemID', item.id)
  console.log('starDrag', item)
}
const onDrop = (event, state) => {
  const itemID = event.dataTransfer.getData('itemID')
  const item = items.value.find((item) => item.id == itemID)
  item.state = state
  console.log('item state:', items)
}
</script>

<template>
  <main class="text-white mt-4 flex flex-row mx-8 w-full">
    <!-- Drop Zone: each coloum -->
    <div
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
      @drop="onDrop($event, 1)"
      @dragenter.prvent
      @dragover.prevent
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">Back Log</p>
      <div
        v-for="item in getList(1)"
        :key="item.id"
        class="w-[320px] text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-green-50"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <p>
          Create date:
          <span class="px-2 text-green-900">
            {{ item.date }}
          </span>
        </p>
        <p>
          Appointment:
          <span class="px-2 text-green-900"
            >>
            {{ item.appointment }}
          </span>
        </p>
        <p>
          user :
          <span class="px-2 text-green-900">
            {{ item.user_name }}
          </span>
        </p>
        <p>
          Computer :
          <span class="px-2 text-green-900">
            {{ item.asset_tag }}
          </span>
        </p>
        <p>
          Detail :
          <span class="px-2 text-green-900">
            {{ item.detail }}
          </span>
        </p>
      </div>
    </div>
    <div
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
      @drop="onDrop($event, 2)"
      @dragenter.prvent
      @dragover.prevent
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">Process</p>
      <div
        v-for="item in getList(2)"
        :key="item.id"
        class="w-[320px] text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-red-50"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <p>
          Create date:
          <span class="px-2 text-green-900">
            {{ item.date }}
          </span>
        </p>
        <p>
          Appointment:
          <span class="px-2 text-green-900"
            >>
            {{ item.appointment }}
          </span>
        </p>
        <p>
          user :
          <span class="px-2 text-green-900">
            {{ item.user_name }}
          </span>
        </p>
        <p>
          Computer :
          <span class="px-2 text-green-900">
            {{ item.asset_tag }}
          </span>
        </p>
        <p>
          Detail :
          <span class="px-2 text-green-900">
            {{ item.detail }}
          </span>
        </p>
      </div>
    </div>
    <div
      class="w-1/3 bg-gray-50 border border-blue-600 rounded-xl min-h-50px min-w-40 m-4"
      @drop="onDrop($event, 3)"
      @dragenter.prvent
      @dragover.prevent
    >
      <p class="border-b-1 text-xl font-bold text-center py-2 mb-2 text-blue-800">Done</p>
      <div
        v-for="item in getList(3)"
        :key="item.id"
        class="w-[320px] text-black m-4 border-1 border-blue-950 rounded-lg p-2 bg-sky-50"
        draggable="true"
        @dragstart="startDrag($event, item)"
      >
        <p>
          Create date:
          <span class="px-2 text-green-900">
            {{ item.date }}
          </span>
        </p>
        <p>
          Appointment:
          <span class="px-2 text-green-900"
            >>
            {{ item.appointment }}
          </span>
        </p>
        <p>
          user :
          <span class="px-2 text-green-900">
            {{ item.user_name }}
          </span>
        </p>
        <p>
          Computer :
          <span class="px-2 text-green-900">
            {{ item.asset_tag }}
          </span>
        </p>
        <p>
          Detail :
          <span class="px-2 text-green-900">
            {{ item.detail }}
          </span>
        </p>
      </div>
    </div>
  </main>
</template>

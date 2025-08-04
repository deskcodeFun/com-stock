<template>
  <!-- each Service card in each Zone -->

  <div
    @click="open = true"
    class="w-auto text-black mx-2 my-4 p-2 border-1 border-blue-950 rounded-lg hover:bg-sky-100"
  >
  <Transition name="slide-fade">
    <Teleport to="body">
      <div v-if="open" class="modal" @click.self="open = false">
        <ServiceEdit :itemDetail="item" @toggle-open="open = false" />
      </div>
    </Teleport>
  </Transition>
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
    <p class="text-gray-500 text-sm">
      Application :
      <span class="px-2 text-black text-md text-wrap">
        {{ props.item.application }}
      </span>
    </p>
    <p class="text-gray-500 text-sm">
      Map Drive :
      <span class="px-2 text-black text-md text-wrap">
        {{ props.item.map_drive }}
      </span>
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ServiceEdit from './ServiceEdit.vue'

const open = ref(false)
const props = defineProps({
  item: Object,
})
</script>


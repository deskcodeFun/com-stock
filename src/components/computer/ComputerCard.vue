<template>
  <div class="flex flex-row flex-wrap justify-center">
    <div
      class="w-[260px] bg-white border-1 border-gray-200 rounded-2xl m-4 p-4 hover:shadow-2xl hover:transition-y-1 hover:scale-101"
      @click="router.push(`/computer/${items.id}`)"
    >
      <!-- Show image default -->
      <div v-if="items.image">
        <img class="h-[100px] mx-auto mb-4" :src="items.image[0]" alt="items image" />
      </div>
      <!-- Show data -->
      <table
        class="[&_th]:text-left [&_th]:text-xs [&_td]:text-blue-800 [&_td]:pl-4 [&_td]:font-bold"
      >
        <tbody>
          <tr>
            <th>Assets</th>
            <td>{{ items.asset_tag }}</td>
          </tr>
          <tr>
            <th>
              <p v-if="items.staff">User</p>
              <p v-else>Status</p>
            </th>
            <td>
              <p v-if="items.staff">
                {{ fullName }}
              </p>
              <p v-else>Free</p>
            </td>
          </tr>
          <tr>
            <th>Brand</th>
            <td>{{ items.brand }}</td>
          </tr>
          <tr>
            <th>CPU</th>
            <td>{{ items.cpu.substring(0, 17) }}</td>
          </tr>
          <tr>
            <th>Ram</th>
            <td>{{ items.ram.substring(0, 4) }}</td>
          </tr>
          <tr>
            <th>Serial</th>
            <td>{{ serialTag }}</td>
            <!-- <td>{{ items.serial_tag.substring(0,15) }}</td> -->
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps({
  items: Object,
})

const fullName = computed(() => {
  return props.items.staff.fname + '.' + props.items.staff.lname.substring(0, 1)
})

const serialTag = computed(() => {
  if(props.items.serial_tag.length > 16){
    return props.items.serial_tag.substring(0, 13)+'...'
  } else {
    return props.items.serial_tag
  }
})
</script>

<template>
  <div class="flex flex-row flex-wrap justify-center">
    <div
      class="w-[280px] bg-white border-1 border-gray-200 rounded-2xl m-4 p-4  hover:shadow-2xl hover:transition-y-1 hover:scale-101"
      @click="router.push(`/computer/${items.id}`)"
    >
      <!-- Show image default -->
      <div v-if="items.image">
        <img class="h-[100px] mx-auto mb-4" :src="items.image[0]" alt="items image" />
      </div>
      <!-- Show data -->
      <table>
        <tbody>
          <tr>
            <th class="text-gray-400 text-left text-xs">Assets</th>
            <td class="text-blue-800 pl-4 font-bold">{{ items.asset_tag }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">
              <p v-if="items.staff">User</p>
              <p v-else>Status</p>
            </th>
            <td>
              <p v-if="items.staff" class="text-green-900 font-bold pl-4">
                {{ fullName }}
              </p>
              <p v-else class="text-red-900 font-bold pl-4">Free</p>
            </td>
          </tr>
          <!-- 
          <tr>
            <th class="text-gray-400 text-left text-xs">Brand</th>
            <td class="text-blue-800 pl-4">{{ items.brand }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">CPU</th>
            <td class="text-blue-800 pl-4">{{ items.cpu.substring(0, 17) }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Ram</th>
            <td class="text-blue-800 pl-4">{{ computer.ram.substring(0, 4) }}</td>
          </tr> 
          <tr>
            <th class="text-gray-400 text-left text-xs">Serial</th>
            <td class="text-blue-800 pl-4">{{ items.serial_tag}}</td>
          </tr>
          -->
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
</script>

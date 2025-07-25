<template>
  <div class="w-fit flex flex-row flex-wrap justify-center">
    <div
      class="bg-white border-1 border-gray-200 rounded-2xl m-4 p-4 transition ease-in-out hover:shadow-2xl hover:transition-y-1 hover:scale-101"
      @click="router.push(`/computer/${computer.id}`)"
    >
      <div v-if="computer.image">
        <img class="m-auto mb-4" :src="computer.image" alt="computer image" />
      </div>
      <div v-else>
        <img class="mx-auto mb-4" src="\src\assets\images\lenovo.png" alt="computer image" />
      </div>
      <table>
        <tbody>
          <tr>
            <th class="text-gray-400 text-left text-xs">Assets</th>
            <td class="text-blue-800 px-4 font-bold">{{ computer.asset_tag }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">
              <p v-if="computer.staff">User</p>
              <p v-else>Status</p>
            </th>
            <td>
              <p v-if="computer.staff" class="text-green-900 font-bold px-4">
                {{ fullName }}
              </p>
              <p v-else class="text-red-900 font-bold px-4">Free</p>
            </td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Brand</th>
            <td class="text-blue-800 px-4">{{ computer.brand }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">CPU</th>
            <td class="text-blue-800 px-4">{{ computer.cpu.substring(0, 17) }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Ram</th>
            <td class="text-blue-800 px-4">{{ computer.ram.substring(0, 4) }}</td>
          </tr>

          <tr>
            <th class="text-gray-400 text-left text-xs">Serial</th>
            <td class="text-blue-800 px-4">{{ computer.serial_tag }}</td>
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
  computer: Object,
})

const fullName = computed(() => {
  return props.computer.staff.fname + '.' + props.computer.staff.lname.substring(0, 1)
})
</script>

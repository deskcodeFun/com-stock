<template>
  <div class="w-fit my-4 flex flex-row flex-wrap justify-start">
    <!-- <div class="w-fit" v-for="computer in state.computers" key:computer.id> -->
    <div class="bg-white border-2 shadow-lg border-gray-200 rounded-2xl m-4 p-4">
      <img
        class="h-150px w-auto mx-auto mb-4"
        src="\src\assets\images\lenovo.png"
        alt="computer image"
      />
      <table>
        <tbody>
          <tr>
            <th class="text-gray-400 text-left text-xs">
              <p v-if="computer.staff">User</p>
              <p v-else>Status</p>
            </th>
            <td>
              <p v-if="computer.staff" class="text-green-900 font-bold px-4">
                {{ computer.staff.fname + '.' + computer.staff.lname.substring(0, 1) }}
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
            <td class="text-blue-800 px-4">{{ computer.cpu.substring(0, 20) }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Ram</th>
            <td class="text-blue-800 px-4">{{ computer.ram.substring(0, 15) }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Assets</th>
            <td class="text-blue-800 px-4">{{ computer.asset_tag }}</td>
          </tr>
          <tr>
            <th class="text-gray-400 text-left text-xs">Serial</th>
            <td class="text-blue-800 px-4">{{ computer.serial_tag }}</td>
          </tr>
        </tbody>
      </table>
      <RouterLink
        :to="'/computer/' + computer.id"
        class="mt-2 flex flex-row justify-end text-green-700"
        >More Detail...</RouterLink
      >
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  computer: Object,
})
</script>

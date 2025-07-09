<template>
  <!-- Show IT service TODO List and State of job -->
  <div class="justify-center px-8 py-4 mt-4">
    <table class="table-auto">
      <tbody>
        <tr class="border border-gray-400 bg-gray-50">
          <th class="m-4 p- border border-gray-400">Date</th>
          <th class="m-4 p-2 border border-gray-400">Appointment</th>
          <th class="m-4 p-2 border border-gray-400">Description</th>
          <th class="m-4 p-2 border border-gray-400">Process</th>
        </tr>
      </tbody>
      <tbody v-for="todos in todoData" :key="todos" index="todos">
        <tr>
          <td class="px-4 py-1 border border-gray-400 text-nowrap align-top">
            {{ todos.date }}
          </td>
          <td class="px-4 py-1 border border-gray-400 text-nowrap align-top">
            {{ todos.appointment }}
          </td>
          <td scope="col" class="w-full px-4 p-1 border border-gray-400 text-wrap">
            {{ todos.detail }}
          </td>
          <td scope="col" class="w-fit px-4 p-1 border border-gray-400 text-nowrap">
            {{ todos.state }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const todoData = reactive([
  {
    date: '07-Jul-2025',
    appointment: '8-Jul-2025',
    detail: 'Asset tag: CO-01-01-01 Re-Format computer',
    state: 'waiting',
  },
  {
    date: '07-Jul-2025',
    appointment: '8-Jul-2025',
    detail: 'Asset tag: CO-01-01-02 Excel error',
    state: 'waiting',
  },
  {
    date: '07-Jul-2025',
    appointment: '10-Jul-2025',
    detail: 'Asset tag: CO-01-01-03 upgrage ram 8 GB',
    state: 'waiting',
  },
  {
    date: '07-Jul-2025',
    appointment: '10-Jul-2025',
    detail: 'Asset tag: Co-01-01-04 Change computer to CO-01-02-05 ',
    state: 'waiting',
  },
  {
    date: '07-Jul-2025',
    appointment: '8-Jul-2025',
    detail:
      'Asset tag: Co-01-01-01 Re-Format computer Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam rerum iusto consequatur veniam neque doloremque quis, ullam dolorem in est ducimus commodi, esse nesciunt optio nostrum tempora eveniet. Placeat.',
    state: 'waiting',
  },
])
</script>
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae laboriosam rerum iusto consequatur
veniam neque doloremque quis, ullam dolorem in est ducimus commodi, esse nesciunt optio nostrum
tempora eveniet. Placeat.

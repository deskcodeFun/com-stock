<template>
  <!-- Show IT service TODO List and State of job -->
  <div class="w-auto flex flex-col justify-center">
    <p class="mt-4 flex justify-left ml-4">TODO List</p>
    <div>
      <table class="px-8 py-4 mt-4 w-content">
        <tbody>
          <tr class="p-2 border border-gray-400 bg-gray-50">
            <th class="m-4 p-2 border border-gray-400">Date</th>
            <th class="m-4 p-2 border border-gray-400">Todo</th>
            <th class="m-4 p-2 border border-gray-400">Process</th>
          </tr>
        </tbody>
        <tbody v-for="todos in todoData" :key="todos" index="todos">
          <tr>
            <td class="p-1 border border-gray-400 text-nowrap align-top">{{ todos.date }}</td>
            <td class="p-1 border border-gray-400 text-wrap">{{ todos.detail }}</td>
            <td class="p-1 border border-gray-400 text-nowrap">{{ todos.state }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button
      @click="showForm = !showForm"
      class="bg-gray-50 mt-2 p-2 font-bold text-xl hover:bg-sky-200"
    >
      +
    </button>

    <!-- Show add Todo list form -->
    <section>
      <div>
        <form v-if="showForm" @submit.prevent="addTodo" class="mt-4 flex flex-col w-1/2">
          <p class="text-xl text-blue-900 font-bold my-2">Add New TODO</p>
          <label class="pr-4 text-gray-500">Date</label>
          <input class="border-1 p-2" type="date" placeholder="DD/MM/YYYY" v-model="date" />
          <label class="mt-4 text-gray-500 wrap">Detail</label>
          <textarea
            class="border-1 p-2"
            type="text"
            placeholder="Description of todo"
            v-model="detail"
          ></textarea>
          <button
            class="border-1 bg-green-700 text-white hover:bg-green-200 hover:text-green-700"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

let showForm = ref(false)
const todoData = ref([
  {
    date: '07/02/2025',
    detail: 'test1',
    state: 'Waitting',
  },
  {
    date: '07/02/2025',
    detail: 'Loem',
    state: 'Waitting',
  },
])

let date = ref()
let detail = ref()
let state = ref('Waitting')
const addTodo = () => {
  // Add your logic to handle the new todo here
  showForm.value = true
  let todos = { date: date.value, detail: detail.value, state: state.value }
  todoData.value.push(todos)
  showForm.value = false
  date.value = null
  detail.value = null

  console.log('Adding todos:', todos)
  console.log('todo object', todoData)
}
</script>

<template>
  <BaseButtonBack />
  <p class="my-4 text-xl font-bold text-blue-900">Add Computer user</p>
  <!-- Form: Add new computer we don't need validation data cause it's all text -->
  <h1>User info</h1>
  <div>
    <form class="w-auto sm:max-w-screen-sm flex flex-col gap-4" @submit.prevent="addSubmit">
      <!-- input start date -->
      <label for="fname">First Name</label>
      <input type="text" v-model="fname" class="bg-sky-50"/>
      <label for="lname">Last Name</label>
      <input type="text" v-model="lname" class="bg-sky-50"/>
      <label for="email">Email</label>
      <input type="text" v-model="email" class="bg-sky-50" />
      <label for="department">Department</label>
      <input type="text" v-model="department"class="bg-sky-50"/>
      <label for="start_date">Start Date</label>
      <input type="date" v-model="start_date" class="bg-sky-50"/>
      <label for="return_date">Return Date</label>
      <input type="date" v-model="return_date" class="bg-sky-50" />
      <label for="offie_id">Office Name</label>
      <input type="number" v-model="office_id" class="bg-sky-50"/>
    </form>
    <button
      class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 mt-4 rounded-full w-full sm:w-fit focus:outline-hidden focus:shadow-outline"
      type="submit" @click="addSubmit"
    >
      Save
    </button>
  </div>
</template>

<script setup>
import BaseButtonBack from '../BaseButtonBack.vue'


import { supabase } from '@/lib/supabaseClient'
import {  ref } from 'vue'

const fname =ref(null)
const lname=ref(null)
const email=ref(null)
const department=ref(null)
const start_date=ref(new Date())
const return_date=ref(new Date())
const office_id=ref(null)

  


const addSubmit = async () => {
  const newUser = {
  fname:fname.value,
  lname:lname.value,
  email:email.value,
  department: department.value,
  start_date: start_date.value,
  return_date: return_date.value,
  office_id: office_id.value  
}
  const { error} = await supabase.from('staff').insert([newUser]).select()
  if (error) {
    console.error('Error: Insert new User ',error)
    } else{
    console.log('Success: Insert new user')
  }
  }

</script>

<style scoped></style>

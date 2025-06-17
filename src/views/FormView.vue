<template>
  <!-- check login with auth user before add,update,delete computer -->
  <!-- DON'T forget to update computer-update table -->
  <p class="my-4 mx-4 text-2xl font-bold text-blue-900">Add New Computer</p>
  <div class="flex flex-row">
    <!-- Form: Add new computer we don't need validation data cause it's all text -->
    <div class="w-1/2 pr-24 pl-4">
      <p>Computer Specification</p>
      <form @submit.prevent="addSubmit">
        <TextInput
          v-model.lazy.trim="assetComponent.modelValue"
          :label="assetComponent.label"
          :placeholder="assetComponent.placeholder"
          :pattern="assetComponent.pattern"
          :errorMessage="assetComponent.errorMessage"
          :minLength="assetComponent.minLength"
          :maxLength="assetComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="serialComponent.modelValue"
          :label="serialComponent.label"
          :placeholder="serialComponent.placeholder"
          :pattern="serialComponent.pattern"
          :errorMessage="serialComponent.errorMessage"
          :minLength="serialComponent.minLength"
          :maxLength="serialComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="brandComponent.modelValue"
          :label="brandComponent.label"
          :placeholder="brandComponent.placeholder"
          :pattern="brandComponent.pattern"
          :errorMessage="brandComponent.errorMessage"
          :minLength="brandComponent.minLength"
          :maxLength="brandComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="modelComponent.modelValue"
          :label="modelComponent.label"
          :placeholder="modelComponent.placeholder"
          :pattern="modelComponent.pattern"
          :errorMessage="modelComponent.errorMessage"
          :minLength="modelComponent.minLength"
          :maxLength="modelComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="cpuComponent.modelValue"
          :label="cpuComponent.label"
          :placeholder="cpuComponent.placeholder"
          :pattern="cpuComponent.pattern"
          :errorMessage="cpuComponent.errorMessage"
          :minLength="cpuComponent.minLength"
          :maxLength="cpuComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="aiComponent.modelValue"
          :label="aiComponent.label"
          :placeholder="aiComponent.placeholder"
          :pattern="aiComponent.pattern"
          :errorMessage="aiComponent.errorMessage"
          :minLength="aiComponent.minLength"
          :maxLength="aiComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="graphicComponent.modelValue"
          :label="graphicComponent.label"
          :placeholder="graphicComponent.placeholder"
          :pattern="graphicComponent.pattern"
          :errorMessage="graphicComponent.errorMessage"
          :minLength="graphicComponent.minLength"
          :maxLength="graphicComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="screenComponent.modelValue"
          :label="screenComponent.label"
          :placeholder="screenComponent.placeholder"
          :pattern="screenComponent.pattern"
          :errorMessage="screenComponent.errorMessage"
          :minLength="screenComponent.minLength"
          :maxLength="screenComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="ramComponent.modelValue"
          :label="ramComponent.label"
          :placeholder="ramComponent.placeholder"
          :pattern="ramComponent.pattern"
          :errorMessage="ramComponent.errorMessage"
          :minLength="ramComponent.minLength"
          :maxLength="ramComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="maxRamComponent.modelValue"
          :label="maxRamComponent.label"
          :placeholder="maxRamComponent.placeholder"
          :pattern="maxRamComponent.pattern"
          :errorMessage="maxRamComponent.errorMessage"
          :minLength="maxRamComponent.minLength"
          :maxLength="maxRamComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="harddiskComponent.modelValue"
          :label="harddiskComponent.label"
          :placeholder="harddiskComponent.placeholder"
          :pattern="harddiskComponent.pattern"
          :errorMessage="harddiskComponent.errorMessage"
          :minLength="harddiskComponent.minLength"
          :maxLength="harddiskComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="harddiskSlotComponent.modelValue"
          :label="harddiskSlotComponent.label"
          :placeholder="harddiskSlotComponent.placeholder"
          :pattern="harddiskSlotComponent.pattern"
          :errorMessage="harddiskSlotComponent.errorMessage"
          :minLength="harddiskSlotComponent.minLength"
          :maxLength="harddiskSlotComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="lanPortComponent.modelValue"
          :label="lanPortComponent.label"
          :placeholder="lanPortComponent.placeholder"
          :pattern="lanPortComponent.pattern"
          :errorMessage="lanPortComponent.errorMessage"
          :minLength="lanPortComponent.minLength"
          :maxLength="lanPortComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="wirelessSlotComponent.modelValue"
          :label="wirelessSlotComponent.label"
          :placeholder="wirelessSlotComponent.placeholder"
          :pattern="wirelessSlotComponent.pattern"
          :errorMessage="wirelessSlotComponent.errorMessage"
          :minLength="wirelessSlotComponent.minLength"
          :maxLength="wirelessSlotComponent.maxLength"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="bluetoothComponent.modelValue"
          :label="bluetoothComponent.label"
          :placeholder="bluetoothComponent.placeholder"
          :pattern="bluetoothComponent.pattern"
          :errorMessage="bluetoothComponent.errorMessage"
          :minLength="bluetoothComponent.minLength"
          :maxLength="bluetoothComponent.maxLength"
        ></TextInput>
        <div>
          <button
            class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 mt-4 rounded-full w-full focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Add Computer
          </button>
        </div>
      </form>
    </div>
    <!-- Add image form: select picture and resize to resolution H:150px -->
    <div>
      <p class="">Add imgage</p>
    </div>
  </div>

  <!-- Form: Add new user -->
  <!-- Form: update computer -->
</template>

<script setup>
import { reactive, ref } from 'vue'

import TextInput from '@/components/TextInput.vue'
import { supabase } from '@/lib/supabaseClient'
import { useToast } from 'vue-toastification'
import router from '@/router'
import ComputerCard from '@/components/ComputerCard.vue'

// const form = reactive({
//   asset_tag: '',
//   serial_tag: '',
//   brand: '',
//   model: '',
//   cpu: '',
//   ai: '',
//   graphic: '',
//   screen_size: '',
//   ram: '',
//   max_ram: '',
//   harddisk: '',
//   harddisk_slot: '',
//   lan_port: '',
//   wireless: '',
//   bluetooth: '',
// })
const toast = useToast()
const lastComputer = ref()
const assetComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'asset tag from accounting',
  label: 'Asset',
  errorMessage: 'Asset tag at least 5 charecter',
  pattern: '[A-Za-z]',
  minLength: 5,
  maxLength: 50,
})
const serialComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'computer serial number',
  label: 'Serial',
  errorMessage: '',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const brandComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'computer brand name',
  label: 'Brand',
  errorMessage: '',
  pattern: '[A-Za-z]',
  minLength: 2,
  maxLength: 50,
})
const modelComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'model of computer',
  label: 'Model',
  errorMessage: '',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const cpuComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'cpu generation and model',
  label: 'CPU',
  errorMessage: '',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const aiComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of ai processor',
  label: 'AI',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})
const graphicComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of graphic',
  label: 'Graphic',
  errorMessage: '',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const screenComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'display size',
  label: 'Display',
  errorMessage: '',
  pattern: '',
  minLength: 2,
  maxLength: 50,
})
const ramComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'capacity ram',
  label: 'Ram',
  errorMessage: 'Mininum ram is 4 Gb',
  pattern: '',
  minLength: 1,
  maxLength: 10,
})
const maxRamComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'maximum upgrade ram',
  label: 'Max Ram',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})
const harddiskComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'capacity of hard disk',
  label: 'Hard disk',
  errorMessage: 'Hard disk capacity has been value',
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const harddiskSlotComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'upgrade slot hard disk',
  label: 'HD slot',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})
const lanPortComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'LAN speed',
  label: 'LAN',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})
const wirelessSlotComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'wireless type',
  label: 'Wireless',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})
const bluetoothComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'blutetooth version',
  label: 'Bluetooth',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: null,
})

const addSubmit = async () => {
  const newComputer = {
    asset_tag: assetComponent.modelValue,
    serial_tag: serialComponent.modelValue,
    brand: brandComponent.modelValue,
    model: modelComponent.modelValue,
    cpu: cpuComponent.modelValue,
    ai: aiComponent.modelValue,
    graphic: graphicComponent.modelValue,
    screen_size: screenComponent.modelValue,
    ram: ramComponent.modelValue,
    max_ram: maxRamComponent.modelValue,
    harddisk: harddiskComponent.modelValue,
    harddisk_slot: harddiskSlotComponent.modelValue,
    lan_port: lanPortComponent.modelValue,
    wireless: wirelessSlotComponent.modelValue,
    bluetooth: bluetoothComponent.modelValue,
  }
  try {
    const response = await supabase.from('computer').insert(newComputer)
    toast.success('New computer added Successfully')
    const { data } = await supabase
      .from('computer')
      .select()
      .order('id', { ascending: false })
      .limit(1)
    router.push(`/computer/${data[0].id}`)
  } catch (error) {
    console.log('error is :', error)
  }
}
</script>
<!-- lastComputer.value =data -->
<!-- router.push(`/computer/${data.id}`) -->

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
        ></TextInput>
        <TextInput
          v-model.lazy.trim="serialComponent.modelValue"
          :label="serialComponent.label"
          :placeholder="serialComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="brandComponent.modelValue"
          :label="brandComponent.label"
          :placeholder="brandComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="modelComponent.modelValue"
          :label="modelComponent.label"
          :placeholder="modelComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="cpuComponent.modelValue"
          :label="cpuComponent.label"
          :placeholder="cpuComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="aiComponent.modelValue"
          :label="aiComponent.label"
          :placeholder="aiComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="graphicComponent.modelValue"
          :label="graphicComponent.label"
          :placeholder="graphicComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="screenComponent.modelValue"
          :label="screenComponent.label"
          :placeholder="screenComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="ramComponent.modelValue"
          :label="ramComponent.label"
          :placeholder="ramComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="maxRamComponent.modelValue"
          :label="maxRamComponent.label"
          :placeholder="maxRamComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="harddiskComponent.modelValue"
          :label="harddiskComponent.label"
          :placeholder="harddiskComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="harddiskSlotComponent.modelValue"
          :label="harddiskSlotComponent.label"
          :placeholder="harddiskSlotComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="lanPortComponent.modelValue"
          :label="lanPortComponent.label"
          :placeholder="lanPortComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="wirelessSlotComponent.modelValue"
          :label="wirelessSlotComponent.label"
          :placeholder="wirelessSlotComponent.placeholder"
        ></TextInput>
        <TextInput
          v-model.lazy.trim="bluetoothComponent.modelValue"
          :label="bluetoothComponent.label"
          :placeholder="bluetoothComponent.placeholder"
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
import { reactive } from 'vue'
import TextInput from '@/components/TextInput.vue'
import { supabase } from '@/lib/supabaseClient'

const form = reactive({
  asset_tag: '',
  serial_tag: '',
  brand: '',
  model: '',
  cpu: '',
  ai: '',
  graphic: '',
  screen_size: '',
  ram: '',
  max_ram: '',
  harddisk: '',
  harddisk_slot: '',
  lan_port: '',
  wireless: '',
  bluetooth: '',
})
const assetComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'asset tag from accounting',
  label: 'Asset',
  errorMessages: 'Asset tag at least 5 charecter',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const serialComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'computer serial number',
  label: 'Serial',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const brandComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'computer brand name',
  label: 'Brand',
  errorMessages: null,
  pattern: '',
  minLength: 2,
  maxLength: 50,
})
const modelComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'model of computer',
  label: 'Model',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const cpuComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'cpu generation and model',
  label: 'CPU',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const aiComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of ai processor',
  label: 'AI',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const graphicComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of graphic',
  label: 'Graphic',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const screenComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'display size',
  label: 'Display',
  errorMessages: null,
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const ramComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'capacity ram',
  label: 'Ram',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const maxRamComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'maximum upgrade ram',
  label: 'Max Ram',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const harddiskComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'capacity of hard disk',
  label: 'Hard disk',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const harddiskSlotComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'upgrade slot hard disk',
  label: 'HD slot',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const lanPortComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'LAN speed',
  label: 'LAN',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const wirelessSlotComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'wireless type',
  label: 'Wireless',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
})
const bluetoothComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'blutetooth version',
  label: 'Bluetooth',
  errorMessages: null,
  pattern: '',
  minLength: 1,
  maxLength: 50,
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
  const { error } = await supabase.from('computer').insert(newComputer)
  console.log('erroris :', error)
}
</script>

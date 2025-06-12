<template>
  <div>
    <p class="mr-4 mt-4 text-gray-600">{{ props.label }}</p>
    <input
      class="w-full border-b-1 nowrap rounded p-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="handleInput($event.target.value)"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
    required: true,
  },
  label: {
    type: String,
    delfault: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
})
const emit = defineEmits(['update:modelValue'])
const handleInput = (newValue) => {
  emit('update:modelValue', newValue)
}
</script>

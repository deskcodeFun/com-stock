<template>
  <div class="pb-4">
    <p class="mr-4 mt-2 text-gray-600">{{ props.label }}</p>
    <input
      class="w-full border-b-1 nowrap rounded p-2 bg-blue-50 text-blue-900 leading-tight focus:outline-none focus:shadow-outline"
      :type="props.type"
      :placeholder="props.placeholder"
      :value="props.modelValue"
      @input="handleInput($event.target.value)"
      @blur="validateData"
    />
    <span class="text-sm text-red-800" v-if="isValidate">{{
      props.errorMessage || localError
    }}</span>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const localError = ref('')
// check validate at loading page
const isValidate = ref(false)
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
  pattern: {
    type: String,
    default: null,
  },
  minLength: {
    type: Number,
    default: 0,
  },
  maxLength: {
    type: Number,
    default: 0,
  },
  errorMessage: {
    type: String,
    default: '',
  },
})

const validateData = (event) => {
  const isPatternValid = props.pattern ? !!event.target.value.match(props.pattern) : true
  const isLengthValid =
    event.target.value.length >= props.minLength && event.target.value.length <= props.maxLength

  if (!isPatternValid || !isLengthValid) {
    isValidate.value = true
    localError.value = 'Please enter a valid value'
  }
}
const emit = defineEmits(['update:modelValue'])
const handleInput = (newValue) => {
  emit('update:modelValue', newValue)
}
</script>

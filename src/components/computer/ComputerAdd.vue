<!-- 
  this is a add new computer form with multi step
  1-3 for specification
  4 for user infomation
  5 add computer image with skip
  6 show summary and insert new row to database 
  -->
  <template>
  <BaseButtonBack />
  <p class="my-4  text-xl font-bold text-blue-900">Add New Computer</p>
    <!-- Form: Add new computer we don't need validation data cause it's all text -->
    <p>Computer Specification</p>
    <div >
      <form class="flex flex-col sm:flex-row " @submit.prevent="addSubmit">
        <div class="flex-row flex-wrap px-8">
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
        </div>
        <div class="flex-row flex-wrap px-8">
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
      </div>
        <div class="flex-row flex-wrap px-8">
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

        </div>        
      </form>
      <div>
        <button
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-8 mt-4 rounded-full w-full sm:w-fit focus:outline-hidden focus:shadow-outline"
          type="submit"
        >
          Save
        </button>
      </div>
    </div>
    <!-- Add user info -->
    <!-- <div>
      <p class="">User Infomation</p>
      <p>user name</p>
      <p>office</p>
      <p>start date</p>
      <p>return date</p>
      <BaseButton label="Skip"></BaseButton>
      <BaseButton class="mx-8" label="Next"></BaseButton>
    </div> -->
    <!-- Add image form: select picture and resize to resolution H:150px -->
    <!-- <div class="ml-24">
      <p>Computer imgage</p>
      <input type="file" class="w-64 h-24 my-4 border-2 border-blue-800" />
      <div>
        <BaseButton label="Skip"></BaseButton>
        <BaseButton class="mx-8" label="Next"></BaseButton>
      </div>
    </div> -->
 
</template>

<script setup>
import { reactive, ref } from 'vue'

import TextInput from '@/components/TextInput.vue'
import { supabase } from '@/lib/supabaseClient'
// import { useToast } from 'vue-toastification'
import router from '@/router'
import BaseButtonBack from '@/components/BaseButtonBack.vue'
import BaseButton from '@/components/BaseButton.vue'

// const toast = useToast()
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
  errorMessage: 'serial at least 5 charecter',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const brandComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'computer brand name',
  label: 'Brand',
  errorMessage: 'brand at least 2 charecter',
  pattern: '[A-Za-z]',
  minLength: 2,
  maxLength: 50,
})
const modelComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'model of computer',
  label: 'Model',
  errorMessage: 'model is at lest 5 charecter',
  pattern: '',
  minLength: 5,
  maxLength: 50,
})
const cpuComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'cpu generation and model',
  label: 'CPU',
  errorMessage: 'CPU is at lest 5 charecter',
  pattern: '[A-Za-z]',
  minLength: 5,
  maxLength: 50,
})
const aiComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of ai processor',
  label: 'AI',
  errorMessage: '',
  pattern: '[A-Za-z]',
  minLength: null,
  maxLength: 50,
})
const graphicComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'type of graphic',
  label: 'Graphic',
  errorMessage: '',
  pattern: '[A-Za-z]',
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
  errorMessage: 'Please type number at lest 1 digit',
  pattern: '[0-9]',
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
  maxLength: 50,
})
const harddiskComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'capacity of hard disk',
  label: 'Hard disk',
  errorMessage: 'Please type number at lest 2 digit',
  pattern: '[0-9]',
  minLength: 2,
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
  maxLength: 50,
})
const lanPortComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'LAN speed',
  label: 'LAN',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: 50,
})
const wirelessSlotComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'wireless type',
  label: 'Wireless',
  errorMessage: '',
  pattern: '',
  minLength: null,
  maxLength: 50,
})
const bluetoothComponent = reactive({
  modelValue: '',
  type: 'text',
  placeholder: 'blutetooth version',
  label: 'Bluetooth',
  errorMessage: '',
  pattern: '',
  minLength: null,
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
    bluetooth: bluetoothComponent.modelValue
    
  }
  try {
    const {data } = await supabase.from('computer').insert(newComputer)
    router.push({ path: '/' })    
  } catch (error) {
    console.log('error is :', error)
  }
}
</script>
<!-- lastComputer.value =data -->
<!-- router.push(`/computer/${data.id}`) -->



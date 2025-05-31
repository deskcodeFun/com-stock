<template>
  <BackButton />
  <section v-if="!isLoading" class="flex flex-row justify-between mx-8">
    <div>
      <div class="text-xl mb-2 ml-8 text-blue-900">Computer Spec</div>
      <div class="flex flex-row w-fit p-4 m-2 bg-white border-1 border-blue-900 rounded-2xl">
        <img class="pr-8 w-fit h-fit mr-16" src="\src\assets\images\hp1.png" alt="computer image" />
        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left text-xs">
                <p>Status</p>
              </th>
              <td>
                <p v-if="computer[0].staff" class="text-green-900 font-bold px-4">On Use</p>
                <p v-else class="text-red-900 font-bold px-4">Free</p>
              </td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Assets Tag</th>
              <td class="text-blue-800 px-4">{{ computer[0].asset_tag }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Serial Tag</th>
              <td class="text-blue-800 px-4">{{ computer[0].serial_tag }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Brand</th>
              <td class="text-blue-800 px-4">{{ computer[0].brand }}</td>
            </tr>

            <tr>
              <th class="text-gray-400 text-left align-baseline">Model</th>
              <td class="text-blue-800 px-4">{{ computer[0].model }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">CPU</th>
              <td class="text-blue-800 px-4 w-xs text-warp">{{ computer[0].cpu }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">AI</th>
              <td class="text-blue-800 px-4">{{ computer[0].ai }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Ram</th>
              <td class="text-blue-800 px-4">{{ computer[0].ram }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Max ram</th>
              <td class="text-blue-800 px-4">{{ computer[0].max_ram }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Hard disk</th>
              <td class="text-blue-800 px-4">{{ computer[0].harddisk }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Hard disk slot</th>
              <td class="text-blue-800 px-4">{{ computer[0].harddisk_slot }}</td>
            </tr>

            <tr>
              <th class="text-gray-400 text-left align-baseline">Graphic</th>
              <td class="text-blue-800 px-4">{{ computer[0].graphic }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Display</th>
              <td class="text-blue-800 px-4">{{ computer[0].screen_size }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">bluetooth</th>
              <td class="text-blue-800 px-4">{{ computer[0].bluetooth }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Lan</th>
              <td class="text-blue-800 px-4">{{ computer[0].lan_port }}</td>
            </tr>

            <tr>
              <th class="text-gray-400 text-left align-baseline">Wireless</th>
              <td class="text-blue-800 px-4">{{ computer[0].wireless }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div>
      <div class="text-xl mb-2 ml-8 text-green-900">User infomation</div>
      <div class="flex flex-row w-fit p-4 m-2 bg-white border-1 border-blue-900 rounded-2xl">
        <img class="pr-8 w-fit h-fit mr-16" src="\src\assets\images\hp1.png" alt="computer image" />
        <table>
          <tbody>
            <tr>
              <th class="text-gray-400 text-left align-baseline">User Name</th>
              <td class="text-blue-800 px-4">
                {{ computer[0].staff.fname + ' ' + computer[0].staff.lname }}
              </td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Email</th>
              <td class="text-blue-800 px-4">{{ computer[0].staff.email }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left">Office</th>
              <td class="text-blue-800 px-4">{{ computer[0].staff.office }}</td>
            </tr>

            <tr>
              <th class="text-gray-400 text-left align-baseline">Department</th>
              <td class="text-blue-800 px-4">{{ computer[0].staff.department }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Start use date</th>
              <td class="text-blue-800 px-4 w-xs text-warp">{{ computer[0].staff.start_date }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left align-baseline">Return computer date</th>
              <td class="text-blue-800 px-4">{{ computer[0].staff.return_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
  <div v-else>Loading......</div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/lib/supabaseClient.js'
import BackButton from '@/components/BackButton.vue'
import { ref, onMounted } from 'vue'

const route = useRoute()
const router = useRouter()

const paramId = route.params.id
let computer = ref([])
const isLoading = ref(true)
//const data = ref('')

onMounted(async () => {
  try {
    const { data } = await supabase.from('computer').select('*,staff(*)').eq('id', paramId)
    computer.value = data
  } catch (error) {
    console.error('Fetch detail error:', error)
  } finally {
    isLoading.value = false
  }
})
// async function getComputer() {
//   console.log('id is :', paramId)
//   const { data, error } = await supabase.from('computer').select('*,staff(*)').eq('id', paramId)
//   // const { data, error } = await supabase
//   //   .from('computer')
//   //   .select('*, staff!inner(*)')
//   //   .eq('id', paramId)
//   computer.value = data
//   console.log('computers is:', computer.value)
//   console.log('data is:', data)
//   console.log('error is:', error)
// }

// onMounted(() => {
//   getComputer()
// })
</script>

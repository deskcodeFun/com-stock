<template>
  <BaseButtonBack />
  <main class="flex flex-col lg:flex-row">
    <!-- Show computer spec -->
    <div class="w-fit flex flex-col flex-wrap justify-between">
      <div class="text-xl ml-4 text-blue-900">Computer Spec</div>
      <!-- initial store.computerDetail 
        if true show spec computer 
        if store is null don't show anything
      -->
      <div v-if="store.computerDetail">
        <div
          class="flex flex-row flex-wrap justify-center p-4 m-2 bg-white border border-blue-900 rounded-2xl"
        >
          <div v-if="store.computerDetail[0].image">
            <img
              class="h-50px mx-auto w-auto mb-4 px-4"
              :src="store.computerDetail[0].image"
              alt="computer image"
            />
          </div>
          <div v-else>
            <img
              class="h-50px mx-auto w-auto mb-4 px-4"
              src="\src\assets\images\lenovo.png"
              alt="computer image"
            />
          </div>
          <table>
            <tbody class="align-baseline">
              <tr>
                <th class="text-gray-400 text-left text-xs">
                  <p>Status</p>
                </th>
                <td>
                  <p v-if="store.computerDetail[0].staff" class="text-green-900 font-bold px-4">
                    On Use
                  </p>
                  <p v-else class="text-red-900 font-bold px-4">Free</p>
                </td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Assets</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].asset_tag }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Serial</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].serial_tag }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Brand</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].brand }}</td>
              </tr>

              <tr>
                <th class="text-gray-400 text-left text-xs">Model</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].model }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">CPU</th>
                <td class="text-blue-800 px-4 w-xs text-warp">{{ store.computerDetail[0].cpu }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">AI</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].ai }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Ram</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].ram }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Max ram</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].max_ram }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Hard disk</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].harddisk }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">HD slot</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].harddisk_slot }}</td>
              </tr>

              <tr>
                <th class="text-gray-400 text-left text-xs">Graphic</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].graphic }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Display</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].screen_size }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">bluetooth</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].bluetooth }}</td>
              </tr>
              <tr>
                <th class="text-gray-400 text-left text-xs">Lan</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].lan_port }}</td>
              </tr>

              <tr>
                <th class="text-gray-400 text-left text-xs">Wireless</th>
                <td class="text-blue-800 px-4">{{ store.computerDetail[0].wireless }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div v-else></div>
    </div>
    <!-- Check user_id is not null -->
    <div v-if="store.computerDetail && store.computerDetail[0].staff">
      <div class="text-xl ml-4 text-green-900">User infomation</div>
      <div class="flex flex-row flex-wrap p-4 m-2 bg-white border border-blue-900 rounded-2xl">
        <!--<img
          class="h-50px mx-auto w-auto mb-4 px-4"
          src="\src\assets\images\avatar-128.png"
          alt="profile picture"
        /> -->
        <table>
          <tbody class="align-baseline">
            <tr>
              <th class="text-gray-400 text-left text-xs">User Name</th>
              <td class="text-blue-800 px-4">
                {{
                  store.computerDetail[0].staff.fname + ' ' + store.computerDetail[0].staff.lname
                }}
              </td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Email</th>
              <td class="text-blue-800 px-4">{{ store.computerDetail[0].staff.email }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Office</th>
              <td class="text-blue-800 px-4">
                {{
                  store.computerDetail[0].staff.name +
                  ' ' +
                  store.computerDetail[0].staff.short_name
                }}
              </td>
            </tr>

            <tr>
              <th class="text-gray-400 text-left text-xs">Department</th>
              <td class="text-blue-800 px-4">{{ store.computerDetail[0].staff.department }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Start date</th>
              <td class="text-blue-800 px-4">{{ store.computerDetail[0].staff.start_date }}</td>
            </tr>
            <tr>
              <th class="text-gray-400 text-left text-xs">Return date</th>
              <td class="text-blue-800 px-4">{{ store.computerDetail[0].staff.return_date }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div v-else></div>
  </main>

  <section class="ml-8 my-8 text-xl">
    Computer Record
    <table class="w-1/2 mt-4">
      <tbody>
        <tr>
          <th class="text-left p-1 border-2 border-gray-200">Date</th>
          <th class="text-left p-1 border-2 border-gray-200">Detail</th>
        </tr>
        <tr>
          <td class="text-lg py-2 pl-1 pr-8 border-2 border-gray-200">21-May-2025</td>
          <td class="text-lg py-2 pl-1 pr-8 border-2 border-gray-200">
            change hard disk to SSD 256Gb
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { useComputerCountStore } from '@/stores/computerCount'
import BaseButtonBack from '@/components/BaseButtonBack.vue'

const store = useComputerCountStore()
const route = useRoute()
let paramId = route.params.id
store.getComputerDetail(paramId)
</script>

<template>
  <div class="px-8 bg-teal-50 p-8 rounded-2xl">
    <!-- Header Form: every form have same header -->
    <div>
      <p class="text-blue-900 text-xl py-2 pb-4">User infomation</p>
      <p class="text-gray-600 text-md align-text-bottom">
        Date Appointment :
        <input type="date" value="dateAppoint" v-model="dateAppoint" class="mx-2 px-2 text-lg" />
      </p>

      <p class="text-gray-600 text-md align-text-bottom my-2">
        User Name :
        <input
          type="text"
          value="userName"
          v-model="userName"
          class="mx-13 px-2 text-lg border-1"
        />
      </p>
      <p class="text-gray-600 text-md align-text-bottom my-2">
        Departmant :
        <input
          type="text"
          value="department"
          v-model="department"
          class="mx-12 px-2 text-lg border-1"
        />
      </p>
      <p class="text-gray-600 text-md align-text-bottom my-2">
        Email :
        <input
          type="email"
          value="userEmail"
          v-model="useremail"
          class="mx-21 px-2 text-lg border-1"
        />
      </p>
      <p class="text-gray-600 text-md align-text-bottom my-2">
        Asset Tag :
        <input
          type="text"
          value="computerTag"
          v-model="computerTag"
          class="mx-15 px-2 text-lg border-1"
        />
      </p>
    </div>
    <br />
    <!-- Filter section -->
    <p class="text-blue-900 text-xl py-2 pb-4">Service Type :</p>
    <div class="flex flex-row gap-2">
      <input type="radio" id="1" value="1" v-model="selected" />
      <label for="1">Error</label>
      <input type="radio" id="2" value="2" v-model="selected" />
      <label for="2">Format</label>
      <input type="radio" id="3" value="3" v-model="selected" />
      <label for="3">Change Computer</label>
      <input type="radio" id="4" value="4" v-model="selected" />
      <label for="4">Other</label>
    </div>

    <!-- Error form -->
    <div v-if="selected == 1">
      <p>Error Detail</p>
      <textarea rows="4" class="border-2 w-md h-md"></textarea>
    </div>
    <!-- Reformat form -->
    <div v-else-if="selected == 2">
      <p class="text-blue-900 text-xl py-2 pt-4">Application</p>
      <div class="flex flex-row gap-2">
        <input type="checkbox" id="msOffice" value="msOffice" v-model="checkList" />
        <label for="msOffice">Microsoft Office</label>
        <input type="checkbox" id="acrobat" value="acrobat" v-model="checkList" />
        <label for="acrobat">Acrobat Reader</label>
        <input type="checkbox" id="printerNexus" value="printerNexus" v-model="checkList" />
        <label for="printeNexus">Printer Toshiba - Nexus</label>
        <input type="checkbox" id="printerNra" value="printerNra" v-model="checkList" />
        <label for="printerNra">Printer Toshiba - NRA</label>
      </div>
      <p class="p-2">Check Program List {{ checkList }}</p>
      <div>
        <p class="text-blue-900 text-xl py-2 pt-4">Map Drive</p>
        <p class="p-2">{{ mapDrive }}</p>
        <div class="w-fit flex flex-col gap-2">
          <ul class="flex flex-col gap-2">
            NPA
            <li>
              <input type="checkbox" id="mapD1" value="mapD1" v-model="mapDrive" />
              <label for="mapD1" class="px-1">NPA-Agency</label>
            </li>
            <li>
              <input type="checkbox" id="mapD2" value="mapD2" v-model="mapDrive" />
              <label for="mapD2" class="px-1">NPA-Brokerage-Service</label>
            </li>
            <li>
              <input type="checkbox" id="mapD3" value="mapD3" v-model="mapDrive" />
              <label for="mapD3" class="px-1">NPA-Investment</label>
            </li>
          </ul>

          <div class="flex flex-row flex-wrap gap-2 w-170">
            <input type="checkbox" id="mapD4" value="mapD4" v-model="mapDrive" />
            <label for="mapD4">Admin-Administator</label>
            <input type="checkbox" id="mapD5" value="mapD5" v-model="mapDrive" />
            <label for="mapD5">Admin-Central Admin</label>
            <input type="checkbox" id="mapD6" value="mapD6" v-model="mapDrive" />
            <label for="mapD6">Admin-Finance Management</label>
            <input type="checkbox" id="mapD7" value="mapD7" v-model="mapDrive" />
            <label for="mapD7">Admin-Finance&Accounting</label>
            <input type="checkbox" id="mapD8" value="mapD8" v-model="mapDrive" />
            <label for="mapD8">Admin-Humen Resource</label>
            <input type="checkbox" id="mapD9" value="mapD9" v-model="mapDrive" />
            <label for="mapD9">Admin-Management Team</label>
            <input type="checkbox" id="mapD10" value="mapD10" v-model="mapDrive" />
            <label for="mapD10">Admin-Template</label>
          </div>
          <div>
            <input type="checkbox" id="mapD11" value="mapD11" v-model="mapDrive" />
            <label for="mapD11">NPM-Mailing list</label>
            <input type="checkbox" id="mapD12" value="mapD12" v-model="mapDrive" />
            <label for="mapD12">NPM-Real Estate Sulution</label>
            <input type="checkbox" id="mapD13" value="mapD13" v-model="mapDrive" />
            <label for="mapD13">NPM-Real Estate Sulution2</label>
            <input type="checkbox" id="mapD14" value="mapD14" v-model="mapDrive" />
            <label for="mapD14">NPM-Sales</label>
          </div>
          <div>
            <input type="checkbox" id="mapD15" value="mapD15" v-model="mapDrive" />
            <label for="mapD15">NRA-Advisory</label>
            <input type="checkbox" id="mapD16" value="mapD16" v-model="mapDrive" />
            <label for="mapD16">NRA-Corporate Client</label>
            <input type="checkbox" id="mapD17" value="mapD17" v-model="mapDrive" />
            <label for="mapD17">NRA-General Admin</label>
            <input type="checkbox" id="mapD18" value="mapD18" v-model="mapDrive" />
            <label for="mapD18">NRA-Investment</label>
            <input type="checkbox" id="mapD19" value="mapD19" v-model="mapDrive" />
            <label for="mapD19">NRA-Research</label>
            <input type="checkbox" id="mapD20" value="mapD20" v-model="mapDrive" />
            <label for="mapD20">NRA-Valuation</label>
            <input type="checkbox" id="mapD21" value="mapD21" v-model="mapDrive" />
            <label for="mapD21">NRA-OLD NRA</label>
            <input type="checkbox" id="mapD22" value="mapD22" v-model="mapDrive" />
          </div>
          <label for="mapD22">Conspire</label>
        </div>
      </div>
    </div>
    <!-- Change Computer form -->
    <div v-else-if="selected == 3">
      <p>Current computer Asset Tag:</p>
      <p>New computer Asset Tag:</p>
    </div>
    <!-- Other form -->
    <div v-else-if="selected == 4">
      <p>Detail</p>
      <textarea class="border-2" placeholder="type other thing "></textarea>
    </div>
    <div v-else></div>
    <div class="flex flex-row justify-end">
      <button
        @click="$emit('toggle-showForm')"
        class="px-4 py-1 mt-4 bg-green-600 text-white rounded-xl"
      >
        Close
      </button>
      <!-- <button class="px-4 py-1 mt-4 bg-green-600 text-white rounded-xl">Cancel</button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userName = ref('')
const dateAppoint = ref('')
const department = ref('')
const useremail = ref('')
const computerTag = ref('')
const selected = ref(0)
const checkList = ref([])
const mapDrive = ref([])
</script>

<style scoped>
.modal-content {
  padding: 20px;
  border-radius: 8px;
}
</style>

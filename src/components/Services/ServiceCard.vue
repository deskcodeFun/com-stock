<template>
  <!-- Drop Zone: each coloum -->
  <div class="text-black mx-2 my-4 p-2 border-1 border-blue-950 rounded-lg">
    <div class="flex flex-col md:flex-row justify-between">
      <p class="text-gray-500 text-sm">
        Service ID:
        <span class="px-2 text-black text-md">
          {{ props.item.id }}
        </span>
      </p>
      <p class="text-gray-500 text-sm">
        Computer :
        <span class="px-2 text-black text-md">
          {{ props.item.asset_tag }}
        </span>
      </p>
    </div>

    <div class="flex flex-col md:flex-row justify-between">
      <p class="text-gray-500 text-sm">
        Create date:
        <span class="px-2 text-black text-md">
          {{ props.item.create_at }}
        </span>
      </p>
      <p class="text-gray-500 text-sm">
        Appointment:
        <span class="px-2 text-black text-md">
          {{ props.item.appointment }}
        </span>
      </p>
    </div>
    <p class="text-gray-500 text-sm">
      Detail :
      <span class="px-2 text-black text-md text-wrap">
        {{ props.item.detail }}
      </span>
    </p>
  </div>
</template>

<script setup>
const props = defineProps({
  item: Object,
})
</script>

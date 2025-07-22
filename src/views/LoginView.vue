<template>
  <div class="flex flex-col h-screen">
    <div class="m-auto w-fit">
      <div class="px-24 py-14 rounded-2xl bg-sky-50/40 shadow-xl">
        <p class="font-bold text-4xl tracking-wide text-center text-blue-900 text-shadow-lg">
          Nexus
        </p>
        <p class="text-tiny text-xs text-center pb-16 text-blue-900 text-shadow-xs">
          Computer Stock
        </p>
        <div class="mb-4">
          <p class="pb-2 text-gray-500 text-sm">User Name</p>
          <input
            class="w-full border nowrap rounded-sm p-2 bg-blue-50 text-blue-900 leading-tight focus:outline-hidden focus:shadow-outline"
            type="text"
            placeholder="user name or email"
          />
        </div>
        <div class="mb-8">
          <p class="pb-2 text-gray-500 text-sm">Password</p>
          <input
            class="w-full border nowrap rounded-sm p-2 bg-blue-50 text-blue-900 leading-tight focus:outline-hidden focus:shadow-outline"
            type="password"
            placeholder="user name or email"
          />
        </div>
        <button
          class="bg-green-600 hover:bg-green-900 rounded-4xl hover:font-bold text-white w-full py-2"
        >
          log in
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

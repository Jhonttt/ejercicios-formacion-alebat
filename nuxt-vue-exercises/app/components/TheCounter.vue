<script setup lang="ts">
const count = ref(0);
</script>

<template>
  <main class="bg-green-300">
    <div
      class="flex justify-center bg-yellow-300 py-2 text-xl uppercase text-yellow-800 font-bold"
    >
      <TheTitle>El contador dinámico</TheTitle>
    </div>
    <div class="flex justify-center gap-3 pt-3">
      <button class="bg-red-300 px-3 py-1 rounded hover:bg-red-950 hover:text-red-200" @click="count--">
        Decrement
      </button>
      <button class="bg-blue-300 px-3 py-1 rounded hover:bg-blue-950 hover:text-blue-200" @click="count++">
        Increment
      </button>
    </div>
    <h2 class="text-center text-green-800 pt-2 pb-4">
      <span class="bg-blue-400 px-6 py-2 rounded-full">
        Count: <span class="font-bold text-2xl">{{ count }}</span>
      </span>
    </h2>
  </main>
</template>

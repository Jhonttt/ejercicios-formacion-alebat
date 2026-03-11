<script setup lang="ts">
import { storeToRefs } from 'pinia'

const counterStore = useCounterStore();
const { count, doubleCount } = storeToRefs(counterStore)
const { increment, decrement, reset, calculateText, calculateTextColor } = counterStore

</script>

<template>
  <main class="bg-purple-400">
    <div
      class="flex justify-center bg-yellow-300 py-2 text-xl uppercase text-yellow-800 font-bold"
    >
      <TheTitle>The dynamic counter</TheTitle>
    </div>
    <p class="text-center text-xl" :class="calculateTextColor()">
      {{ calculateText() }}
    </p>
    <div class="flex justify-center gap-3 pt-1">
      <button class="bg-green-300 px-3 py-1 rounded hover:bg-green-950 hover:text-green-200 disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed" @click="decrement"
      :disabled="count <= 0"
      >
        Decrement
      </button>
      <button class="bg-red-300 px-3 py-1 rounded hover:bg-red-950 hover:text-red-200 disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed" @click="reset"
      :disabled="count === 0"
      >
        Reset
      </button>
      <button class="bg-blue-300 px-3 py-1 rounded hover:bg-blue-950 hover:text-blue-200 disabled:bg-gray-800 disabled:text-white disabled:cursor-not-allowed" @click="increment"
      :disabled="count >= 10"
      >
        Increment
      </button>
    </div>
    <h2 class="text-center text-green-950 pt-2 pb-4">
      <span class="bg-blue-400 px-6 py-2 rounded-full" :class="count === 10 ? 'text-green-100 bg-green-500' : ''">
        Count: <span class="font-bold text-2xl">{{ count }}</span>
      </span>
    </h2>
    <div
      class="flex justify-center bg-yellow-300 py-2 text-xl uppercase text-yellow-800 font-bold"
    >
      <TheTitle>The double of the dynamic counter</TheTitle>
    </div>
    <h2 class="text-center text-green-950 pt-2 pb-4">
      <span class="bg-blue-400 px-6 py-2 rounded-full" :class="doubleCount === 10 ? 'text-green-100 bg-green-500' : ''">
        Count: <span class="font-bold text-2xl">{{ doubleCount }}</span>
      </span>
    </h2>
  </main>
</template>

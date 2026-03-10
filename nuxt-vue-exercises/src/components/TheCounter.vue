<script setup lang="ts">
import { ref } from "vue";
import TheTitle from "./TheTitle.vue";

const counter = ref(0);

</script>

<template>
  <main class="bg-amber-600">
    <TheTitle>
      An amazing title
    </TheTitle>
    <div>
      <button @click="counter++">Increment</button>
      <button @click="counter--">Decrement</button>
    </div>
    <p>Counter: {{ counter }}</p>
  </main>
</template>

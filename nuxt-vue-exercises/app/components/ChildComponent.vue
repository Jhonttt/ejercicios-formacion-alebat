<script setup lang="ts">
const isActive = ref<boolean>(false);

const emit = defineEmits<{
  (e: "childEvent", payload: { message: string }): void;
}>();

function handleClick() {
  isActive.value = !isActive.value;
  emit("childEvent", {
    message: isActive.value ? "Hello from the child component" : "",
  });
}

const message = inject('message');
</script>

<template>
  <section class="bg-purple-400">
    <div
      class="flex justify-center bg-yellow-300 py-2 text-xl uppercase text-yellow-800 font-bold"
    >
      <TheTitle>Communication with the father</TheTitle>
    </div>
    
    <div class="flex justify-center pt-1">
      <button
        @click="handleClick"
        class="px-2 py-1 rounded bg-purple-900 text-white my-2"
      >
        {{ isActive ? "Hide message" : "Send message" }}
      </button>

    </div>
    <h2 class="text-center text-white hover:text-blue-600 hover:cursor-pointer">{{ message }}</h2>
  </section>
</template>

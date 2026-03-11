<script setup lang="ts">
const message = ref<string | null>(null);

const handleChildEvent = (payload: { message: string }) => {
  message.value = payload.message;
};

provide('message', 'Hello from the father component via provide/inject');
</script>

<template>
  <section>
    
    <ChildComponent @childEvent="handleChildEvent" />
    <h1 v-if="message" class="bg-purple-400 text-center pb-2 pt-1">
      <span class="bg-blue-500/50 border-purple-950 rounded p-1 text-white">{{
        message
      }}</span>
    </h1>
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    image?: string;
    title?: string;
    description?: string;
    price?: number;
  }>(),
  {
    image: '/default.png',
    title: 'Default tile',
    description: 'Default description',
    price: 0
  },
);
</script>

<template>
  <article class="border px-3 my-4 rounded">
    <h2 class="text-center mt-2">
      <span class="rounded-full bg-blue-100 p-2 z-10">
        {{ title }}
      </span>
    </h2>
    <img :src="image" :alt="`An ${title}`">
    <p>{{ description }}</p>
    <p>Price: ${{ price }}</p>
    <button class="bg-green-400 border rounded p-1 px-2 my-1 text-green-950 hover:bg-green-950 hover:text-green-100">View {{ title }}</button>
  </article>
</template>

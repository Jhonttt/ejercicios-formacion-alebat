<script setup lang="ts">
import type { Series } from '~/data/mock';

withDefaults(defineProps<Omit<Series, 'id'>>(), {
  category: "Default category",
  title: "Default title",
  episode: 1,
  video: "https://www.youtube.com/watch?v=pKS6zndTbH0"
});
</script>

<template>
  <article class="border px-3 my-4 rounded">
    <h2>
      <span class="rounded-full bg-blue-100 p-2 z-10">
        {{ title }}
      </span>
    </h2>

    <img
      src="/default.png"
      :alt="title"
      class="w-full h-auto object-cover rounded"
    />

    <button class='bg-green-400 border rounded p-1 px-2 my-1 text-green-950 hover:bg-green-950 hover:text-green-100'>
      <a
        :href="video" target="_blank"
      >
        Episode {{ episode }}
      </a>
    </button>
  </article>
</template>

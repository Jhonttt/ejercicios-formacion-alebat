<script setup lang="ts">
const route = useRoute();
const { category } = route.params;

import { mockSeries } from "~/data/mock";

const series = computed(() => {
  const filtered = mockSeries.filter((serie) => serie.category === category);
  return [...new Map(filtered.map((s) => [s.title, s])).values()];
});

</script>

<template>
  <TheTitle>{{ category }}</TheTitle>
  <div
    v-for="(group, index) in series"
    :key="index"
    class="flex justify-evenly"
  >
    <NuxtLink :to="`/series-bonitas/${category}/${group.title}`" class="border px-3 my-4 rounded bg-cyan-400">
      {{ group.title }}
    </NuxtLink>
  </div>
</template>

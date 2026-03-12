<script setup lang="ts">
const route = useRoute();
const { category } = route.params;

import { mockSeries } from "~/data/mock";

const capitules = computed(() => {
  return mockSeries.filter(
    (serie) => serie.category.toLowerCase() === category,
  );
});

const groupedSeries = computed(() => {
  const groups = [];
  for (let i = 0; i < capitules.value.length; i += 5) {
    groups.push(capitules.value.slice(i, i + 5));
  }
  return groups;
});
</script>

<template>
  <TheTitle>{{ category }}</TheTitle>
  <div
    v-for="(group, index) in groupedSeries"
    :key="index"
    class="flex justify-evenly"
  >
    <SeriesCard
      v-for="serie in group"
      :key="serie.title + serie.episode"
      v-bind="serie"
    />
  </div>
</template>

<script setup lang="ts">
import { mockSeries } from "~/data/mock";
const uniqueCategories = new Set(mockSeries.map((serie) => serie.category));
</script>

<template>
  <template v-for="category in uniqueCategories" :key="category">
    <NuxtLink :href="`/series-bonitas/${category.toLowerCase()}`">
      <TheTitle class="hover:text-purple-900 hover:bg-white">
        {{ category }}
      </TheTitle>
    </NuxtLink>
  </template>
</template>
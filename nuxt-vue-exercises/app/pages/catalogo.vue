<script setup lang="ts">
import { mockProducts } from "~/data/mock";

const products = ref(mockProducts);

const groupedProducts = computed(() => {
  const groups = [];
  for (let i = 0; i < products.value.length; i += 3) {
    groups.push(products.value.slice(i, i + 3));
  }
  return groups;
});
</script>

<template>
  <main>
    <h1 class="text-center text-3xl mt-3">Productos disponibles</h1>
    <div v-for="(group, index) in groupedProducts" :key="index" class="flex justify-evenly">
      <ProductCard v-for="product in group" :key="product.id" v-bind="product" />
    </div>
  </main>
</template>
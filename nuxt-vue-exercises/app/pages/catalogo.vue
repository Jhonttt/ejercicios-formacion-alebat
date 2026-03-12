<script setup lang="ts">
import { mockProducts } from "~/data/mock";
const counterStore = useCounterStore();

definePageMeta({
  layout: 'catalogo-layout'
})

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
  <main class="bg-white">
    <h2 class="text-center text-green-950 pt-2 pb-4">
      <span class="bg-blue-400 px-6 py-2 rounded-full" :class="counterStore.count === 10 ? 'text-green-100 bg-green-500' : ''">
        Count: <span class="font-bold text-2xl">{{ counterStore.count }}</span>
      </span>
    </h2>
    <h3 class="text-center text-3xl mt-3">Productos disponibles</h3>
    <div v-for="(group, index) in groupedProducts" :key="index" class="flex justify-evenly">
      <ProductCard v-for="product in group" :key="product.id" v-bind="product" />
    </div>
  </main>
</template>
<script setup lang="ts">
import { socialLinks } from '~/data/socialLinks';
</script>

<template>
  <header class="bg-black flex justify-between py-3">
    <div class="ml-5 flex items-center gap-3">
      <NuxtLink href="/" class="text-white hover:text-blue-500">Home</NuxtLink>
      <a v-for="rrdd in socialLinks" :key="rrdd.id" :href="rrdd.href">
        <svg width="24" height="24" fill="white" class="hover:fill-blue-500">
          <use :href="'/sprite.svg#' + rrdd.id" />
        </svg>
      </a>
    </div>
    <nav class="mr-5 text-white flex items-center gap-3">
      <NuxtLink href="/series-bonitas" class="hover:text-blue-500">Series Bonitas</NuxtLink>
      <NuxtLink href="/catalogo" class="hover:text-blue-500">Catalogo</NuxtLink>
      <NuxtLink href="/productos" class="hover:text-blue-500">Productos</NuxtLink>
    </nav>
  </header>
</template>
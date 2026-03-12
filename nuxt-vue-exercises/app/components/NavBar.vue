<script setup lang="ts">
import { socialLinks } from '~/data/socialLinks';
</script>

<template>
  <header class="bg-black flex justify-between py-3">
    <div class="ml-5 flex items-center gap-3">
      <NuxtLink href="/" class="text-white">Home</NuxtLink>
      <a v-for="rrdd in socialLinks" :key="rrdd.id" :href="rrdd.href">
        <svg width="24" height="24" fill="white">
          <use :href="'/sprite.svg#' + rrdd.id" />
        </svg>
      </a>
    </div>
    <nav class="mr-5 text-white">
      <NuxtLink href="/catalogo">Catalogo</NuxtLink>
      <NuxtLink href="/productos">Productos</NuxtLink>
    </nav>
  </header>
</template>
<script setup lang="ts">
withDefaults(
  defineProps<{
    propTitle?: string;
  }>(),
  {
    propTitle: "A normal title",
  },
);
</script>

<template>
  <h1>{{ propTitle }}</h1>
</template>
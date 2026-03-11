import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref<number>(5);
  const doubleCount = computed(() => count.value * 2);

  const increment = () => {
    if (count.value >= 10) return;
    count.value++;
  };

  const decrement = () => {
    if (count.value <= 0) return;
    count.value--;
  };

  const reset = () => {
    count.value = 0;
  };

  const calculateText = () => {
    if (count.value <= 0) return `Estás en el valor mínimo`;
    else if (count.value >= 10) return `Estás en el valor máximo`;
    return `Estás en los parámetros adecuados`;
  };

  const calculateTextColor = () => {
    if (count.value <= 0) return "text-red-300";
    else if (count.value >= 10) return "text-green-300";
    return "text-white";
  };

  return {
    count,
    doubleCount,
    increment,
    decrement,
    reset,
    calculateText,
    calculateTextColor,
  };
});

export const useCounter = () => {
  const count = ref<number>(5)

  const increment = () => {
    if (count.value >= 10) return
    count.value++
  }

  const decrement = () => {
    if (count.value <= 0) return
    count.value--
  }

  const reset = () => {
    count.value = 0
  }

  return { count, increment, decrement, reset }
}
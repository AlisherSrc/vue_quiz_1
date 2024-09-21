import { ref } from 'vue';

export function useCounter() {
  const count = ref(2);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  function setCounter(value) {
    count.value = value;
  }

  return {
    count,
    increment,
    decrement,
    setCounter
  };
}

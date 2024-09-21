<template>
  <div class="counter_container">
    <h2>Counter</h2>
    <p>Current Count: {{ count }}</p>
    <div class="counter_buttons">
      <button @click="increment">Increment</button>
      <button @click="decrement" id="decrement">Decrement</button>
    </div>
  </div>
</template>

<script>
import { useCounter } from '../stores/useCounter.js';

export default {
  setup() {
    const { count, increment, decrement, setCounter } = useCounter();
    return { count, increment, decrement, setCounter };
  },
  props: {
    initialNum: {
      type: Number
    }
  }
};
</script>

<style scoped>
#decrement{
  background-color: #e74c3c;
}

button {
  padding: 10px 15px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #45a049;
}

.counter_container{
  display: flex;
  flex-flow: column;
  gap: 5px;
}

.counter_buttons{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}
</style>
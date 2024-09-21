<template>
    <footer>
      <p>{{ text }}</p>
    </footer>
  </template>
  
  <script>
  export default {
    props: {
      text: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  footer {
    background-color: var(--vt-c-indigo);
    color: white;
    padding: 1rem;
    text-align: center;
    position: absolute;
    bottom: 0;
    width: 100%;
  }
  </style>
  
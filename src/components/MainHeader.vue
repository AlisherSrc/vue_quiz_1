<template>
    <header>
      <h1>{{ title }}</h1>
    </header>
  </template>
  
  <script>
  export default {
    props: {
      title: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  header {
    background-color: var(--vt-c-indigo);
    color: white;
    padding: 1rem;
    text-align: center;
  }
  </style>
  
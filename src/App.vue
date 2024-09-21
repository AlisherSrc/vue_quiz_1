<template>
  <div id="app">
    <!-- Header component with props -->
    <MainHeader title="Super puper to-do list!" />

    <ItemList :initialItems="['You can delete me!', 'Yay!']" />

    <MainFooter text="© 2024 Alisher's ToDo corp. All Rights Reserved." />
  </div>
</template>

<script>
import MainHeader from './components/MainHeader.vue';
import MainFooter from './components/MainFooter.vue';
import ItemList from './components/ItemList.vue';

export default {
  components: {
    MainHeader,
    MainFooter,
    ItemList,
  },
};
</script>

<style>
#app {
  width: 100%;
  text-align: center;
  margin: 0;
  padding-bottom: 60px; 
  min-height: 100vh;
  position: relative;
}
</style>
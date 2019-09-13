<template>
  <div id="app">
    <h1>Traffic Manager</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  #app {
      color: #2c3e50;
            text-align: center;
      font-weight: normal;
    }
</style>
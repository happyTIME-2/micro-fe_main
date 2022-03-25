<script setup lang="ts">
</script>

<template>
  <!-- <router-view /> -->
  <h2 text-center>主应用头部</h2>
  <div flex>
    <router-link to="/app-vue/" btn ml-2 mr-2>vue3</router-link>
    <router-link to="/app-vue2/" btn mx-1>vue2</router-link>
  </div>
  <div id="app-vue"></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

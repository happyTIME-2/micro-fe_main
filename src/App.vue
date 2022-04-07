<script setup lang="ts">
import { apps, isFinished } from '@/util/apps'
</script>

<template>
  <Layout v-if="isFinished" :apps="apps"/>
  <div id="app-vue"></div>
</template>

<style>
#container {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

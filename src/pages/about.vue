<template>
  <div class="about m-auto">
    <h1 text="red center 2xl">About</h1>
    <p text-3xl>{{ msg }}</p>
    <div>
      state: {{ state }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGlobalState } from '@/stores/global';

const state = useGlobalState();
const msg = ref('hello world!')
</script>
<script lang="ts" setup>
import { useAxios } from '@vueuse/integrations/useAxios'
import { Request } from '@/api/request';
//import axios from 'axios';

Request.init();
const instance = Request.axiosInstance;

console.log(instance);

const { data, isFinished, execute } = useAxios('v1/user', instance)
console.log(data);

</script>

<template>
  <div text="red 3xl" hover:m2>
    <h1 m-10 p-3>Hello World</h1>
    <div i-carbon-sun text-3xl icon-btn/>
    <div i-logos-vue text-2xl m-auto
      animate-bounce-alt animate-count-infinite animate-1s
    />

    <button @click="execute('v1/login', {
      method: 'POST',
      data: {
        user: 'admin',
        psw: 'admin',
      },
    })" btn>execute</button>
    <div>
      <p>isFinished: {{isFinished}}</p>
      <div v-if="isFinished">
        <p>status: {{data.status}}</p>
        <ul text-left>
          <li v-for="(item, index) in data.data.roles" :key="index" flex>
          {{item}}
            <!-- <p>user-{{index}}: </p>
            <p>name: {{item.name}}</p>
            <p>age: {{item.age}}</p>
            <p>role: {{item.role}}</p> -->
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>
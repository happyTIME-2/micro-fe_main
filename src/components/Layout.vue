<template>
  <div v-if="isHome">
    <ul flex>
      <li v-for="(item, index) in apps" :key="index" m-xl>
        <router-link :to="item.activeRule" btn>
          {{item.name}}
          <i i-carbon-arrow-right inline-block align-middle></i>
        </router-link>
      </li>
    </ul>
  </div>
  <t-layout v-else px-xl>
    <t-header>
      <Header :menus="apps"/>
    </t-header>
    <t-content px-2xl border-t-1 border-pink-200>
      <div id="app-vue" py-xl />
      <!-- <div v-show="isHome" text-center>
        <router-view />
      </div> -->
    </t-content>
    <t-footer>
      <Footer />
    </t-footer>
  </t-layout>
</template>

<script lang="ts" setup>
import api from '@/api';

const props = defineProps<{
  apps: Apps.App[]
}>();

const paths = computed(() => {
  if (props.apps.length ===0) return [];
  return props.apps.map(item => item.activeRule);
});

const router = useRouter();

const isHome = ref(false);

// const isHome = computed(() => paths.value.length !== 0 && !paths.value.includes(router.currentRoute.value.path))

watch(() => router.currentRoute.value.path, (val) => {
  console.log(val);
  if (!paths.value.includes(val)) isHome.value = true;
  else isHome.value = false;

  console.log(isHome.value);
});

api();


</script>

<style scoped lang="scss">
.t-layout {
  min-height: 100vh;
  background-color: aliceblue;
}
.t-layout__content {
  background-color: #fff;
}
</style>
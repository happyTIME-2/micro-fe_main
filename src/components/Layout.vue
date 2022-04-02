<template>
  <t-layout px-xl>
    <t-header>
      <Header />
    </t-header>
    <t-content px-2xl border-t-1 border-pink-200>
      <div id="app-vue" py-xl />
      <div v-show="isHome" text-center>
        <router-view />
      </div>
    </t-content>
    <t-footer>
      <Footer />
    </t-footer>
  </t-layout>
</template>

<script lang="ts" setup>
import api from '@/api';
const router = useRouter();

const isHome = computed(() => !['/app-vue2/', '/app-vue/'].includes(router.currentRoute.value.path))

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
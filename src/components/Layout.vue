<template>
  <t-layout p-xl>
    <t-header>
      <Header />
    </t-header>
    <t-content px-2xl border-t-1 border-pink-200>
      <div id="app-vue" py-xl />
      <div v-show="isHome" text-center>this is main app content</div>
    </t-content>
    <t-footer>
      <Footer />
    </t-footer>
  </t-layout>
</template>

<script lang="ts" setup>
const router = useRouter();

const isHome = computed(() => {
  return router.currentRoute.value.path === '/';
});
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
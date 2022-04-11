<template>
  <t-head-menu px-2xl>
    <template #logo>
      <div i-logos-vue text-3xl/>
    </template>
    <!-- <t-menu-item value="item1" @click="go('/app-vue/')">vue3 app</t-menu-item>
    <t-menu-item value="item2" @click="go('/app-vue2/')">vue2 app</t-menu-item> -->
    <template v-if="menus!.length !== 0">
      <t-menu-item
        v-for="(item, index) in menus"
        :key="(item as any).name"
        :value="'item_'+ index"
        @click="go((item as any).activeRule)"
      >
        {{ (item as any).name }}
      </t-menu-item>
    </template>
    <template #operations>
      <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="search" /></a>
      <a href="javascript:;"><t-icon class="t-menu__operations-icon" name="notification-filled" /></a>
      <a href="javascript:;" @click="go('/micro-fe/')"><t-icon class="t-menu__operations-icon" name="home" /></a>
    </template>
  </t-head-menu>
</template>

<script lang="ts" setup>
const router = useRouter();

const go = (url: string) => {
  router.push(url);
};

defineProps({
  menus: Array,
});
</script>

<style scoped lang="scss">

</style>
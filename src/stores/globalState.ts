import { defineStore } from 'pinia'

export const useGlobal = defineStore('useGlobal',  () => {
  const global = reactive({
    count: 0,
    name: '',
  });

  return {
    getCount: () => global.count,
    getName: () => global.name,
    updateState(payload: any) {
      Object.assign(global, payload);
    }
  }
})
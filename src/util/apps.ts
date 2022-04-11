import actions from "@/stores/actions";
import { globalState } from "@/stores/actions";
import { useAxios } from '@vueuse/integrations/useAxios'
// import axios from "axios";
import { Request } from "@/api/request";

console.log(Request.axiosInstance);

const instance = Request.axiosInstance;

const { data, isFinished } = await useAxios('//api.cjit.woa.com/mock/8248/v1/apps', instance, {immediate: true});

const microApps: Apps.App[] = isFinished ? data.value : [];

// const microApps = [
//   {
//     name: 'app vue',
//     entry: '//micro.local/',
//     activeRule: '/app-vue',
//   },
//   {
//     name: 'app vue2',
//     entry: '//micro2.local/',
//     activeRule: '/app-vue2',
//   }
// ];

const apps = microApps.map(app => {
  return {
    ...app,
    container: '#app-vue',
    props: {
      store: globalState,
      routerBase: app.activeRule,
      getGlobalState: actions.getGlobalState,
      setGlobalState: actions.setGlobalState,
    }
  }
})

export { 
  isFinished,
  apps
};
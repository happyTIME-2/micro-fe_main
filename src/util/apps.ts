import actions from "@/stores/actions";
import { globalState } from "@/stores/actions";

const microApps = [
  {
    name: 'app vue',
    entry: '//micro.local/',
    activeRule: '/app-vue',
  },
  {
    name: 'app vue2',
    entry: '//micro2.local/',
    activeRule: '/app-vue2',
  }
];

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

export default apps;
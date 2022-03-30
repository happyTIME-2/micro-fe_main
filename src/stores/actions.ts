import { initGlobalState, MicroAppStateActions } from "qiankun";
// import { global } from "@/stores/globalState";

interface GlobalState extends MicroAppStateActions {
  getGlobalState: (key: string) => any;
}

export const globalState: any = reactive({
  count: 0,
  name: '',
});

const actions = initGlobalState(globalState) as GlobalState;

actions.onGlobalStateChange((state: any, prev: any) => {
  console.log("state changed", JSON.stringify(state), JSON.stringify(prev));

  for (const key in state) {
    globalState[key] = state[key];
  }
});

actions.setGlobalState((state: any) => {
  for (const key in state) {
    globalState[key] = state[key];
  }
  // globalState.updateState(state)
});

actions.getGlobalState = (key: string) => {
  // const getters = `get${key.charAt(0).toUpperCase()}${key.slice(1)}`;
  // return globalState[getters]();

  return globalState[key];
}

export default actions;
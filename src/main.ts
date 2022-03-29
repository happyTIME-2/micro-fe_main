import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'
import TDesign from 'tdesign-vue-next';

import 'tdesign-vue-next/es/style/index.css';
import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const apps:Apps.App[] = [
  {
    name: 'app vue',
    entry: '//micro.local/',
    container: '#app-vue',
    activeRule: '/app-vue',
  },
  {
    name: 'app vue2',
    entry: '//micro2.local/',
    container: '#app-vue',
    activeRule: '/app-vue2',
  }
]

registerMicroApps(apps);

start();

console.log(router)

createApp(App).use(router).use(TDesign).mount('#container')

import App from './App.vue'
import router from './router'
import { registerMicroApps, start } from 'qiankun'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

createApp(App).use(router).mount('#container')

const apps:Apps.App[] = [
  {
    name: 'app vue',
    entry: '//micro.local/',
    container: '#app-vue',
    activeRule: '/app-vue',
  }
]

registerMicroApps(apps);

start();



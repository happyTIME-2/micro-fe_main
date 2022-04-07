import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import { registerMicroApps, start } from 'qiankun';
import TDesign from 'tdesign-vue-next';

import { apps } from '@/util/apps';

// import 'tdesign-vue-next/es/style/index.css';
import '@unocss/reset/tailwind.css';
import './styles/main.css';
import 'uno.css';

createApp(App).use(router)
  .use(createPinia())
  .use(TDesign)
  .mount('#container');

registerMicroApps(apps);

start();

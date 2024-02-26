import { createApp } from "vue"; //導入 createApp 函数
import App from "./App.vue"; //導入 App 组件
import './index.css';
import router from './router';

createApp(App)
  .use(router)
  .mount('#app');

import { createRouter, createWebHistory } from 'vue-router';

import HomePage from '../views/HomePage.vue'; // 引入 HomePage 组件
import CallForSpeakers from '../views/CallForSpeakers.vue'; // 引入 CallForSpeakers 组件
import Transportation from '../views/Transportation.vue'; // 引入 Transportation 组件
import Volunteers from '../views/Volunteers.vue'; // 引入 Volunteers 组件
import Collaborators from '../views/Collaborators.vue'; // 引入 Collaborators 组件

const routes = [
    { path: '/', component: HomePage },
    { path: '/call-for-speakers', component: CallForSpeakers },
    { path: '/transportation', component: Transportation },
    { path: '/volunteers', component: Volunteers },
    { path: '/collaborators', component: Collaborators },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.VITE_BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { left: 0, top: 0 };
        }
    },    
});
  
export default router;
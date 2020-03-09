import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '@/views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'route-Home',
    component: Home
  },
  {
    path: '/artists',
    name: 'route-Artists',
    component: () => import(/* webpackChunkName: "route-Artists" */ '../views/Artists.vue')
  },
  {
    path: '/daily-positive-message',
    name: 'route-DailyPositiveMessage',
    component: () => import(/* webpackChunkName: "route-DailyPositiveMessage" */ '../views/DailyPositiveMessage.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

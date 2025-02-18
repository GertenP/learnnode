import './style.scss';
import { createApp } from 'vue';
import App from './App.vue'

import {createWebHashHistory, createMemoryHistory, createRouter, createWebHistory } from 'vue-router';
import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import Chuck from './pages/Chuck.vue';

const routes = [
  { path: '/', component: ToDo, name:"Todo"},
  { path: '/modals', component: Modals, name:"Modals" },
  { path: '/chuck', component: Chuck, name:"Chuck Norris" },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.use(router);
app.mount('#app');


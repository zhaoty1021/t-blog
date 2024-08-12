import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from './views/Home.vue';
import Search from './views/Search.vue';
import Categories from './views/Categories.vue';
import About from './views/About.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/search', component: Search },
  { path: '/categories', component: Categories },
  { path: '/about', component: About }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Categories from '../views/Categories.vue';
import About from '../views/About.vue';
import Layout from '../components/Layout/index.vue'

const routes :  RouteRecordRaw[]=[
  { 
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Home.vue"),
      },
      {
        path: "/category",
        name: "category",
        component: () => import("@/views/Categories.vue"),
      }
      ]
    }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
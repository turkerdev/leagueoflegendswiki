import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("./views/Home.vue"),
  },
  {
    path: "/champions",
    component: () => import("./views/Champions.vue"),
  },
  {
    path: "/champion/:championid",
    component: () => import("./views/Champion.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;

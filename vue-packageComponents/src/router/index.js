import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/root.vue"),
      children: [
        {
          path: "date-picker",
          name: "date-picker",
          component: () => import("../views/date-picker/index.vue"),
        },
      ],
    },
  ],
});

export default router;

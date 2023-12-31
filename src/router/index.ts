import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("../views/HomeViewNew.vue"),
    },

    {
      path: "/sobre",
      name: "Sobre",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/portifolio",
      name: "Portifolio",
      component: () => import("../views/PortifolioView.vue"),
    },
    {
      path: "/contato",
      name: "Contato",
      component: () => import("../views/ContactView.vue"),
    },
  ],
});

export default router;

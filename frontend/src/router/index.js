import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import Document from "../pages/Document.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/document/:id", component: Document },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

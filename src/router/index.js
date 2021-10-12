import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../views/Register/Register.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login/Login.vue"),
  },
  {
    path: "/reset",
    name: "Reset",
    component: () =>
      import(/* webpackChunkName: "reset" */ "../views/Reset/Reset.vue"),
  },
  {
    path: "/reset/v/:token",
    name: "Reset",
    component: () =>
      import(/* webpackChunkName: "reset-verify" */ "../views/Reset/Reset.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/Dashboard/Dashboard.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

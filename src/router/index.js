import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/index",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "/index",
        component: () => import("../views/Index.vue")
      },
      {
        path: "/classify",
        component: () => import("../views/Classify.vue")
      },
      {
        path: "/cart",
        component: () => import("../views/Cart.vue")
      },
      {
        path: "/mine",
        component: () => import("../views/Mine.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

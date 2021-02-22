import { createRouter, createWebHistory } from "vue-router"
import Layout from "../layout/index.vue"

const routes = [
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: "",
        component: () => import("../pages/Home.vue")
      },
      {
        path: '/about',
        component: () => import("../pages/About.vue")
      }
    ]
  },

]

const constantRoutes = [
  {
    path: "/login",
    component: () => import("../views/login/index.vue"),
    hidden: true
  },
  {
    path: "/register",
    component: () => import("../views/register/index.vue"),
    hidden: true
  },
  {
    path: "/401",
    name: "401",
    component: () => import("../views/401.vue"),
    hidden: true
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/404.vue"),
    hidden: true
  }
]

const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "index",
    children: [
      {
        path: "index",
        name: "Index",
        component: () => import("../views/index/index.vue"),
        meta: {
          title: "首页",
          affix: true
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
      ...routes,
      ...constantRoutes
  ]
})

export default router

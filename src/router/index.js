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

export const constantRoutes = [
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

export const asyncRoutes = [
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
  },
  {
    path: "/lm",
    component: Layout,
    name: "LM",
    meta: {
      title: "组件"
    },
    children: [
      {
        path: "table",
        name: "Table",
        component: () => import("../views/lm/table/index.vue"),
        meta: {
          title: "表格"
        }
      }
    ]
  },
  {
    path: "/error",
    component: Layout,
    redirect: "noRedirect",
    name: "Error",
    meta: {
      title: "错误页"
    },
    children: [
      {
        path: "401",
        name: "Error401",
        component: () => import("../views/401.vue"),
        meta: {
          title: "401"
        }
      },
      {
        path: "404",
        name: "Error404",
        component: () => import("../views/404.vue"),
        meta: {
          title: "404"
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: [
      ...routes,
      // ...constantRoutes,
      ...asyncRoutes
  ]
})

const env = import.meta.env

router.beforeEach((to) => {
  document.title = `${to.meta.title ? to.meta.title + '-' : ''}` + env.VITE_GLOB_TITLE
})

export default router

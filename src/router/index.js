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

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

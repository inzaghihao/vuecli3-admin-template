import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/Layout/index";
import asyncRoutes from './asyncRoutes'
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: '/dashbord',
    children: [
      {
        path: 'dashbord',
        name: 'Dashbord',
        component: () => import('@/views/dashboard'),
        meta: {
          title: '首页',
          icon: 'el-icon-s-data',
          hidden: false,
        },
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import('@/views/Login'),
  },
  {
    path: "*",
    name: "404",
    redirect: '/404',
    component: () => import('@/views/404'),
  },
];
routes[0].children = routes[0].children.concat(asyncRoutes);
const router = new VueRouter({
  mode: "history",
  routes
});

// 导航守卫
router.beforeEach((to, from, next) => {
  // const isLogin = localStorage.token ? true : false;
  let isLogin = true
  if (!isLogin && to.path !== '/login') {
    // 如果未登录
    next('/login')
  } else {
    next()
  }
})
export default router;

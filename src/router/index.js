import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("@/views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/About.vue"),
    },
  ],
});

export default router;

/* 
上面的代码定义了两个路由，一个是 / 路径，一个是 /about 路径，分别对应 Home.vue 和 About.vue 组件。
其中 import('@/views/xxx.vue') 表示引入 src/views 目录下的 Vue 组件。
*/

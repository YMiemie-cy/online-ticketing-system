import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home';
import adminHome from '../pages/adminHome';

let routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'xx电影'
    }

  },
  {
    path: '/adminHome',
    component: adminHome,
    meta: {
      title: '管理后台系统'
    }
  }
]


let router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next()

})

export default router;
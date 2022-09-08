import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/admin/home';
import adminHome from '../pages/admin/adminHome';
import userInfo from '../pages/admin/userInfo';
import filmCenter from '../pages/admin/filmCenter';
import Login from '../pages/login';
import adminIndex from '../pages/admin/index';


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
    path: '/login',
    component: Login,
    meta: {
      title: 'xx电影-用户登录'
    }
  },
  {
    path: '/adminHome',
    component: adminHome,
    meta: {
      title: '管理后台系统'
    },
    children: [{
        path: 'index',
        component: adminIndex,
        meta: {
          title: '管理后台系统'
        }
      },
      {
        path: 'userInfo',
        component: userInfo,
        meta: {
          title: '管理后台系统'
        }
      },
      {
        path: 'filmCenter',
        component: filmCenter,
        meta: {
          title: '管理后台系统'
        }
      }
    ]
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
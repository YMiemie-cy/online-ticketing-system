import Vue from 'vue';

import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Home from '../pages/home';
import adminHome from '../pages/admin/adminHome';
import userInfo from '../pages/admin/userInfo';
import filmCenter from '../pages/admin/filmCenter';
import Login from '../pages/login';
import adminIndex from '../pages/admin/index';
import Index from '../pages/index';
import classification from '../pages/classification';


let routes = [{
    path: '/',
    redirect: '/home/index'
  },

  {
    path: '/home',
    redirect: '/home/index',
    component: Home,
    meta: {
      title: 'xx电影'
    },
    children: [{
        path: 'index',
        component: Index,
        meta: {
          title: 'xx电影'
        },
      },
      {
        path: 'classification',
        component: classification,
        meta: {
          title: '影院热映大片_热映电影票房_高清电影影视大全-xx电影'
        },
      }
    ]

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
import axios from "axios";
import router from "./router.js";

import { Toast } from "vant";
import Vue from "vue";

//设定基础请求地址
axios.defaults.baseURL = "/api";

//添加一个请求的拦截器
axios.interceptors.request.use(
  (config) => {
    //config 含有发出的请求的配置信息  ~~ axios({config})

    //显示loading
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      loadingType: "spinner",
    });

    // 每次都自动携带token，如果还没有token要返回空对象
    // let user = window.localStorage.getItem("user");
    // user = user ? JSON.parse(user) : {};
    // config.headers = { token: user.token };
    // config.headers = { token: "1234567890123456" };
    let user = window.localStorage.getItem("user");
    user = user ? JSON.parse(user) : {};
    // console.log('我是user',user)
    // console.log({ token: user.token })
    // config.headers = {
    //   token: user.token,
    // };
    let headers = {
      "Accept-Language": "en-CN;q=1.0",
      "source_type": "apple-appstore",
      "version_code": "5.4.8",
      "Content-Type": "application/json",
      "push_device_type": "4",
      "Accept": "*/*",
    };
    config.headers = { ...headers, ...config.headers }; //如果不这样写,那么在接口中设置的header都会被覆盖

    return config; // 撒手放出经过配置的请求
  },
  (error) => {
    // 发出了错误的请求，拦截
    return Promise.reject(error);
  }
);

// 添加一个响应的拦截器
axios.interceptors.response.use(
  (response) => {
    //response  ~~ axios请求后的res

    Toast.clear(); //关闭loading

    // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
    //校验返回数据，token过期，路由跳转login,传递当前路由地址
    if (response.data.err == 2) {
      // console.log("2", router);
      Toast({
        message: response.data.msg,
        duration: 1000,
        forbidClick: true,
      });
      // this.$router~~~ new 出来的router实例
      router.replace({
        path: "/login",
        query: {
          redirect: router.currentRoute.fullPath, //传递当前的路由地址给登录，便于登录成功后跳回来
        },
      });
    }

    return response; //奔向组件
  },
  (error) => {
    Toast({
      message: "接口不存在",
      duration: 1000,
      forbidClick: true,
    });
    return Promise.reject(error);
  }
);

Vue.prototype.$axios = axios;
window.axios = axios; //不推荐
export default axios;

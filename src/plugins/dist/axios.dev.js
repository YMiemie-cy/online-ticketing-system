"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _router = _interopRequireDefault(require("./router.js"));

var _vant = require("vant");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//设定基础请求地址
_axios["default"].defaults.baseURL = '/api'; //添加一个请求的拦截器

_axios["default"].interceptors.request.use(function (config) {
  //config 含有发出的请求的配置信息  ~~ axios({config})
  //显示loading
  _vant.Toast.loading({
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
  }); // 每次都自动携带token，如果还没有token要返回空对象
  // let user = window.localStorage.getItem("user");
  // user = user ? JSON.parse(user) : {};
  // config.headers = { token: user.token };
  // config.headers = { token: "1234567890123456" };


  var user = window.localStorage.getItem('user');
  user = user ? JSON.parse(user) : {}; // console.log('我是user',user)
  // console.log({ token: user.token })
  // config.headers = {
  //   token: user.token,
  // };

  var headers = {
    'Accept-Language': 'en-CN;q=1.0',
    source_type: 'apple-appstore',
    version_code: '5.4.8',
    'Content-Type': 'application/json',
    push_device_type: '4',
    Accept: '*/*'
  };
  config.headers = _objectSpread({}, headers, {}, config.headers); //如果不这样写,那么在接口中设置的header都会被覆盖

  return config; // 撒手放出经过配置的请求
}, function (error) {
  // 发出了错误的请求，拦截
  return Promise.reject(error);
}); // 添加一个响应的拦截器


_axios["default"].interceptors.response.use(function (response) {
  //response  ~~ axios请求后的res
  _vant.Toast.clear(); //关闭loading
  // 响应数据回来后，到达目标组件之前，做点事   res.status   res.data.err == 2
  //校验返回数据，token过期，路由跳转login,传递当前路由地址


  if (response.data.err == 2) {
    // console.log("2", router);
    (0, _vant.Toast)({
      message: response.data.msg,
      duration: 1000,
      forbidClick: true
    }); // this.$router~~~ new 出来的router实例

    _router["default"].replace({
      path: '/login',
      query: {
        redirect: _router["default"].currentRoute.fullPath //传递当前的路由地址给登录，便于登录成功后跳回来

      }
    });
  }

  return response; //奔向组件
}, function (error) {
  (0, _vant.Toast)({
    message: '接口不存在',
    duration: 1000,
    forbidClick: true
  });
  return Promise.reject(error);
});

_vue["default"].prototype.$axios = _axios["default"];
window.axios = _axios["default"]; //不推荐

var _default = _axios["default"];
exports["default"] = _default;
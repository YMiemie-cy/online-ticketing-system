import axios from "../plugins/axios";

//登录
export const getLogin = async ({
    username,
    password
  }) =>
  axios.get("/login", {
    params: {
      username,
      password
    }
  });

//注册
export const postReg = async ({
    username,
    password
  }) =>
  axios.post("/reg", {
    username,
    password
  });

//自动登录
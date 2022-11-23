import axios from "../plugins/axios";
import qs from "Qs";

//登录
// export const getLogin = async ({
//     username,
//     password
//   }) =>
//   axios.get("/login?apipost_id=e2c35b", {
//     params: {
//       username,
//       password
//     }
//   });

export const getLogin = async ({ username, password }) =>
  axios({
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify({ username: username, password: password }),
    url: "/login",
  });

//注册
export const postReg = async ({ username, password }) =>
  axios({
    method: "POST",
    headers: { "content-type": "application/x-www-form-urlencoded" },
    data: qs.stringify({ username: username, password: password }),
    url: "/register",
  });

//自动登录

import axios from "../plugins/axios";
import qs from "qs";

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

// 获取用户信息
export const getUserInfo = async (username) =>
  axios.get("user/findAllTickByName", {
    params: { username: username },
  });

// 获取用户列表
export const getUserList = async () => axios.get("user/findAllTick");

// 电影票购买
export const buyMovies = async (username, tickInformation) => {
  let data1 = JSON.stringify({
    username: username,
    tickInformation: [tickInformation],
  });
  console.log("data1", data1);
  return axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    // headers: { "content-type": "application/x-www-form-urlencoded" },
    data: data1,
    url: "/user/ByTick",
  });
};

import axios from "../plugins/axios";

// 获取电影信息列表
export const getMovies = async () => axios.get("movie/findAll");

// 删除电影项
export const delMovies = async (id) =>
  axios.get("movie/deleteById", { params: { id: id } });

// 新增电影项

export const addMovies = async (form) => {
  let data1 = JSON.stringify(form);
  console.log("data1", data1);
  return axios({
    method: "POST",
    headers: { "content-type": "application/json" },
    // headers: { "content-type": "application/x-www-form-urlencoded" },
    data: data1,
    url: "movie/addMovie",
  });
};

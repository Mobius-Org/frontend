import axios from "axios";

export default axios.create({
  baseURL: "https://mobius-stage.herokuapp.com/api/v1",
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

// import axios from "axios";

// const headers = {
//   "Access-Control-Allow-Origin": "*",
// };

// const axiosInstance = axios.create({
//   baseURL: "https://mobius-stage.herokuapp.com/api/v1",
//   headers,
// });

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("mobToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
// export default axiosInstance;

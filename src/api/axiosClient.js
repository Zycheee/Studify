import axios from "axios";

// Axios instance
const axiosClient = axios.create({
  baseURL: "https://localhost:7103/api",
  headers: { "Content-Type": "application/json" }
});

// Request interceptor to attach JWT token if exists
axiosClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default axiosClient;

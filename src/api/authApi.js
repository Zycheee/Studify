import axiosClient from "./axiosClient";

// DTO: { email: string, password: string }
const authApi = {
  logIn: (userLoginDTO) => axiosClient.post("/auth/login", userLoginDTO),
};

export default authApi;

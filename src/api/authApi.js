import axiosClient from "./axiosClient";

// Auth endpoints map to /api/auth/* on the backend (AuthController)
const authApi = {
  // POST /api/auth/login  – DTO: { email, password }
  logIn: (userLoginDTO) => axiosClient.post("/auth/login", userLoginDTO),

  // POST /api/auth/register  – DTO: { firstname, lastname, email, password }
  // Returns ResponseDTO<AuthResponseDTO> with accessToken + refreshToken
  register: (userCreateDTO) => axiosClient.post("/auth/register", userCreateDTO),

  // POST /api/auth/refresh  – DTO: { refreshToken }
  // Used internally by the axiosClient interceptor to silently renew tokens
  refresh: (refreshToken) => axiosClient.post("/auth/refresh", { refreshToken }),

  // POST /api/auth/logout  – requires Authorization header (handled by interceptor)
  logOut: () => axiosClient.post("/auth/logout"),
};

export default authApi;

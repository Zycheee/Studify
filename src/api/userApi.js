import axiosClient from "./axiosClient";

// User endpoints map to /api/users/* on the backend (UsersController)
const userApi = {
  // POST /api/users  – DTO: { firstname, lastname, email, password }
  // Note: prefer authApi.register() which auto-issues tokens after signup.
  // This endpoint is kept for direct user creation if needed.
  signUp: (userCreateDTO) => axiosClient.post("/users", userCreateDTO),

  // GET /api/users/me  – returns the logged-in user's profile
  getProfile: () => axiosClient.get("/users/me"),

  // PATCH /api/users/me  – DTO: { firstname?, lastname?, password? }
  updateProfile: (userPatchData) => axiosClient.patch("/users/me", userPatchData),

  // DELETE /api/users/me  – permanently deletes the logged-in user's account
  deleteAccount: () => axiosClient.delete("/users/me"),

  // GET /api/users/{email}  – find a user by email (e.g. for friend search)
  getUserByEmail: (email) => axiosClient.get(`/users/${email}`),
};

export default userApi;

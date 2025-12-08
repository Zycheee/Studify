import axiosClient from "./axiosClient";

const userApi = {
    // DTO: { firstname: string, lastname: string, email: string, password: string }
    signUp: (userCreateDTO) => axiosClient.post("/users", userCreateDTO),
    getProfile: () => axiosClient.get(`/users/me`), 
    // DTO: { firstname?: string, lastname?: string, password?: string }
    updateProfile: (userPatchData) => axiosClient.patch(`/users/me`, userPatchData),

    // Should remove the token from local storage on the client side as well
    logOut: () => axiosClient.post(`/users/me/logout`),
    deleteAccount: () => axiosClient.delete(`/users/me`)
};

export default userApi;

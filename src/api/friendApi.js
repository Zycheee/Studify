import axiosClient from "./axiosClient";

const friendApi = {

    // Get all user's friends
    getAllFriends: () => axiosClient.get("/friends/me"),

    // Unfriend friend
    deleteFriend: (friendId) => axiosClient.delete(`/friends/${friendId}`)

}

export default friendApi;
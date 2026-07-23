import axiosClient from "./axiosClient";

const friendRequestApi = {
    // Get all received requests
    getAllReceivedRequests: () => axiosClient.get("/friendrequests/received/me"), 
    
    // Get all sent friend requests
    getAllSentRequests: () => axiosClient.get("/friendrequests/sent/me"),
    
    // Sent friend request using email 
    // DTO: {email: string}
    sendRequest: (sendRequestDTO) => axiosClient.post("/friendrequests", sendRequestDTO),

    // Accept received request
    acceptRequest: (requestId) => axiosClient.post(`/friendrequests/${requestId}/accept`), 

    // Reject received request
    rejectRequest: (requestId) => axiosClient.delete(`/friendrequests/${requestId}/reject`),
    
    // Cancel sent request
    cacelRequest: (requestId) => axiosClient.delete(`/friendrequests/${requestId}/cancel`)
}

export default friendRequestApi;
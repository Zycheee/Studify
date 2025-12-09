  import React, { useEffect, useState } from "react";
  import UserOverview from "./components/UserOverview";
  import UserRequest from "./components/UserRequest";
  import SearchFriends from "./components/SearchFriends";
  import friendRequestApi from "../../api/friendRequestApi";
  import friendApi from "../../api/friendApi";

  export default function Friendspage() {
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);

    // -----------------------------
    // LOAD RECEIVED REQUESTS (on mount)
    // -----------------------------
    const loadRequests = async () => {
      try {
        const res = await friendRequestApi.getAllReceivedRequests();

        if (res.data.success) {
          setRequests(res.data.data); // list of FriendRequestReadDTO
        }
      } catch (err) {
        console.error("Failed to load friend requests:", err);
      }
    };

    const loadFriends = async () => {
      try {
        const res = await friendApi.getAllFriends();

        if (res.data.success) {
          setFriends(res.data.data);
        }
      } catch (err) {
        console.log("Error loading friends:", err);
      }
    };

    useEffect(() => {
      loadRequests();
      loadFriends();
    }, []);

    // -----------------------------
    // HANDLE ACCEPT
    // -----------------------------
    const handleAccept = async (req) => {
      try {
        const res = await friendRequestApi.acceptRequest(req.id);

        if (res.data.success) {
          // Reload state
          loadRequests();
          loadFriends();
        }
      } catch (err) {
        console.log(err);
      }
    };

    // -----------------------------
    // HANDLE DECLINE
    // -----------------------------
    const handleDecline = async (req) => {
      try {
        await friendRequestApi.rejectRequest(req.id);
        loadRequests();
      } catch (err) {
        console.log(err);
      }
    };

    // -----------------------------
    // AFTER SENDING REQUEST
    // -----------------------------
    const handleSendRequest = () => {
      loadRequests(); // reload pending requests after sending
    };

    // Handle unfriend
    const handleUnfriend = async (friend) => {
      try {
        const res = await friendApi.deleteFriend(friend.friendId); // send friendId
        if (res.data.success) {
          setFriends(prev => prev.filter(f => f.friendId !== friend.friendId));
        } else {
          console.log(res.data.message || "Failed to unfriend");
        }
      } catch (err) {
        console.log("Unfriend error:", err);
      }
    };

    return (
      <div className="p-5 font-sans">
        {/* Add Friend */}
        <SearchFriends onAddFriend={handleSendRequest} />

        <div className="flex flex-col lg:flex-row justify-evenly gap-10 pt-10">
          <div>
            <h1 className="font-bold text-[30px]">Your Friends</h1>
            <UserOverview friends={friends} onUnfriend={handleUnfriend}/>
          </div>

          <div>
            <h1 className="font-bold text-[30px]">Friend Requests</h1>
            <UserRequest
              requests={requests}
              onAccept={handleAccept}
              onDecline={handleDecline}
            />
          </div>
        </div>
      </div>
    );
  }

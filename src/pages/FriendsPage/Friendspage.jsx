import React, { useState } from "react";
import UserOverview from "./components/UserOverview";
import UserRequest from "./components/UserRequest";
import SearchFriends from "./components/SearchFriends";

export default function Friendspage() {
  const [friends, setFriends] = useState([]); // accepted friends
  const [requests, setRequests] = useState([]); // pending requests

  // Send friend request
  const handleSendRequest = (user) => {
    if (!requests.some((r) => r.email === user.email)) {
      setRequests((prev) => [...prev, user]);
    }
  };

  // Accept user -> move to friends
  const handleAccept = (user) => {
    setFriends((prev) => [...prev, user]);
    setRequests((prev) => prev.filter((u) => u.email !== user.email));
  };

  // Decline user -> remove request
  const handleDecline = (user) => {
    setRequests((prev) => prev.filter((u) => u.email !== user.email));
  };

  return (
    <div className="p-5 font-sans">
      {/* Add Friend by Email */}
      <SearchFriends onAddFriend={handleSendRequest} />

      <div className="flex flex-col lg:flex-row justify-evenly gap-10 pt-10">
        <div>
          <h1 className="font-bold text-[30px]">Your Friends</h1>
          <UserOverview friends={friends} />
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

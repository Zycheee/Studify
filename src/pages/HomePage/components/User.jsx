import React, { useEffect, useState } from "react";
import friendApi from "../../../api/friendApi";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const UserFriends = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await friendApi.getAllFriends(); // fetch friends from backend
        if (res.data.success && Array.isArray(res.data.data)) {
          setFriends(res.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch friends:", err);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {friends.length === 0 && (
        <p className="text-gray-500 text-sm">No friends yet.</p>
      )}

      {friends.map((f) => (
        <div
          key={f.FriendId} // unique key from backend
          className="flex items-center gap-2 p-2 rounded-[10px] hover:bg-gray-100"
        >
          {/* No Gender info, use default icon */}
          <img
            src={MaleIcon} // fallback icon
            className="w-12 h-12 rounded-full"
            alt={`${f.firstname} ${f.lastname}`}
          />
          <span>{f.firstname} {f.lastname}</span>
        </div>
      ))}
    </div>
  );
};

export default UserFriends;

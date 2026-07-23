import React, { useEffect, useState } from "react";
import friendApi from "../../../api/friendApi";
import User from "./User";

const Friendbar = () => {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const res = await friendApi.getAllFriends();
        if (res.data.success && res.data.data) {
          setFriends(res.data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };

    // Initial fetch
    fetchFriends();

    // Poll every 5 seconds for real-time status updates
    const intervalId = setInterval(fetchFriends, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="pt-1 pl-16 text-left">
      <div className="friendbar ">
        <h1 className="text-[25px] font-semibold">Friends</h1>
        <User friends={friends} /> {/* pass friends to User */}
      </div>
    </div>
  );
};

export default Friendbar;

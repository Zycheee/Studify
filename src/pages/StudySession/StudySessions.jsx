import React from "react";
import Sessions from "../StudySession/components/Sessions.jsx";
import FriendBar from "../HomePage/components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";
const StudySessions = () => {
  return (
    <div className="gap-4 p-4">
      <h1 className="text-3xl font-bold mb-4">Study Sessions</h1>
      <p className="text-gray-600">Manage your study sessions here.</p>
      <div className="flex gap-4">
        <div className="">
          <Sessions />
        </div>
        <div>
          <div>
            <Streak />
          </div>
          <div>
            <FriendBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessions;

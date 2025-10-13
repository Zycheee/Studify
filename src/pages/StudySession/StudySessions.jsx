import React from "react";
import Sessions from "../StudySession/components/Sessions.jsx";
import FriendBar from "../HomePage/components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";
const StudySessions = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between w-full min-h-screen p-5">
      <div className="flex-1 lg:flex justify-center items-center">
        <Sessions />
        <div className="flex flex-col pl-10 flex-center lg:space-x-0 space-x-20 ">
          <Streak />
          <div className="lg:mr-0  mr-30">
            <FriendBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessions;

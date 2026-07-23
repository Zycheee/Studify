import React, { useState } from "react";
import Sessions from "../StudySession/components/Sessions.jsx";
import FriendBar from "../HomePage/components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";
import Task from "../StudySession/components/Task.jsx";

const StudySessions = () => {
  const [activeMode, setActiveMode] = useState("pomodoro"); // mode shared

  return (
    <div className=" flex flex-col lg:flex-row justify-between w-full min-h-screen p-5 animate-fadeIn font-sans">
      <div className="flex-1 flex-col lg:flex justify-center items-center">
        {/* Send setter to Sessions */}
        <Sessions onModeChange={(mode) => setActiveMode(mode)} />

        {/* Pass mode to Task */}
        <div className="mt-10 w-full flex justify-center">
          <Task activeMode={activeMode} />
        </div>
      </div>

      <div>
        <div className="flex flex-col pl-10">
          <Streak />
          <div className="mt-5">
            <FriendBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudySessions;

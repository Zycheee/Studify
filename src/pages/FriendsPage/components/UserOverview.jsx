import React, { useEffect, useState } from "react";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const UserOverview = () => {
  const userInfo = [
    {
      name: "Haggai Estavilla",
      subject: "Biology",
      status: "online",
      estimatedTime: "24:32",
      icon: FemaleIcon,
    },
    {
      name: "Christian Kyle Ducay",
      subject: "Programming",
      status: "online",
      estimatedTime: "2:42:40",
      icon: MaleIcon,
    },
    {
      name: "Jhon Rosell Talisic",
      subject: "Database System",
      status: "online",
      estimatedTime: "107:00:26",
      icon: FemaleIcon,
    },
    {
      name: "Aaron Bigno Idol",
      subject: "Haggai Estavilla",
      status: "online",
      estimatedTime: "24:42:47",
      icon: MaleIcon,
    },
  ];

  // Convert HH:MM:SS or MM:SS to total seconds
  const parseTime = (timeString) => {
    const parts = timeString.split(":").map(Number);
    if (parts.length === 2) {
      // MM:SS format
      return parts[0] * 60 + parts[1];
    } else if (parts.length === 3) {
      // HH:MM:SS format
      return parts[0] * 3600 + parts[1] * 60 + parts[2];
    }
    return 0;
  };

  // Initial state for each user timer
  const [timers, setTimers] = useState(
    userInfo.map((user) => parseTime(user.estimatedTime))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTimers(
        (prevTimers) => prevTimers.map((time) => time + 1) // increment instead of decrement
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  // Update each timer every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Convert seconds to HH:MM:SS or MM:SS if under 1 hour
  const formatTime = (seconds) => {
    if (seconds < 3600) {
      // Show only MM:SS if under 1 hour
      const m = String(Math.floor(seconds / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      return `${m}:${s}`;
    } else {
      // Otherwise show HH:MM:SS
      const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
      const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
      const s = String(seconds % 60).padStart(2, "0");
      return `${h}:${m}:${s}`;
    }
  };

  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {userInfo
        .filter((person) => person.status === "online")
        .map((person, index) => (
          <button
            key={person.name}
            className="flex items-start gap-2 p-2 rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100 lg:min-w-120 md:min-w-100 sm:min-w-70 "
          >
            <img
              src={person.icon}
              className="w-15 h-15 rounded-full"
              alt="User"
            />
            <div className="flex flex-row lg:flex-col flex-wrap items-start">
              <span className="font-semibold text-[25px]  text-wrap">
                {person.name}
              </span>
              <span className="font-normal pb-1 text-gray-500">
                Studying {person.subject} -{" "}
                <span className="font-semibold text-[15px]">
                  {formatTime(timers[index])}
                </span>
              </span>
            </div>
            <div className="ml-auto">
              <button className="border-2 border-gray-500 rounded-[10px] p-4 hover:shadow-2xl  hover:bg-[#e4e4e4] lg:flex-row ">
                View Profile
              </button>
            </div>
          </button>
        ))}
    </div>
  );
};

export default UserOverview;

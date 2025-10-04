import React, { useEffect, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

const Sessions = () => {
  const category = [
    { id: 1, title: "Math" },
    { id: 2, title: "Science" },
    { id: 3, title: "History" },
  ];

  // Track active timer (only one at a time)
  const [activeId, setActiveId] = useState(null);

  // Track each category’s time (in seconds)
  const [times, setTimes] = useState(
    category.reduce((acc, cat) => {
      acc[cat.id] = 0;
      return acc;
    }, {})
  );

  // useEffect to run timer only for the active category
  useEffect(() => {
    let interval = null;

    if (activeId !== null) {
      interval = setInterval(() => {
        setTimes((prevTimes) => ({
          ...prevTimes,
          [activeId]: prevTimes[activeId] + 1,
        }));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [activeId]);

  // Convert seconds → HH:MM:SS
  const formatTime = (totalSeconds) => {
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(
      2,
      "0"
    );
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  // Handle play/pause click
  const handleToggle = (id) => {
    if (activeId === id) {
      // If same timer clicked → pause it
      setActiveId(null);
    } else {
      // If another timer clicked → stop others, start this one
      setActiveId(id);
    }
  };

  return (
    <div className="p-4 flex flex-row flex-wrap content-between gap-5">
      {category.map((cat) => (
        <div
          key={cat.id}
          className="mt-6 w-100 bg-[#3A7BCE] rounded-[50px] pb-5 pt-10 text-[#e5f1fd] hover:scale-102 ease-out duration-200"
        >
          <span className="flex justify-center text-[40px] font-sans font-bold pb-5">
            {cat.title}
          </span>

          {/* 🕒 Timer display */}
          <span className="flex justify-center text-[40px] font-sans font-bold pb-5">
            {formatTime(times[cat.id])}
          </span>

          <div className="flex justify-center pt-5">
            <div className="flex align-middle justify-center pb-5 h-30 w-30 bg-[#062a58] rounded-full">
              <button
                onClick={() => handleToggle(cat.id)}
                className="text-[70px] text-[#e5f1fd]"
              >
                {activeId === cat.id ? (
                  <PauseRoundedIcon
                    fontSize="inherit"
                    className="transition-transform ease-in-out duration-200"
                  />
                ) : (
                  <PlayArrowRoundedIcon fontSize="inherit" />
                )}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sessions;

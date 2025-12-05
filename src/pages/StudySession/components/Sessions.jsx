import React, { useEffect, useState } from "react";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import PauseRoundedIcon from "@mui/icons-material/PauseRounded";

const MODES = {
  pomodoro: 1500,
  short: 300,
  long: 900,
};

const modeType = [
  { id: "pomodoro", label: "Pomodoro", shortphrase: "Shhhhhhh......." },
  { id: "short", label: "Short Break", shortphrase: "Take a short break!" },
  {
    id: "long",
    label: "Long Break",
    shortphrase: "Enjoy it, you deserved it!",
  },
];

// THEME COLORS FOR EACH MODE
const modeStyles = {
  pomodoro: {
    // MAIN BG
    playingContainer: "bg-[#2E64A8] text-[#D8EAFF]",
    pausedContainer: "bg-[#3A7BCE] text-[#D8EAFF]",

    // TOP BUTTON BAR
    topBar: "bg-[#214886]",

    // MODE BUTTON COLORS
    activeButton: "bg-[#17335E]",
    inactiveHover: "hover:bg-[#112f61] text-[#e5f1fd]",

    // START / PAUSE BUTTON
    startButton: "bg-[#234269]",
    pauseButton: "bg-[#284A77]",
  },

  short: {
    playingContainer: "bg-[#4FB879] text-[#CDF3D5]",
    pausedContainer: "bg-[#5FCE8D] text-[#CDF3D5]",

    topBar: "bg-[#359148]",
    activeButton: "bg-[#4DA45F]",
    inactiveHover: "hover:bg-[#5dc772]",

    startButton: "bg-[#306747]",
    pauseButton: "bg-[#367550]",
  },

  long: {
    playingContainer: "bg-[#B7A854] text-[#F9ECA0]",
    pausedContainer: "bg-[#CEBD5F] text-[#F9ECA0]",

    topBar: "bg-[#8B7D32]",
    activeButton: "bg-[#7A6829]",
    inactiveHover: "hover:bg-[#9c8e3d]",

    startButton: "bg-[#675F30]",
    pauseButton: "bg-[#756B36]",
  },
};

const Sessions = ({ onModeChange }) => {
  const [activeMode, setActiveMode] = useState("pomodoro");
  const [timeLeft, setTimeLeft] = useState(MODES.pomodoro);
  const [activeId, setActiveId] = useState(null);

  const switchMode = (mode) => {
    setActiveMode(mode);
    setTimeLeft(MODES[mode]);
    setActiveId(null);

    // 🔥 Notify parent
    if (onModeChange) onModeChange(mode);
  };

  // TIMER EFFECT
  useEffect(() => {
    let interval = null;
    if (activeId !== null) {
      interval = setInterval(() => {
        setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [activeId]);

  const formatTime = (totalSeconds) => {
    const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleToggle = () => {
    setActiveId((prev) => (prev ? null : 1));
  };

  return (
    <div
      className={`font-sans w-full flex flex-col justify-center items-center rounded-[30px] p-5 transition-all duration-300 
      ${
        activeId
          ? modeStyles[activeMode].playingContainer
          : modeStyles[activeMode].pausedContainer
      }
    `}
    >
      {/* TOP MODE BUTTONS */}
      <div
        className={`flex justify-center rounded-[10px] h-12 items-center mb-5 text-xl font-semibold w-full ${modeStyles[activeMode].topBar}`}
      >
        {modeType.map((btn, index) => {
          let roundedClass = "";
          if (index === 0) roundedClass = "rounded-l-[10px]";
          if (index === modeType.length - 1) roundedClass = "rounded-r-[10px]";

          return (
            <button
              key={btn.id}
              onClick={() => switchMode(btn.id)}
              className={`flex-1 h-full transition-all duration-200 cursor-pointer ${roundedClass} 
                ${
                  activeMode === btn.id
                    ? modeStyles[activeMode].activeButton
                    : `${modeStyles[activeMode].inactiveHover}`
                }`}
            >
              {btn.label}
            </button>
          );
        })}
      </div>

      {/* TIMER DISPLAY */}
      <span className="flex justify-center text-[100px] font-bold pb-5">
        {formatTime(timeLeft)}
      </span>

      {/* SHORT PHRASE */}
      <span className="flex justify-center animate-pulse text-[20px]">
        {modeType.find((m) => m.id === activeMode).shortphrase}
      </span>

      {/* PLAY / PAUSE BUTTON */}
      <div className="pt-5">
        <div
          onClick={handleToggle}
          className={`flex justify-center items-center hover:scale-110 transition-all w-full px-20 duration-200 pb-5 cursor-pointer pt-2 text-[40px] font-semibold rounded-2xl 
            ${
              activeId
                ? modeStyles[activeMode].pauseButton
                : modeStyles[activeMode].startButton
            }
          `}
        >
          {activeId ? "Pause" : "Start"}
        </div>
      </div>
    </div>
  );
};

export default Sessions;

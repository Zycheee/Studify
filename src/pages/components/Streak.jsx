import React from "react";
import FireStreakIcon from "/fire-joypixels.gif";
import { useStreak } from "../../context/StreakContext.jsx";

const Streak = () => {
  const { streakData } = useStreak();
  const streakDays = streakData.streakDays;

  const fireFilter = {
    filter: streakDays < 3? "grayscale(100%) brightness(70%)" : "none",
    transition: "filter 0.3s ease-in-out",
    width: "100px",
    height: "100px",
  }

  return (
    <div className="flex justify-center p-5 w-full mt-2 font-sans hover:scale-105 transition-all ease-in-out duration-200">
      <div className="flex flex-col items-center gap-3">
        <img src={FireStreakIcon} alt="Fire Streak" className="h-25 w-25" style={fireFilter} />
        <span className="font-semibold text-6xl pl-3">{streakData.streakDays}</span>
        <span className="font-semibold text-2xl pl-5 ">Day streak</span>
      </div>
    </div>
  );
};

export default Streak;

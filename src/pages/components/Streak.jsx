import React from "react";
import FireStreakIcon from "/fire-joypixels.gif";
import { useStreak } from "../../context/StreakContext.jsx";

const Streak = () => {
  const { streakData } = useStreak();
  const streakDays = streakData.streakDays;

  return (
    <div className="flex justify-center p-5 w-full mt-2 font-sans hover:scale-105 transition-all ease-in-out duration-200">
      <div className="flex flex-col items-center gap-3">
        <img
          src={FireStreakIcon}
          alt="Fire Streak"
          className="w-[100px] h-[100px]"
        />
        <span className="font-semibold text-6xl pl-3">{streakDays}</span>
        <span className="font-semibold text-2xl pl-5">Day streak</span>
      </div>
    </div>
  );
};

export default Streak;

import React from "react";
import FireStreakIcon from "/fire-joypixels.gif";

const Streak = () => {
  const streak = [{ name: "Haggai Estavilla", streakDays: 69 }];

  return (
    <div className="flex justify-center w-100 mt-2 font-sans">
      {streak.map((person, index) => (
        <div key={index} className="flex flex-col items-center ">
          <img src={FireStreakIcon} alt="Fire Streak" className="h-25 w-25" />
          <span className="font-semibold text-[60px] pl-2">
            {person.streakDays}
          </span>
          <span className="font-semibold text-[30px] pl-5">Days streak</span>
        </div>
      ))}
    </div>
  );
};

export default Streak;

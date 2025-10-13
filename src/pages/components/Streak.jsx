import React from "react";
import FireStreakIcon from "/fire-joypixels.gif";

const Streak = () => {
  const streak = [{ name: "Haggai Estavilla", streakDays: 69 }];

  return (
    <div className="flex justify-center p-5 w-full mt-2 font-sans hover:scale-108 t transition-all ease-in-out delay-100">
      {streak.map((person, index) => (
        <div key={index} className="flex flex-col items-center gap-3">
          <img
            src={FireStreakIcon}
            alt="Fire Streak"
            className="flexh-25 w-25 "
          />
          <span className="font-semibold text-6xl pl-3">
            {person.streakDays}
          </span>
          <span className="font-semibold text-2xl pl-5 ">Day streak</span>
        </div>
      ))}
    </div>
  );
};

export default Streak;

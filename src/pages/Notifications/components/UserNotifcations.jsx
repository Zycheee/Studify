import React from "react";
import FemaleIcon from "/woman-user-circle-icon.svg";
import MaleIcon from "/man-user-circle-icon.svg";

const UserNotifications = () => {
  const userInfo = [
    {
      name: "Jerhon Gabutan",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "23 hours",
    },
    {
      name: "Clark Daot",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "8/16/25",
    },
    {
      name: "Haggai P. Estavilla",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "3 hours",
    },
    {
      name: "Aaron Bigno Idol",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "5 minutes",
    },
    {
      name: "Jhon Rosell Talisic",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "23 hours",
    },
    {
      name: "Clark Daot",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "8/16/25",
    },
    {
      name: "Haggai P. Estavilla",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "3 hours",
    },
    {
      name: "Aaron Bigno Idol",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "5 minutes",
    },
    {
      name: "Haggai P. Estavilla",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "3 hours",
    },
    {
      name: "Aaron Bigno Idol",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "5 minutes",
    },
    {
      name: "Jhon Rosell Talisic",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "23 hours",
    },
    {
      name: "Clark Daot",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "8/16/25",
    },
    {
      name: "Jhon Rosell Talisic",
      statusPost: "just finished studying!",
      icon: FemaleIcon,
      statusPosted: "23 hours",
    },
    {
      name: "Clark Daot",
      statusPost: "just started studying!",
      icon: MaleIcon,
      statusPosted: "8/16/25",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-1 ">
      {userInfo.map((person) => (
        <div className="flex flex-row flex-center gap-2 p-4 rounded-[20px] hover:bg-gray-100 hover:shadow-xl transition-all ease-in-out delay-25">
          <img
            src={person.icon}
            className="w-15 h-15  shadow-xl rounded-full border-2 border-gray-300 hover:scale-107 cursor-pointer transition-all ease-in-out delay-25"
          />
          <div className="w-full text-gray-700">
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold text-wrap hover:underline cursor-pointer">
                {person.name}
              </p>
              <span className="text-lg font-regular">{person.statusPost}</span>
            </div>
            <p className="text-md text-gray-500 opacity-85">
              {person.statusPosted} ago
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserNotifications;

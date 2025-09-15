import React from "react";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const User = () => {
  const userInfo = [
    {
      name: "Haggai Estavilla",
      subject: "Biology",
      status: "online",
      estimatedTime: "24:00",
      icon: FemaleIcon,
    },
    {
      name: "Christian Kyle Ducay",
      subject: "Programming",
      status: "online",
      estimatedTime: "2:42:00",
      icon: MaleIcon,
    },
    {
      name: "Jhon Rosell Talisic",
      subject: "Database System",
      status: "online",
      estimatedTime: "107:00:00",
      icon: FemaleIcon,
    },
    {
      name: "Aaron Bigno Idol",
      subject: "Haggai Estavilla",
      status: "online",
      estimatedTime: "24:42:00",
      icon: MaleIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-2">
      {userInfo
        .filter((person) => person.status === "online")
        .map((person) => (
          <button
            key={person.name}
            className=" sticky top-0 flex items-center gap-2 p-2 rounded-[15px] hover:bg-gray-200 duration-300 ease-out cursor-pointer"
          >
            <img
              src={person.icon}
              className="w-15 h-15 rounded-full"
              alt="User"
            />
            <div className="flex flex-col items-start">
              <span className="font-semibold text-[25px]">{person.name}</span>
              <span className="font-normal pb-1 text-gray-500">
                {/* subject*/}
                Studying {person.subject} -
                <span className="font-semibold text-[15px]">
                  {/* estimated time*/}
                  {person.estimatedTime}
                </span>
              </span>
            </div>
          </button>
        ))}
    </div>
  );
};

export default User;

import React from "react";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const UserRequest = () => {
  const userInfo = [
    {
      name: "Jerhon Gabutan",
      status: "online",
      icon: FemaleIcon,
    },
    {
      name: "Clark Daot",
      status: "online",
      icon: MaleIcon,
    },
    {
      name: "Haggai Estavilla",
      status: "online",
      icon: FemaleIcon,
    },
    {
      name: "Aaron Bigno Idol",
      status: "online",
      icon: MaleIcon,
    },
  ];

  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {userInfo.map((person, index) => (
        <button
          key={person.name}
          className="flex items-start gap-2 p-3 full rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100 "
        >
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center xl:items-start gap-5 lg:items-center ">
            <img
              src={person.icon}
              className="w-15 h-15 shadow-xl rounded-full border-2 border-gray-300 cursor-pointer transition-all ease-in-out delay-25"
              alt="User"
            />
            <div className="grid grid-cols-1">
              <div className="flex flex-col  items-start">
                <span className="font-semibold text-[25px] text-wrap">
                  {person.name}
                </span>

                <span className="font-normal text-[15px] text-wrap text-gray-500">
                  wants to be friends with you
                </span>
              </div>
            </div>
            <div className="flex gap-x-2">
              <button className="button-blue "> Accept</button>
              <button className="button-red">Decline</button>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default UserRequest;

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
      name: "Haggaigaigaigai",
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
    <div>
      <div className="flex flex-col gap-2 mt-3 ">
        {userInfo.map((person, index) => (
          <button
            key={person.name}
            className="flex items-start gap-2 p-2 rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100 w-full"
          >
            <img
              src={person.icon}
              className="w-15 h-15 rounded-full"
              alt="User"
            />
            <div className="flex flex-col flex-1">
              <div className="flex justify-between items-start w-full gap-4">
                <div className="flex flex-col items-start">
                  <span className="font-semibold text-[25px]">
                    {person.name}
                  </span>
                  <span className="font-normal text-gray-500">
                    wants to be friends with you
                  </span>
                </div>

                <div className="flex gap-3">
                  <button className="button-blue ">Accept</button>
                  <button className="button-red">Decline</button>
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default UserRequest;

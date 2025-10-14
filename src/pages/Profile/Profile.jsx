import React from "react";
import FemaleIcon from "/woman-user-circle-icon.svg";
import Streak from "../components/Streak";
const Profile = () => {
  const userInfo = { name: "Haggai Estavilla", friends: 4, streak: 5 };

  return (
    <div className=" flex flex-col growflex-center p-20 mt-10">
      <div className="">
        <div
          className=" p-5 h-full  grow md:gap-6  rounded-[10px] backdrop-blur-lg bg-[#b0caee]/20 border-white/30 shadow-lg
              transition-all duration-300"
        >
          <div className="flex flex-col gap-10">
            <div className="flex flex-row gap-5 items-center  w-full">
              <div className="flex flex-row items-center justify-between w-full">
                {/* Left side — avatar + name */}
                <div className="flex flex-col lg:flex-row items-center gap-5">
                  <img src={FemaleIcon} alt="icon" className="w-25" />
                  <div className="flex flex-col">
                    <span className="font-semibold text-[25px] ">
                      {userInfo.name}
                    </span>
                    <span className="text-gray-600 text-[15px]">Student</span>
                  </div>
                </div>

                {/* Right side — friends */}
                <div className="flex flex-col items-center mt-27  lg:mt-10">
                  <span className="font-semibold text-[25px]">Friends</span>
                  <span className="font-semibold text-[25px]">
                    {userInfo.friends}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row   gap-10">
              <div
                className="p-5 h-full w-full   d:gap-6  rounded-[10px] border-2 font-sans 
              backdrop-blur-lg bg-[#417ecf]/20 border-r border-[#91bcf5]/20 shadow-lg
              transition-all duration-300"
              >
                <Streak />
              </div>
              <div
                className=" p-5 h-full w-full md:gap-  rounded-[10px] border-2 font-sans 
              backdrop-blur-lg bg-[#417ecf]/20 border-r border-[#91bcf5]/20 shadow-lg
              transition-all duration-300"
              >
                pet ni
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

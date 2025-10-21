import React, { useState, useEffect } from "react";
import FemaleIcon from "/woman-user-circle-icon.svg";
import Streak from "../components/Streak";

const Profile = () => {
  const userInfo = { name: "Haggai Estavilla", friends: 4, streak: 5 };

const [selectedPet, setSelectedPet] = useState(null);
const [petName, setPetName] = useState(null);

  // Load selected pet data from localStorage
  useEffect(() => {
    const savedPet = localStorage.getItem("selectedPet");
    const savedName = localStorage.getItem("petName");
    if (savedPet) setSelectedPet(savedPet);
    if (savedName) setPetName(savedName);
  }, []);

  // Pet images 
  const pets = [
    { name: "Puppy", src: "/Public/Dog/Puppy-Happy.gif" },
    { name: "Chick", src: "/Public/Bird/Baby Chick.gif" },
    { name: "Fish", src: "/Public/Fish/Fish.gif" },
  ];

  const chosenPet = pets.find((p) => p.name === selectedPet);


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
                className="p-5 h-full w-full rounded-[10px] border-2 font-sans 
                backdrop-blur-lg bg-[#fafafaff] border-r border-[#91bcf5]/20 shadow-lg
                transition-all duration-300 flex flex-col items-center justify-center text-center"
              >
                {selectedPet ? (
                  <>
                    <p className="text-[30px] font-bold mb-2">{petName}</p>
                    <img
                      src={chosenPet?.src}
                      alt={selectedPet}
                      className="w-[220px] rounded-[10px]"
                    />
                    <p className="text-[22px] font-semibold mt-2">
                      {selectedPet}
                    </p>
                  </>
                ) : (
                  <p className="text-[20px] text-gray-600">
                    No pet chosen yet 🐾
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

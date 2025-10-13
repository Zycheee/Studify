import React, { useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Usericon from "/man-user-circle-icon.svg"; // correct path
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import NotificationsActiveRoundedIcon from "@mui/icons-material/NotificationsActiveRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null); // default active button

  const buttons = [
    { name: "Home", icon: <HomeIcon fontSize="large" />, path: "/home" },
    {
      name: "Study Session",
      icon: <AutoStoriesRoundedIcon fontSize="large" />,
      path: "/studysession",
    },
    {
      name: "Friends",
      icon: <PeopleAltRoundedIcon fontSize="large" />,
      path: "/friends",
    },
    { name: "Pet", icon: <PetsRoundedIcon fontSize="large" />, path: "/pet" },
    {
      name: "Notifications",
      icon: <NotificationsActiveRoundedIcon fontSize="large" />,
      path: "/notifications",
    },
    {
      name: "Profile",
      icon: <PersonRoundedIcon fontSize="large" />,
      path: "/profile",
    },
  ];
  const navigate = useNavigate();

  return (
    <div
      className={`SideBar ${isOpen ? "flex justify-start w-[115px]" : "w-80"}`}
    >
      <div className="column">
        <img
          src={Usericon}
          alt="User icon"
          className="Icon transition-opacity duration-150 whitespace-nowrap 
        "
        />
        <button className="flex flex-center gap-2">
          {!isOpen && (
            <span
              className={`transition-opacity text-xl font-bold duration-150 whitespace-nowrap 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
            >
              Haggai Estavilla
            </span>
          )}
        </button>
        <button className=" " onClick={() => setIsOpen(!isOpen)}>
          <ArrowBackIosIcon
            className={`transition-all duration-300  ${
              isOpen
                ? "ml-3 rotate-180 translate-x-5 opacity-0"
                : " rotate-0 translate-x-3 cursor-pointer"
            }
`}
          />
        </button>
      </div>
      <div className="flex flex-center">
        <div className="pl-2 space-y-4">
          {buttons.map((btn) => (
            <button
              key={btn.name}
              onClick={() => {
                setActiveButton(btn.name);
                navigate(btn.path); // navigate to the page
              }}
              className={`button1 ${
                isOpen ? "w-15 justify-center right-100 p-3 " : "w-65 p-3 "
              } ${
                activeButton === btn.name
                  ? "bg-[#90c2ff] text-[#004FA9]"
                  : "hover:bg-[#D5E8FF] text-[#004FA9]"
              }`}
            >
              {btn.icon}
              <span
                className={`transition-opacity text-md duration-150 whitespace-nowrap 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
              >
                {btn.name}
              </span>
            </button>
          ))}
          <button className=" " onClick={() => setIsOpen(!isOpen)}>
            <ArrowBackIosIcon
              className={` Transform transition-all duration-300 ${
                isOpen
                  ? "ml-3 rotate-180 translate-x-0 cursor-pointer"
                  : " rotate-0 translate-x-6 opacity-0"
              }
`}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

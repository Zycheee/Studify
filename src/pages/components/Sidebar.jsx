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
      className={`SideBar sticky top-0 h-screen font-sans  ${
        isOpen ? "flex justify-start w-[150px]" : "w-[350px]"
      }`}
    >
      <div className="column">
        <img
          src={Usericon}
          alt="User icon"
          className="Icon transition-opacity duration-150 whitespace-nowrap 
        "
        />
        {!isOpen && (
          <h2
            className={`transition-opacity duration-300 whitespace-nowrap 
    ${isOpen ? "opacity-0" : "opacity-100"}`}
          >
            Haggai Estavilla
          </h2>
        )}
        <button className="cursor-pointer " onClick={() => setIsOpen(!isOpen)}>
          <ArrowBackIosIcon
            className={` Transform transition-all duration-300 ${
              isOpen ? "rotate-180 translate-x-0 " : " rotate-0 translate-x-6"
            }
`}
          />
        </button>
      </div>
      <div className="pl-4 items-center space-y-5">
        {buttons.map((btn) => (
          <button
            key={btn.name}
            onClick={() => {
              setActiveButton(btn.name);
              navigate(btn.path); // navigate to the page
            }}
            className={`button1 ${
              isOpen
                ? "w-15 justify-center right-100 pl-3 "
                : "w-73 pl-4 justify-start "
            } ${
              activeButton === btn.name
                ? "bg-[#90c2ff] text-[#004FA9]"
                : "hover:bg-[#D5E8FF] text-[#004FA9]"
            }`}
          >
            {btn.icon}
            <span
              className={`transition-opacity duration-150 whitespace-nowrap 
        ${isOpen ? "opacity-0" : "opacity-100"}`}
            >
              {btn.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;

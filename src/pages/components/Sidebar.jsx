import React, { useEffect, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Usericon from "/man-user-circle-icon.svg";
import HomeIcon from "@mui/icons-material/Home";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";
import userApi from "../../api/userApi"; // import userApi

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(null);
  const [userName, setUserName] = useState("Loading..."); // dynamic name

  const navigate = useNavigate();

  const buttons = [
    { name: "Study Session", icon: <AutoStoriesRoundedIcon fontSize="large" />, path: "/studysession" },
    { name: "Friends", icon: <PeopleAltRoundedIcon fontSize="large" />, path: "/friends" },
    { name: "Pet", icon: <PetsRoundedIcon fontSize="large" />, path: "/pet" },
    { name: "Profile", icon: <PersonRoundedIcon fontSize="large" />, path: "/profile" },
  ];

  // Fetch user profile on mount
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getProfile();
        if (res.data.success && res.data.data) {
          if (res.data.success && res.data.data) {
            setUserName(`${res.data.data.firstname} ${res.data.data.lastname}`);
          }
        } else {
          setUserName("Unknown User");
          console.log(res.data);
        }
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
        setUserName("Unknown User");
      }
    };
    fetchProfile();
  }, []);


  return (
    <div className={`SideBar  ${isOpen ? "w-[115px]" : "w-80"}`}>
      <div className="column">
        <img src={Usericon} alt="User icon" className="Icon transition-opacity duration-150 whitespace-nowrap" />
        <button className="flex flex-center gap-2">
          {!isOpen && (
            <span className={`transition-opacity text-xl font-bold duration-150 whitespace-nowrap ${isOpen ? "opacity-0" : "opacity-100"}`}>
              {userName}
            </span>
          )}
        </button>
        <button onClick={() => setIsOpen(!isOpen)}>
          <ArrowBackIosIcon
            className={`transition-all duration-300  ${isOpen ? "ml-3 rotate-180 translate-x-5 opacity-0" : " rotate-0 translate-x-3 cursor-pointer"}`}
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
                navigate(btn.path);
              }}
              className={`button1 ${isOpen ? "w-15 justify-center right-100 p-3 " : "w-65 p-3 "} ${
                activeButton === btn.name ? "bg-[#90c2ff] text-[#004FA9]" : "hover:bg-[#D5E8FF] text-[#004FA9]"
              }`}
            >
              {btn.icon}
              <span className={`transition-opacity text-md duration-150 whitespace-nowrap ${isOpen ? "opacity-0" : "opacity-100"}`}>
                {btn.name}
              </span>
            </button>
          ))}

          <div className="flex flex-col mt-auto p-2">
            <button
              onClick={async () => {
                try {
                  // Call backend logout
                  await userApi.logOut();
                } catch (err) {
                  console.error("Failed to log out from server:", err);
                } finally {
                  // Remove token and navigate anyway
                  localStorage.removeItem("accessToken");
                  navigate("/login");
                }
              }}
              className={`button1 flex items-center gap-3 p-3 rounded-md ${isOpen ? "justify-center" : ""} hover:bg-[#D5E8FF] text-[#004FA9]`}
            >
              <LogoutIcon fontSize="large" />
              <span className={`${isOpen ? "opacity-0" : "opacity-100"} transition-opacity`}>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

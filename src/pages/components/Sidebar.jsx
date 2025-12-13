import React, { useEffect, useState } from "react";
import Usericon from "/man-user-circle-icon.svg";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import PetsRoundedIcon from "@mui/icons-material/PetsRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate, useLocation } from "react-router-dom";
import userApi from "../../api/userApi";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState("Loading...");
  const [showLogoutConfirm, setShowLogoutConfirm] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const buttons = [
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
    {
      name: "Pet",
      icon: <PetsRoundedIcon fontSize="large" />,
      path: "/pet",
    },
  ];

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await userApi.getProfile();
        if (res.data?.success && res.data?.data) {
          setUserName(`${res.data.data.firstname} ${res.data.data.lastname}`);
        } else {
          setUserName("Unknown User");
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err);
        setUserName("Unknown User");
      }
    };

    fetchProfile();
  }, []);

  const confirmLogout = async () => {
    try {
      await userApi.logOut();
    } catch {}

    localStorage.removeItem("accessToken");
    navigate("/login");
  };

  const isProfileActive = location.pathname === "/profile";

  return (
    <>
      {/* SIDEBAR */}
      <div
        className={`SideBar flex flex-col transition-all duration-300 ${
          isOpen ? "w-80" : "w-[115px]"
        }`}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {/* PROFILE BUTTON */}
        <div className="pl-2 pt-2">
          <button
            onClick={() => navigate("/profile")}
            className={`button1 flex items-center gap-3 p-3 rounded-md transition-colors
              ${
                isProfileActive
                  ? "bg-[#90c2ff] text-[#004FA9]"
                  : "hover:bg-[#D5E8FF] text-[#004FA9]"
              }
              ${isOpen ? "w-65" : "w-15 justify-center"}
            `}
          >
            <img
              src={Usericon}
              alt="User icon"
              className="block w-10 h-10 object-cover"
            />

            <span
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              {userName}
            </span>
          </button>
        </div>

        {/* MENU BUTTONS */}
        <div className="pl-2 space-y-4 mt-5">
          {buttons.map((btn) => {
            const isActive = location.pathname === btn.path;

            return (
              <button
                key={btn.name}
                onClick={() => navigate(btn.path)}
                className={`button1 flex items-center gap-3 p-3 rounded-md transition-colors
                  ${
                    isActive
                      ? "bg-[#90c2ff] text-[#004FA9]"
                      : "hover:bg-[#D5E8FF] text-[#004FA9]"
                  }
                  ${isOpen ? "w-65" : "w-15 justify-center"}
                `}
              >
                {btn.icon}

                <span
                  className={`transition-opacity duration-300 ${
                    isOpen ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {btn.name}
                </span>
              </button>
            );
          })}
        </div>

        {/* LOGOUT BUTTON (PUSHED TO BOTTOM) */}
        <div className="mt-auto pl-2 pb-4">
          <button
            onClick={() => setShowLogoutConfirm(true)}
            className={`button1 flex items-center gap-3 p-3 rounded-md transition-colors
              hover:bg-[#D5E8FF]
              ${isOpen ? "w-65" : "w-15 justify-center"}
            `}
          >
            <LogoutIcon fontSize="large" />

            <span
              className={`transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              Logout
            </span>
          </button>
        </div>
      </div>

      {/* LOGOUT CONFIRMATION MODAL */}
      {showLogoutConfirm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
            <h2 className="text-xl font-semibold mb-4 text-[#004FA9]">
              Confirm Logout
            </h2>
            <p className="text-gray-700 mb-6">
              Are you sure you want to log out?
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="px-4 py-2 bg-[#004FA9] text-white rounded-md hover:bg-[#003c82]"
              >
                Yes
              </button>
              <button
                onClick={() => setShowLogoutConfirm(false)}
                className="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import UserOverview from "../FriendsPage/components/UserOverview";
import UserRequest from "./components/UserRequest.jsx";

const Friendspage = () => {
  return (    
     
    <div className="p-5 font-sans">
      <input
        id="search"
        type="search"
        className="searchbar searchtext "
        placeholder="Search a user"
      ></input>
      <div className="flex flex-col lg:flex-row justify-evenly gap-10 pt-10">
        <div className="">
          <h1 className="font-bold text-[30px] ">Your Friends</h1>
          <div className="">
            <UserOverview />
          </div>
        </div>

        <div className=" ">
          <h1 className="font-bold font-sans text-[30px]">Friend Request</h1>
          <div>
            <UserRequest />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friendspage;

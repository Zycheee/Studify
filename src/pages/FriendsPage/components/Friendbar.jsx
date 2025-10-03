import React from "react";
import User from "../../HomePage/components/User";
const Friendbar = () => {
  return (
    <div className="pt-1 pl-16 text-left">
      <div className="friendbar ">
        <h1 className="text-[25px] font-semibold">Friends</h1>
        <User />
      </div>
    </div>
  );
};

export default Friendbar;

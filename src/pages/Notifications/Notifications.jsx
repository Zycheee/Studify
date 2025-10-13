import React from "react";
import UserNotifications from "../Notifications/components/UserNotifcations";

const Notifications = () => {
  return (
    <div>
      <div className="flex  p-5 pl-10 gap-1 flex-wrap content-start">
        <div className="w-full p-5">
          <p className="text-3xl font-bold">Notifications</p>
          <div className="border-b-gray-700 hover:border-b-black border-b-2 mt-7 w-15 cursor-pointer">
            <p className="text-xl font-semibold">All</p>
          </div>
        </div>
        <div className="w-full">
          <UserNotifications />
        </div>
      </div>
    </div>
  );
};

export default Notifications;

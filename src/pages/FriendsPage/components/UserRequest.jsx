import React from "react";

export default function UserRequest({ requests, onAccept, onDecline }) {
  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {requests.length === 0 && (
        <p className="text-gray-500">No friend requests</p>
      )}

      {requests.map((user) => (
        <div
          key={user.email}
          className="flex items-start gap-2 p-3 full rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100 "
        >
          <img src={user.icon} className="w-14 h-14 rounded-full" />

          <div className="flex flex-col">
            <span className="font-semibold text-2xl text-gray-700">
              {user.name}
            </span>
            <span className="text-sm text-gray-500">
              wants to be friends with you
            </span>
          </div>

          <div className="ml-auto flex gap-2">
            <button
              onClick={() => onAccept(user)}
              className="mt-1 pr-10 pl-10 pt-3 pb-3 bg-[#3A7BCE] text-2xltext-[17px] hover:bg-[#2B60A4] cursor-pointer text-white rounded-[7px]"
            >
              Accept
            </button>

            <button
              onClick={() => onDecline(user)}
              className="mt-1 pr-10 pl-10 pt-3 pb-3 bg-[#FF5050] text-[17px] hover:bg-[#CA4545] cursor-pointer text-white rounded-[7px]"
            >
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

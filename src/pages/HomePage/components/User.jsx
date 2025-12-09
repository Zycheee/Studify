import React from "react";
import MaleIcon from "/man-user-circle-icon.svg";
import FemaleIcon from "/woman-user-circle-icon.svg";

const User = ({ friends }) => {
  return (
    <div className="flex flex-col gap-2 mt-3 font-sans">
      {friends.length === 0 && (
        <p className="text-gray-500 text-sm">No friends yet.</p>
      )}

      {friends.map((f) => (
        <div
          key={f.friendId} // unique key from backend
          className="flex items-center gap-3 p-2 rounded-[10px] hover:bg-gray-100"
        >
          <div className="relative">
            <img
              src={MaleIcon} // fallback icon, replace if you have gender info
              className="w-12 h-12 rounded-full"
              alt={`${f.firstname} ${f.lastName}`}
            />
            {f.isOnline && (
              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full" />
            )}
          </div>
          <span className="font-semibold text-xl">
            {f.firstname} {f.lastname}
          </span>
        </div>
      ))}
    </div>
  );
};

export default User;

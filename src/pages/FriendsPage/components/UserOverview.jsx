import React from "react";

const UserOverview = ({ friends }) => {
  return (
    <div className="flex flex-col gap-2 w-full mt-3 font-sans text-gray-700">
      {friends.length === 0 && <p className="text-gray-500">No friends yet.</p>}

      {friends.map((person) => (
        <button
          key={person.email}
          className="flex items-start gap-2 p-2 rounded-[15px] duration-300 ease-out border-gray-400 hover:shadow-lg hover:bg-gray-100"
        >
          <img
            src={person.icon}
            className="w-15 h-15 shadow-xl rounded-full"
            alt=""
          />

          <div className="flex flex-col justify-center items-start">
            <span className="font-semibold text-2xl">{person.name}</span>
            <span className="font-normal pb-1 text-gray-500">
              Friend • {person.role}
            </span>
          </div>
        </button>
      ))}
    </div>
  );
};

export default UserOverview;

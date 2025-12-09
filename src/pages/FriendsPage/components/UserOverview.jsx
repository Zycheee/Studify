import React from "react";

const UserOverview = ({ friends, onUnfriend }) => {
  return (
    <div className="flex flex-col gap-2 w-full mt-3 font-sans text-gray-700">
      {friends.length === 0 && (
        <p className="text-gray-500">No friends yet.</p>
      )}

      {friends.map((f) => (
        <div
          key={f.friendId}
          className="flex items-center justify-between gap-3 p-3 rounded-[10px] border border-gray-300 hover:bg-gray-100 transition"
        >
          <div className="flex items-center gap-3">
            {/* Placeholder avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full" />

            <div className="flex flex-col">
              <span className="text-xl font-semibold">
                {f.firstname} {f.lastName}
              </span>
            </div>
          </div>

          {/* Unfriend button */}
          <button
            onClick={() => onUnfriend(f)}
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Unfriend
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserOverview;

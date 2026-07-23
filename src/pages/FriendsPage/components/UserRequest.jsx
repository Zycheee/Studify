import React from "react";

export default function UserRequest({ requests, onAccept, onDecline }) {
  return (
    <div className="flex flex-col gap-2 w-full mt-3 font-sans text-gray-700">
      {requests.length === 0 && (
        <p className="text-gray-500">No friend requests.</p>
      )}

      {requests.map((req) => (
        <div
          key={req.id}
          className="flex items-center justify-between gap-3 p-3 rounded-[10px] border border-gray-300 hover:bg-gray-100 transition"
        >
          <div className="flex items-center gap-3">
            {/* Placeholder avatar */}
            <div className="w-12 h-12 bg-gray-300 rounded-full" />

            <div className="flex flex-col">
              <span className="text-xl font-semibold">
                {req.senderFirstName} {req.senderLastName}
              </span>
              <span className="text-gray-600 text-sm">
                wants to be friends with you
              </span>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onAccept(req)}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
            >
              Accept
            </button>

            <button
              onClick={() => onDecline(req)}
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
            >
              Decline
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

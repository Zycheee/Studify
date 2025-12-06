import React, { useState } from "react";

export default function SearchFriends({ onAddFriend }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [open, setOpen] = useState(false);

  const usersDB = [
    {
      name: "Haggai Estavilla",
      role: "Student",
      email: "haggai@example.com",
      icon: "/woman-user-circle-icon.svg",
    },
    {
      name: "Christian Kyle Ducay",
      role: "Student",
      email: "christian@example.com",
      icon: "/man-user-circle-icon.svg",
    },
    {
      name: "Jhon Rosell Talisic",
      role: "Student",
      email: "jhon@example.com",
      icon: "/man-user-circle-icon.svg",
    },
  ];

  const handleAdd = () => {
    const input = email.trim().toLowerCase();

    if (!/\S+@\S+\.\S+/.test(input)) {
      setMsg({ text: "Invalid email format.", type: "error" });
      return;
    }

    const user = usersDB.find((u) => u.email.toLowerCase() === input);

    if (!user) {
      setMsg({ text: "User doesn't exist.", type: "error" });
      return;
    }

    setMsg({ text: "Friend request sent!", type: "success" });

    if (onAddFriend) onAddFriend(user);
  };

  return (
    <>
      {/* FLOATING BUTTON (BOTTOM RIGHT) */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 px-5 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition cursor-pointer z-40 font-semibold"
      >
        Add a Friend
      </button>

      {/* MODAL BACKDROP */}
      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
          {/* MODAL BOX */}
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md animate-fadeIn">
            {/* MODAL HEADER */}
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold cursor-pointer">
                Add Friend by Email
              </h2>
              <button
                onClick={() => {
                  setOpen(false);
                  setEmail("");
                  setMsg(null);
                }}
                className="text-gray-500 hover:text-gray-800 text-lg cursor-pointer"
              >
                ✕
              </button>
            </div>

            {/* INPUT + BUTTON */}
            <div className="flex gap-2 mb-3">
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setMsg(null);
                }}
                placeholder="Enter email..."
                className="flex-1 px-3 py-2 border rounded"
              />
              <button
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition cursor-pointer"
              >
                Add
              </button>
            </div>

            {/* MESSAGE */}
            {msg && (
              <p
                className={`text-sm ${
                  msg.type === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {msg.text}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

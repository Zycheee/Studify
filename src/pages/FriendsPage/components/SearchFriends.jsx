import React, { useState } from "react";

export default function SearchFriends({ onAddFriend }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);

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
    <div className="w-full max-w-xl p-4 border rounded-lg">
      <h2 className="text-xl font-bold mb-3">Add Friend by Email</h2>

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
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Add
        </button>
      </div>

      {msg && (
        <div
          className={`text-sm ${
            msg.type === "success" ? "text-green-600" : "text-red-600"
          }`}
        >
          {msg.text}
        </div>
      )}
    </div>
  );
}

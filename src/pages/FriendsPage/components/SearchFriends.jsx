import React, { useState } from "react";
import friendRequestApi from "../../../api/friendRequestApi";


export default function SearchFriends({ onAddFriend }) {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(null);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleAdd = async () => {
    const input = email.trim().toLowerCase();

    // Validate email format
    if (!/\S+@\S+\.\S+/.test(input)) {
      setMsg({ text: "Invalid email format.", type: "error" });
      return;
    }

    setLoading(true);
    try {
      const res = await friendRequestApi.sendRequest({ email: input });

      if (res.data.success) {
        setMsg({ text: res.data.message || "Friend request sent!", type: "success" });
        if (onAddFriend) onAddFriend(res.data.data);
        setEmail(""); // clear input after success
      } else {
        setMsg({ text: res.data.message || "Something went wrong.", type: "error" });
      }
    } catch (err) {
      console.log(err);

      if (err.response) {
        switch (err.response.status) {
          case 404:
            setMsg({
              text: err.response.data?.Message || "The user you are trying to add does not exist.",
              type: "error",
            });
            break;
          case 409:
            setMsg({
              text: err.response.data?.Message || "A friend request between these users already exists.",
              type: "error",
            });
            break;
          case 500:
            // Handle server-side duplicate requests more gracefully
            const serverMsg = err.response.data?.Message;
            if (serverMsg?.includes("already exists")) {
              setMsg({
                text: "You already sent a friend request to this user!",
                type: "error",
              });
            } else {
              setMsg({ text: "Server error. Please try again later.", type: "error" });
            }
            break;
          default:
            setMsg({ text: "Server error. Please try again later.", type: "error" });
        }
      } else {
        setMsg({ text: "Network error. Please check your connection.", type: "error" });
      }
    } finally {
      setLoading(false);
    }
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
                disabled={loading}
                onClick={handleAdd}
                className="px-4 py-2 bg-blue-600 disabled:bg-blue-300 text-white rounded"
              >
                {loading ? "Sending..." : "Add"}
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

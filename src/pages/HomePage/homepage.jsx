import React from "react";
import Post from "../HomePage/components/post.jsx";
import Friendbar from "./components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row w-full pt-5 px-8">
      {/* Centered Post Section */}

      <div className="flex-1 flex justify-center">
        <Post />
      </div>

      {/* Right Sidebar (Streak + Friends) */}
      <div className="sticky top-0 h-screen ml-8">
        <div className="mb-5">
          <Streak />
        </div>
        <Friendbar />
      </div>
    </div>
  );
}

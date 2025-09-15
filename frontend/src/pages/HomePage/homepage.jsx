import React from "react";
import Sidebar from "../components/sidebar.jsx";
import Post from "../HomePage/components/post.jsx";
import Friendbar from "../components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="" />
      <div className="flex-1 flex flex-col flex-wrap p-4">
        <div className="flex-1">
          <Post />
        </div>
      </div>
      <div className="flex-1 ml-10 pl-10">
        <Streak />
        <Friendbar />
      </div>
    </div>
  );
}

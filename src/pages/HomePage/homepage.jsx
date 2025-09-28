import React from "react";
import Post from "../HomePage/components/post.jsx";
import Friendbar from "../FriendsPage/components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col flex-wrap p-4 ml-10 content-between">
        <Post />
        <Post />
      </div>
      <div className="fixed right-15 top-0 flex-1 ml-250 pl-10 pt-4">
        <div className="mb-5 pl-10">
          <Streak />
        </div>
        <Friendbar />
      </div>
    </div>
  );
}

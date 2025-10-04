import React from "react";
import Post from "../HomePage/components/post.jsx";
import Friendbar from "./components/Friendbar.jsx";
import Streak from "../components/Streak.jsx";

export default function HomePage() {
  return (
    <div className="flex min-h-screen">
      <div className="flex-1 flex flex-col flex-wrap p-4 ml-10 content-between">
        <h1 className="text-[30px] font-semibold">Post</h1>

        <Post />
        <Post />
      </div>
      <div className="mt-5 mr-10 sticky top-0 h-screen ">
        <div className="mb-5 pl-10">
          <Streak />
        </div>
        <Friendbar />
      </div>
    </div>
  );
}

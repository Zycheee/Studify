import Maleicon from "/man-user-circle-icon.svg";
import Femaleicon from "/woman-user-circle-icon.svg";
import { Heart } from "lucide-react";
import { useState } from "react";

const Post = () => {
  {
    /*USERS DATA */
  }
  const userInfo = [
    {
      name: "Haggai Estavilla",
      postStatus: "just started studying",
      subject: "Programming",
      likes: 104,
      totalTime: 0,
      date: "August 9, 2025",
      icon: Femaleicon,
    },
    {
      name: "Christian Kyle Ducay",
      postStatus: "just started studying",
      subject: "Biology",
      likes: 42,
      totalTime: 0,
      date: "August 10, 2025",
      icon: Maleicon,
    },
    {
      name: "Jhon Rosell Talisic",
      postStatus: "just finished studying",
      subject: "Integral Calculus",
      likes: 42,
      totalTime: 3,
      date: "August 14, 2025",
      icon: Maleicon,
    },
    {
      name: "Aaron Bigno",
      postStatus: "just started studying",
      subject: "Programming",
      likes: 104,
      totalTime: 0,
      date: "August 10, 2025",
      icon: Femaleicon,
    },
  ];

  // Track likes for each post individually
  const [likedPosts, setLikedPosts] = useState(
    Array(userInfo.length).fill(false)
  );
  const [likesCount, setLikesCount] = useState(userInfo.map((u) => u.likes));

  const handleLike = (idx) => {
    const updatedLikedPosts = [...likedPosts];
    const updatedLikesCount = [...likesCount];

    if (!updatedLikedPosts[idx]) {
      updatedLikesCount[idx] += 1;
    } else {
      updatedLikesCount[idx] -= 1;
    }
    updatedLikedPosts[idx] = !updatedLikedPosts[idx];

    setLikedPosts(updatedLikedPosts);
    setLikesCount(updatedLikesCount);
  };

  return (
    <div className="mt-5 font-sans transition ease-in-out delay-150 duration-300 text-gray-700 ">
      <div className="grid grid-cols-1 gap-5">
        {userInfo.map((personPost, idx) => (
          <div key={idx} className="Post1 column1 ">
            <button className="flex items-center gap-3">
              {/*USER ICON */}
              <img
                src={personPost.icon}
                alt="User icon"
                className="w-13 h-13 shadow-xl rounded-full  border-gray-200 cursor-pointer transition-all ease-in-out delay-25"
              />
              <div className="flex flex-col items-start">
                {/*PERSON NAME */}
                <span
                  className="pt-1 font-semibold hover:underline cursor-pointer 
                text-xl"
                >
                  {personPost.name}
                </span>
                {/*PERSON DATE */}
                <span className="text-gray-500 text-sm font-normal">
                  {personPost.date}
                </span>
              </div>
            </button>
            <div className="flex flex-col pt-6">
              {/*PERSON Name, postStatus, and Subject */}
              <span className="mb-4 font-semibold text-xl">
                {personPost.name}
                {/*PERSON postStatus */}
                <span className="font-normal"> {personPost.postStatus}</span>
                {/*PERSON Subject */}
                <span> {personPost.subject}!</span>
              </span>
              <div className="mt-1  flex-col flex gap-3">
                {/*HEART button*/}
                <div className="border-1 w-full border-[#417ecf]/30" />
                <div className="flex  flex-row items-center gap-2 ">
                  <button
                    onClick={() => handleLike(idx)}
                    className="cursor-pointer"
                  >
                    <Heart
                      size={20}
                      className={`transition-all ease-in-out duration-75 ${
                        likedPosts[idx]
                          ? "text-red-500 fill-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                  {/*PERSON likes*/}
                  <span className="font-medium text-sm text-gray-500">
                    {likesCount[idx]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

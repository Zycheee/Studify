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
    <div className="mt-5 font-sans">
      <div className="grid grid-cols-1 gap-5">
        {userInfo.map((personPost, idx) => (
          <div key={idx} className="Post1 column1 ">
            <button className="flex items-center gap-3">
              {/*USER ICON */}
              <img
                src={personPost.icon}
                alt="User icon"
                className="Icon object-cover w-12 h-12"
              />
              <div className="flex flex-col items-start">
                {/*PERSON NAME */}
                <span
                  className="pt-1 font-semibold hover:text-[#0084ff] hover:underline cursor-pointer 
                text-[rgb(33,33,33)] text-[23px]"
                >
                  {personPost.name}
                </span>
                {/*PERSON DATE */}
                <span className="text-[rgb(104,103,103)] font-normal">
                  {personPost.date}
                </span>
              </div>
            </button>
            <div className="flex flex-col pt-6">
              {/*PERSON Name, postStatus, and Subject */}
              <span className="mb-4 font-semibold text-left text-[25px] break-word">
                {personPost.name}
                {/*PERSON postStatus */}
                <span className="font-normal"> {personPost.postStatus}</span>
                {/*PERSON Subject */}
                <span> {personPost.subject}!</span>
              </span>
              <div className="mt-3 flex items-center gap-1">
                {/*HEART button*/}
                <button
                  onClick={() => handleLike(idx)}
                  className="cursor-pointer"
                >
                  <Heart
                    size={20}
                    className={
                      likedPosts[idx]
                        ? "text-red-500 fill-red-500"
                        : "text-gray-500"
                    }
                  />
                </button>
                {/*PERSON likes*/}
                <span className="font-medium text-gray-700">
                  {likesCount[idx]}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;

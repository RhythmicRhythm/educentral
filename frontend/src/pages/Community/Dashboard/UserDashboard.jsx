import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getPostUser,
  likePost,
  dislikePost,
} from "../../../services/authServices";
import Icon from "react-icons-kit";
import { bubble2 } from "react-icons-kit/icomoon/bubble2";
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import { share2 } from "react-icons-kit/icomoon/share2";
import { ic_favorite_border_outline } from "react-icons-kit/md/ic_favorite_border_outline";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const UserDashboard = () => {
  useRedirectLoggedOutUser("/login");

  const [posts, setPosts] = useState([]);

  const likepost = async (postId) => {
    console.log("Post Liked....");
    console.log(postId);
    try {
      const data = await likePost(postId);
      console.log(data);
      const updatedPost = await getPostUser();
      setPosts(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };

  const dislikepost = async (postId) => {
    console.log("Post Disliked....");
    console.log(postId);
    try {
      const data = await dislikePost(postId);
      console.log(data);
      const updatedPost = await getPostUser();
      setPosts(updatedPost);
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    console.log("Getting Posts");

    async function getUserData() {
      const data = await getPostUser();
      console.log(data);
      setPosts(data);
    }
    getUserData();
  }, []);

  return (
    <div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        <div className="w-[25rem] md:w-[45rem]">
          <div className="p-6">
          {posts.map((item) => (
              <div className="border-2 border-gray-300 ">
                <Link
                  to={`/dashboard/${item._id}`}
                  key={item._id}
                  className="flex flex-col gap-2 justify-start mt-2 border-b-2 border-gray-100 
                p-8 "
                >
                  <div className="">
                    <img
                      className="rounded-full w-10"
                      src={item.userimage}
                      alt=""
                    />
                  </div>
                  <div className="text-left">
                    <div className="flex gap-2">
                      <h1 className="font-bold text-gray-700">{item.name}</h1>
                    </div>
                    <div className="">
                      <pre
                        className="text-sm text-gray-500 mt-2"
                        style={{ whiteSpace: "pre-wrap" }}
                      >
                        {item.desc.length > 100
                          ? `${item.desc.substring(0, 100)}`
                          : item.desc}
                        <span className="text-purple-800 text-sm">
                          {" "}
                          read more ....
                        </span>
                      </pre>
                    </div>
                    <div className="flex mt-4 px-4">
                      <img
                        className="w-auto rounded-lg"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                </Link>
                <div className="unaffect text-black flex justify-between px-4 py-1">
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 onClick={() => likepost(item._id)}>
                      <Icon icon={ic_thumb_up_outline} size={18} />
                    </h1>
                    <h1 className="text-lg">{item ? item.likesCount : 0}</h1>
                  </div>
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 onClick={() => dislikepost(item._id)}>
                      <Icon icon={ic_thumb_down_outline} size={18} />
                    </h1>
                    <h1 className="text-lg">{item ? item.dislikesCount : 0}</h1>
                  </div>
                  <Link
                    to={`/dashboard/${item._id}`}
                    className="flex gap-2 text-gray-400 cursor-pointer"
                  >
                    {" "}
                    <h1>
                      <Icon icon={bubble2} size={18} />
                    </h1>
                    {item ? item.comments.length : 0}
                  </Link>
                  <div className="flex gap-2 text-gray-400 cursor-pointer">
                    {" "}
                    <h1 onClick={() => dislikepost(item._id)}>
                      <Icon icon={share2} size={18} />
                    </h1>
                    {/* <h1 className="text-lg">{post ? post.likesCount : 0}</h1> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

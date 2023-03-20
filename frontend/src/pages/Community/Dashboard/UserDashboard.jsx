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
              <Link
                to={`/dashboard/${item._id}`}
                key={item._id}
                className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8 bg-white shadow-lg rounded-lg"
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
                    <h1 className="font-bold text-gray-500">{item.name}</h1>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-600 mt-2">{item.desc}</p>
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;

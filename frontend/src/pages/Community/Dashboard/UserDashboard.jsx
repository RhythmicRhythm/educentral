import React, { useEffect, useState } from "react";
import { getPostUser } from "../../../services/authServices";
import Icon from "react-icons-kit";
import { bubble2 } from "react-icons-kit/icomoon/bubble2";
import { ic_favorite_border_outline } from "react-icons-kit/md/ic_favorite_border_outline";

const UserDashboard = () => {
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
              <div
                key={item._id}
                className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8"
              >
                <div className="">
                  <img className="rounded-full w-10" src={item.userimage} alt="" />
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
                  <div className="flex mt-6 gap-6">
                    <h1 className="text-xs text-gray-400">
                      {" "}
                      <Icon icon={bubble2} size={12} /> 30
                    </h1>
                    <h1 className="text-xs text-gray-400">
                      {" "}
                      <Icon icon={ic_favorite_border_outline} size={15} /> 30
                    </h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserDashboard

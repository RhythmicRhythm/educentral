import React, { useEffect, useState } from "react";
import Icon from "react-icons-kit";
import { bubble2 } from "react-icons-kit/icomoon/bubble2";
import { ic_favorite_border_outline } from "react-icons-kit/md/ic_favorite_border_outline";
import { toast } from "react-toastify";
import { image } from "react-icons-kit/icomoon/image";
import { happy } from "react-icons-kit/icomoon/happy";
import { timesOutline } from "react-icons-kit/typicons/timesOutline";
import { send } from "react-icons-kit/fa/send";
import { getPosts } from "../../../services/authServices";
import { createPost } from "../../../services/authServices";

const initialState = {
  desc: "",
};

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [formData, setformData] = useState(initialState);
  const { desc } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const createpost = async (e) => {
    e.preventDefault();

    console.log("clicked");

    const postData = {
      desc,
    };

    try {
      const data = await createPost(postData);
      console.log(data);
      toast.success("post added Successful...");
      setPosts([data, ...posts]);
      setShowModal(false);
      setformData({ ...formData, desc: "" });
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Getting Posts");

    async function getUserData() {
      const data = await getPosts();
      console.log(data);
      setPosts(data);
    }
    getUserData();
  }, []);

  return (
    <div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 sm:px-16">
            <div className="relative w-[30rem] p-4 sm:p-8 bg-white shadow-lg rounded-lg">
              <div
                onClick={() => setShowModal(false)}
                className="absolute right-0 px-8 cursor-pointer"
              >
                <h1 className="text-gray-600">
                  <Icon icon={timesOutline} size={25} />
                </h1>
              </div>
              {/*content*/}
              <form onSubmit={createpost} className=" w-full mt-6">
                <div className="pb-2 pt-4 text-left">
                  <label className="font-bold text-gray-700 text-sm">
                    Description
                  </label>
                  <textarea
                    type="text"
                    name="desc"
                    id="desc"
                    value={desc}
                    placeholder="What's Happening?"
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="flex gap-6">
                    <div className="">
                      <Icon icon={image} size={20} />
                    </div>
                    <div className="">
                      <Icon icon={happy} size={20} />
                    </div>
                  </div>
                  <div className="">
                    <button type="submit" className="">
                      <Icon icon={send} size={20} />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div
        onClick={() => setShowModal(true)}
        className="fixed bottom-0 right-0 mb-6 mr-6 w-10 h-10 bg-blue-900 hover:bg-blue-800 rounded-full cursor-pointer"
      >
        <h1 className="text-gray-200 font-bold text-3xl ">+</h1>
      </div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        <div className="w-[30rem]">
          <div className="p-6">
            {posts.map((item) => (
              <div
                key={item._id}
                className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8"
              >
                <div className="">
                  <img className=" rounded-full" src={item.userimage} alt="" />
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
  );
};

export default AdminDashboard;

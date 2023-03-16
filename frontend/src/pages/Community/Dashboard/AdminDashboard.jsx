import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Icon from "react-icons-kit";
import { toast } from "react-toastify";
import { timesOutline } from "react-icons-kit/typicons/timesOutline";
import { getPosts, createPost } from "../../../services/authServices";
import { pen_3 } from "react-icons-kit/ikons/pen_3";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const initialState = {
  desc: "",
};

const AdminDashboard = () => {
  useRedirectLoggedOutUser("/login");

  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [formData, setformData] = useState(initialState);
  const [imagePreview, setImagePreview] = useState(null);
  const [postImage, setPostImage] = useState("");
  const { desc } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    setPostImage(e.target.files[0]);
    setImagePreview(URL.createObjectURL(e.target.files[0]));
  };

  const createpost = async (e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append("desc", desc);

    postData.append("image", postImage);

    console.log(...postData);
    console.log("clicked");

    try {
      const data = await createPost(postData);
      console.log(data);

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

                <div className="pb-2 pt-2 text-left flex flex-col">
                  <label className="font-bold text-gray-700 text-sm mb-2">
                    Add Image
                  </label>
                  <input
                    className="text-sm text-grey-500
                    file:mr-5 file:py-2 file:px-6
                    file:rounded-full file:border-0
                    file:text-sm file:font-medium
                    file:bg-blue-50 file:text-blue-700
                    hover:file:cursor-pointer hover:file:bg-amber-50
                    hover:file:text-amber-700"
                    type="file"
                    name="image"
                    id="image"
                    onChange={handleImageChange}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="">
                    <button
                      type="submit"
                      className="transition duration-500 ease bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 
                      hover:from-blue-900 hover:to-pink-600
                      text-lg font-semibold rounded-lg text-white px-3 py-1 cursor-pointer"
                    >
                      Add Post
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
        className="fixed bottom-0 right-0 mb-6 mr-6 w-10 h-10 bg-gradient-to-r from-blue-400 via-blue-600 to-blue-900 rounded-full cursor-pointer"
      >
        <h1 className="text-gray-200 font-bold text-2xl">
          <Icon icon={pen_3} size={17} />
        </h1>
      </div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        <div className="w-[25rem] md:w-[45rem]">
          <div className="p-6">
            {posts.map((item) => (
              <Link
                to={`/dashboard/${item._id}`}
                key={item._id}
                className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 p-8 bg-white shadow-lg rounded-lg"
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

export default AdminDashboard;

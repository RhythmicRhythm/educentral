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
import { ic_thumb_up_outline } from "react-icons-kit/md/ic_thumb_up_outline";
import { ic_thumb_down_outline } from "react-icons-kit/md/ic_thumb_down_outline";
import { pen_3 } from "react-icons-kit/ikons/pen_3";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";



const initialState = {
  desc: "",
};

const AdminDashboard = () => {
  useRedirectLoggedOutUser("/login");

  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
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

      {showModal2 ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 sm:px-16">
            <div className="relative w-[30rem] p-4 sm:p-8 bg-white shadow-lg rounded-lg">
              <div
                onClick={() => setShowModal2(false)}
                className="absolute right-0 px-8 cursor-pointer"
              >
                <h1 className="text-gray-600">
                  <Icon icon={timesOutline} size={25} />
                </h1>
              </div>
              {/*content*/}
              <div className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8">
                <div className="">
                  <img
                    className="rounded-full w-10"
                    src="https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6"
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-500">admin</h1>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-600 mt-2">
                      This is a demo description nothing much just textinhg the
                      comments
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8">
                <div className="">
                  <img
                    className="rounded-full w-10"
                    src="https://preview.redd.it/cpslext1vx971.png?auto=webp&s=a67d767ddec283c3490613cdb0b40c180a33daf6"
                    alt=""
                  />
                </div>
                <div className="text-left">
                  <div className="flex gap-2">
                    <h1 className="font-bold text-gray-500">admin</h1>
                  </div>
                  <div className="">
                    <p className="text-sm text-gray-600 mt-2">
                      This is a demo description nothing much just textinhg the
                      comments
                    </p>
                  </div>
                </div>
              </div>
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
        <div className="w-auto">
          <div className="p-6">
            
            {posts.map((item) => (
              <div
                key={item._id}
                className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8"
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
                  <div className="flex mt-6 gap-6">
                    <div className="flex gap-2 text-xs text-gray-400 cursor-pointer">
                      {" "}
                      <h1>
                        <Icon icon={ic_thumb_up_outline} size={17} />
                      </h1>
                      <h1 className="">{item.likesCount}</h1>
                    </div>

                    <div className="flex gap-2 text-xs text-gray-400 cursor-pointer">
                      {" "}
                      <h1>
                        <Icon icon={ic_thumb_down_outline} size={17} />
                      </h1>
                      <h1 className="">{item.dislikesCount}</h1>
                    </div>

                    <div
                      onClick={() => setShowModal2(true)}
                      className="text-xs text-gray-400"
                    >
                      {" "}
                      <Icon icon={bubble2} size={15} /> 30
                    </div>
                  </div>

                  <div className="">
                  <form className=" w-auto mt-6">
                      <div className="pb-2 pt-4 text-left">
                        <label className="font-bold text-gray-700 text-sm">
                          Add a comment
                        </label>
                        <textarea
                          type="text"
                          name="desc"
                          id="desc"
                          placeholder="Reply"
                          className="form-input"
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
                    {item.comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="flex flex-row gap-4 justify-center mt-4"
                      >
                        <div className="">
                          <img
                            className="rounded-full w-8"
                            src={item.userimage}
                            alt=""
                          />
                        </div>
                        <div className="text-left">
                          <div className="flex gap-2">
                            <h1 className="font-bold text-gray-500">
                              {comment.user}
                            </h1>
                          </div>
                          <div className="">
                            <p className="text-sm text-gray-600 mt-2">
                              {comment.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                   
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

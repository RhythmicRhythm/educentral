import React, { useEffect, useState } from "react";
import IconSpeak from "./Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { ic_keyboard_arrow_right_twotone } from "react-icons-kit/md/ic_keyboard_arrow_right_twotone";

const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className=" flex flex-col sm:flex-row gap-6 items-center justify-center mt-16">
        <div className="">
          <img className="w-20 md:w-74" src={IconSpeak} alt="" />
        </div>

        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold text-gray-800 mb-4">
            Welcome to eduCENTRAL
          </h1>
          <p className="text-xs text-gray-400 ">
            You can click on the button below to create a group and invite
            members to start chatting!
          </p>
        </div>
      </div>
      <div className="text-center mt-6">
        <button
          className=" outline outline-blue-500 text-xs p-2 text-blue-500 rounded-lg"
          onClick={() => setShowModal(true)}
        >
          {" "}
          <Icon icon={userPlus} size={14} /> Add menbers
        </button>
      </div>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-16">
            <div className="relative  px-8 w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-6 rounded-t">
                  <h3 className="text-xl font-semibold">Members</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0  opacity-2 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-600">x</span>
                  </button>
                </div>

                <div className="">
                  <h1 className="text-sm text-gray-600 ">
                    Find all the members in the forum{" "}
                  </h1>
                </div>

                <div className="px-12 mt-12 sm:w-[28rem] w-[20rem]">
                  {/* SEARCHBAR */}
                  <div class="">
                    <div class=" w-full sm:max-w-2xl sm:mx-auto">
                      <div class="overflow-hidden z-0 rounded-lg relative shadow">
                        <form
                          
                          class="relative flex z-50 bg-white rounded-lg shadow"
                        >
                          <input
                            type="text"
                            placeholder="enter your search here"
                            class="rounded-lg flex-1 px-3 py-2 text-gray-700 focus:outline-none"
                          />
                          <button class="bg-indigo-500 text-white rounded-lg font-semibold px-4 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                            Search
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>

                  <div className="text-left mt-4 mb-8">
                    <button className="outline outline-[2px solid #0000ff] text-xs p-2 text-blue-500 rounded-lg">
                      {" "}
                      <Icon icon={userPlus} size={14} /> Add members
                    </button>
                  </div>
                  {/*body*/}

                  {/* mm */}
                  <div className="flex justify-between mb-2">
                    <div className="flex">
                      <div className="">
                        <img
                          className="w-10"
                          src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                          alt="blak frame user profile png icon @transparentpng.com"
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="">Mr Fred</h1>
                        <div className="flex">
                          <div className="w-3 top-0 mt-2 h-3 bg-blue-400 mr-2 rounded-full"></div>
                          <p>online</p>
                        </div>
                      </div>
                    </div>
                    <div className=" float-right text-3xl">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div className="flex">
                      <div className="">
                        <img
                          className="w-10"
                          src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                          alt="blak frame user profile png icon @transparentpng.com"
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="">Mr Fred</h1>
                        <div className="flex">
                          <div className="w-3 top-0 mt-2 h-3 bg-blue-400 mr-2 rounded-full"></div>
                          <p>online</p>
                        </div>
                      </div>
                    </div>
                    <div className=" float-right text-3xl">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div className="flex">
                      <div className="">
                        <img
                          className="w-10"
                          src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                          alt="blak frame user profile png icon @transparentpng.com"
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="">Mr Fred</h1>
                        <div className="flex">
                          <div className="w-3 top-0 mt-2 h-3 bg-orange-400 mr-2 rounded-full"></div>
                          <p>in a meeting </p>
                        </div>
                      </div>
                    </div>
                    <div className=" float-right text-3xl">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div className="flex">
                      <div className="">
                        <img
                          className="w-10"
                          src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                          alt="blak frame user profile png icon @transparentpng.com"
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="">Mr Fred</h1>
                        <div className="flex">
                          <div className="w-3 top-0 mt-2 h-3 bg-blue-400 mr-2 rounded-full"></div>
                          <p>online</p>
                        </div>
                      </div>
                    </div>
                    <div className=" float-right text-3xl">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <div className="flex justify-between mb-2">
                    <div className="flex">
                      <div className="">
                        <img
                          className="w-10"
                          src="https://www.transparentpng.com/thumb/user/blak-frame-user-profile-png-icon--cupR3D.png"
                          alt="blak frame user profile png icon @transparentpng.com"
                        />
                      </div>
                      <div className="ml-4">
                        <h1 className="">Mr Fred</h1>
                        <div className="flex">
                          <div className="w-3 top-0 mt-2 h-3 bg-blue-400 mr-2 rounded-full"></div>
                          <p>online</p>
                        </div>
                      </div>
                    </div>
                    <div className=" float-right text-3xl">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Dashboard;

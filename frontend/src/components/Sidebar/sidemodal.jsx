import React, { useState } from "react";
import User from "../Assets/User.png";
import { ic_keyboard_arrow_right_outline } from "react-icons-kit/md/ic_keyboard_arrow_right_outline";
import { ic_keyboard_arrow_down_outline } from "react-icons-kit/md/ic_keyboard_arrow_down_outline";
import { ic_keyboard_arrow_right_twotone } from "react-icons-kit/md/ic_keyboard_arrow_right_twotone";


const sidemodal = () => {
    const [showModal, setShowModal] = useState(false);
    const toggle = () => setShowModal(!showModal);
    const [showModala, setShowModala] = useState(false);
  return (
    <div>
         {/* ModalStarts */}

      {showModal ? (
        <>
          <div className="justify-center items-center z-30 flex fixed">
            <div className="relative px-8">
              {/*content*/}
              <div className="modalbg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-6 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0  opacity-2 float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-gray-600">x</span>
                  </button>
                </div>

                <div className="px-8 mt-2 w-[18rem]">
                  {/* mm */}
                  <Link
                    to="/addworkspace"
                    className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100"
                  >
                    <h1 className="text-gray-600  font-bold">Add Workspace</h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </Link>

                  <Link
                    to="/editworkspace"
                    className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100"
                  >
                    <h1 className="text-gray-600  font-bold">Edit Workspace</h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </Link>

                  <div
                    onClick={() => setShowModala(true)}
                    className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100"
                  >
                    <h1 className="text-gray-600 font-bold">
                      Switch Workspace
                    </h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <Link
                    to="/createnewforum"
                    className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100"
                  >
                    <h1 className="text-gray-600 font-bold">
                      Create New Forum
                    </h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </Link>

                  <div className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100">
                    <h1 className="text-gray-600 font-bold">Invite Others</h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </div>

                  <div className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100">
                    <h1 className="text-gray-600 font-bold">
                      Sign out of Napps
                    </h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
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
        </>
      ) : null}

      {/* ModalEnds */}

      {/* ModalStarts  A*/}

      {showModala ? (
        <>
          <div className=" justify-end items-center flex fixed z-40">
            <div className="relative px-8 ">
              {/*content*/}
              <div className="modalbg border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-6 rounded-t">
                  <button
                    className="p-1 ml-auto bg-transparent border-0  opacity-2 float-right text-sm leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModala(false)}
                  >
                    <span className="text-gray-600">x</span>
                  </button>
                </div>

                <div className="px-8 mt-2 w-[18rem]">
                  {/* mm */}
                  <Link
                    to="/workspaces"
                    className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100"
                  >
                    <h1 className="text-gray-600  font-bold">
                      Sign in to other Workspace
                    </h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
                      {" "}
                      <Icon
                        icon={ic_keyboard_arrow_right_twotone}
                        size={20}
                      />{" "}
                    </div>
                  </Link>

                  <div className="flex justify-between mb-2 cursor-pointer hover:bg-gray-100">
                    <h1 className="text-gray-600 font-bold">
                      Create new Workspace
                    </h1>

                    <div className=" float-right text-xl mb-3 text-gray-600">
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
        </>
      ) : null}

      {/* ModalEnds A */}
    </div>
  )
}

export default sidemodal

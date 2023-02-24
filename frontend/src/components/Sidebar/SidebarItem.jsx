import React, { useState } from "react";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import Icon from "react-icons-kit";
import { signOut } from "react-icons-kit/fa/signOut";
import { ic_explore_outline } from "react-icons-kit/md/ic_explore_outline";
import logo from "../Assets/eduCentralLogo.png";
import User from "../Assets/User.png";
import { ic_keyboard_arrow_right_outline } from "react-icons-kit/md/ic_keyboard_arrow_right_outline";
import { ic_keyboard_arrow_down_outline } from "react-icons-kit/md/ic_keyboard_arrow_down_outline";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import { ic_keyboard_arrow_right_twotone } from "react-icons-kit/md/ic_keyboard_arrow_right_twotone";

import WorkDropdown from "./WorkDropdown";

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = () => {
  const [showModal, setShowModal] = useState(false);
  const toggle = () => setShowModal(!showModal)
  const [showModala, setShowModala] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));

    navigate("/login");
  };

  return (
    <>
      <div className="flex justify-center ">
        <div className="">
          <img src={logo} alt="" />
        </div>
      </div>

      <div className="">
        <h1 className="text-lg text-white font-bold">Napps+</h1>
      </div>

      <div className="mt-2">
        <div
          onClick={toggle}
          className="text-xs text-white"
        >
          Forum+
        </div>
      </div>

      {/* ModalStarts */}

      {showModal ? (
        <>
          <div className="justify-center items-center z-30 flex px-16 fixed">
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
          <div className=" justify-end items-center flex   fixed z-40">
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
                    <h1 className="text-gray-600  font-bold">Sign in to other Workspace</h1>

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

      <div className="mt-4 text-white text-sm">
        <h1 className="text-xs mb-2">
          <Icon icon={ic_explore_outline} size={18} /> Presidential-
          Inauguration
        </h1>
        <h1 className="text-xs mb-2">
          <Icon icon={ic_explore_outline} size={18} /> Presidential-
          Inauguration
        </h1>
        <h1 className="text-xs mb-2">
          <Icon icon={ic_explore_outline} size={18} /> Presidential-
          Inauguration
        </h1>
        <h1 className="text-xs mb-2">
          <Icon icon={ic_explore_outline} size={18} /> Presidential-
          Inauguration
        </h1>
      </div>

      <div className="mt-6 flex flex-col items-center justify-center">
        <button
          className="text-white text-lg font-bold flex "
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {!isOpen ? (
            <h1 className="px-1">
              <Icon icon={ic_keyboard_arrow_right_outline} size={25} />{" "}
            </h1>
          ) : (
            <h1 className="px-1">
              <Icon icon={ic_keyboard_arrow_down_outline} size={25} />{" "}
            </h1>
          )}{" "}
          Direct Messages
        </button>
        {isOpen && (
          <div className="">
            <div className="mb-2">
              <div className="flex">
                <div className="">
                  <img className="w-6"
                  src={User}  alt=""
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-white">Tobiloba</h1>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex">
                <div className="">
                <img className="w-6"
                  src={User}  alt=""
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-white">Tobiloba</h1>
                </div>
              </div>
            </div>
            <div className="mb-2">
              <div className="flex">
                <div className="">
                <img className="w-6"
                  src={User}  alt=""
                  />
                </div>
                <div className="ml-4">
                  <h1 className="text-white">Tobiloba</h1>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 right-12 mb-4">
        <button onClick={logout} className="text-white font-bold hover:text-lg">
          <Icon icon={signOut} size={20} /> Sign Out
        </button>
      </div>
    </>
  );
};

export default SidebarItem;

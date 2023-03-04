import React, { useState, useEffect } from "react";
import { selectIsAdmin, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/authServices";
import { Link, useNavigate } from "react-router-dom";
import Icon from "react-icons-kit";
import { signOut } from "react-icons-kit/fa/signOut";
import { statsBars } from "react-icons-kit/icomoon/statsBars";
import { ic_perm_identity_twotone } from "react-icons-kit/md/ic_perm_identity_twotone";
import { users } from "react-icons-kit/fa/users";

// const activeLink = ({ isActive }) => (isActive ? "active" : "link");
// const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = () => {
  const isAdmin = useSelector(selectIsAdmin);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));

    navigate("/login");
  };

  return (
    <div className="">
      <div className="">
        <h1 className="text-lg text-white font-bold">Napps+</h1>
      </div>

      <Link
        to="/dashboard"
        className="text-left flex justify-between text-white border-b-2 border-gray-100 p-2 cursor-pointer"
      >
        <h1>
          {" "}
          <Icon icon={statsBars} size={25} /> Dashboard
        </h1>
        <p> </p>
      </Link>

      <Link
        to="/profile"
        className="text-left flex justify-between text-white border-b-2 border-gray-100 p-2 cursor-pointer"
      >
        <h1>
          {" "}
          <Icon icon={ic_perm_identity_twotone} size={25} /> Profile
        </h1>
        <p> </p>
      </Link>
      {isAdmin ? (
        <Link
        to="/members"
        className="text-left flex justify-between text-white border-b-2 border-gray-100 p-2 cursor-pointer"
      >
        <h1>
          {" "}
          <Icon icon={users} size={25} /> Members
        </h1>
        <p> </p>
      </Link>
      ) : null  }
      

      {/* <div className="text-left  border-b-2 border-gray-100 p-2">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className=" flex justify-between text-white cursor-pointer"
        >
          <h1 className="">
            {" "}
            <Icon icon={statsBars} size={25} /> Groups
          </h1>

          <div className="">
            {!isOpen ? (
              <h1 className="px-1">
                <Icon icon={ic_keyboard_arrow_right_outline} size={25} />{" "}
              </h1>
            ) : (
              <h1 className="px-1">
                <Icon icon={ic_keyboard_arrow_down_outline} size={25} />{" "}
              </h1>
            )}
          </div>
        </div>
        {isOpen && (
          <div className="mt-2 text-white transition duration-500 ease-in flex flex-col">
            <Link to="">
              {" "}
              <Icon icon={statsBars} size={25} /> Sub Sub
            </Link>
            <Link className="mt-1" to="">
              {" "}
              <Icon icon={statsBars} size={25} /> Sub Sub
            </Link>
            <Link className="mt-1" to="">
              {" "}
              <Icon icon={statsBars} size={25} /> Sub Sub
            </Link>
          </div>
        )}
      </div> */}

      <div className="absolute bottom-0 right-12 mb-4">
        <button onClick={logout} className="text-white font-bold hover:text-lg">
          <Icon icon={signOut} size={20} /> Sign Out
        </button>
      </div>
    </div>
  );
};

export default SidebarItem;

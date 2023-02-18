import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../services/authServices";
import Icon from "react-icons-kit";
import {signOut} from 'react-icons-kit/fa/signOut'
import {layers} from 'react-icons-kit/ikons/layers'

const activeLink = ({ isActive }) => (isActive ? "active" : "link");
const activeSublink = ({ isActive }) => (isActive ? "active" : "link");

const SidebarItem = ({ item, isOpen }) => {
  const [expandMenu, setExpandMenu] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = async () => {
    await logoutUser();
    await dispatch(SET_LOGIN(false));
   
    navigate("/login");
  }

  if (item) {
    return (
      <div
        className={
          expandMenu ? " bg-pink-400 sidebar-item s-parent open" : "sidebar-item s-parent"
        }
      >
        <div className="sidebar-title">
          <span>
            {<div className="icon"> </div>}
            {isOpen && <div>the title</div>}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="bg-gray-900 ">
        <NavLink to="" className={activeLink}>
          <div className="sidebar-item s-parent">
            <div className="sidebar-title">
              <span>
                {<div className="icon"><Icon icon={layers} size={20} /> </div>}
                {isOpen && <div>Dashboard</div>}
              </span>
            </div>
          </div>
        </NavLink>

        <div className="mt-12 mb-12"> </div>

        <div className="mt-12">
          <div onClick={logout}  className="sidebar-item s-parent">
            <div className="sidebar-title text-white">
              <span>
                {<div className="icon text-white"> <Icon icon={signOut} size={20} />  </div>}
                {isOpen && <div>Logout</div>}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default SidebarItem;

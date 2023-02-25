import React, { useState, useEffect } from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import SidebarItem from "./SidebarItem";
import Icon from "react-icons-kit";
import {ic_keyboard_arrow_left_twotone} from 'react-icons-kit/md/ic_keyboard_arrow_left_twotone'
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authServices";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  // const goHome = () => {
  //   navigate("/");
  // };

//choose the screen size 
const handleResize = () => {
  if (window.innerWidth < 700) {
    setIsOpen(false)
  } else {
    setIsOpen(true)
  }
}

// create an event listener
useEffect(() => {
  window.addEventListener("resize", handleResize)
})

  return (
    <div className="layout">
      <div className="bars">
        <HiMenuAlt3 onClick={toggle} />
      </div>

      <div className="sidebar py-4" style={{ width: isOpen ? "230px" : "0px" }}>
        <div onClick={() => setIsOpen(false)}
        className="absolute cursor-pointer bg-[#3623e0] rounded-full  ml-4 right-0">
        <h1 className="text-white">
        <Icon icon={ic_keyboard_arrow_left_twotone} size={25} />
        </h1>
        </div>
        <SidebarItem isOpen={isOpen} />
      </div>

      <main 
        style={{
          paddingLeft: isOpen ? "230px" : "0px",
          transition: "all .5s",
        }}
      >
        {children}
      </main>
    </div>
  );
};

export default Sidebar;

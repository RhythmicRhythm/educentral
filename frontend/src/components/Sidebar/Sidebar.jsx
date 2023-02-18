import React, { useState } from "react";
import "./Sidebar.scss";
import { HiMenuAlt3 } from "react-icons/hi";
import { RiProductHuntLine } from "react-icons/ri";

import SidebarItem from "./SidebarItem";

import Icon from "react-icons-kit";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { useNavigate } from "react-router-dom";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authServices";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="layout">
      <div className="bars" style={{ marginLeft: isOpen ? "100px" : "0px" }}>
        <HiMenuAlt3 onClick={toggle} />
      </div>

      <div className="sidebar" style={{ width: isOpen ? "230px" : "0px" }}>
        <div className="top_section">
          {/* <div className="logo" style={{ display: isOpen ? "block" : "none" }}>
            <RiProductHuntLine
              size={35}
              style={{ cursor: "pointer" }}
              onClick={goHome}
            />
          </div> */}
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

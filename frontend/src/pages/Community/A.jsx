import { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import Icon from "react-icons-kit";
import {ic_sort_outline} from 'react-icons-kit/md/ic_sort_outline'
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import IconSpeak from "./Assets/IconSpeak.png";

import { Link, useNavigate } from "react-router-dom";
import {ic_account_circle_outline} from 'react-icons-kit/md/ic_account_circle_outline'
import {ic_contact_support_outline} from 'react-icons-kit/md/ic_contact_support_outline'


const A = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();
  const [isActive, setActive] = useState("false");
  
  const navigate = useNavigate();

  const handleToggle = () => {
		setActive(!isActive);
	  };

    const logout = async () => {
      await logoutUser();
      await dispatch(SET_LOGIN(false));
      navigate("/login");
    };


  return (
    <div className="flex overflow-hidden">
        <div onClick={handleToggle}  className="menu-toggle mt-20">
	   <Icon icon={ic_sort_outline} size={32} />  
		</div>

    <aside className={` z-30 sidebar ${isActive ? null : "is-active" }`}>
			
	<div className="flex gap-x-4 items-center justify-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              isActive && "rotate-[360deg]"
            }`}
            alt=""
          />
		  </div>

		  <div className="flex gap-x-4 items-center justify-center mt-8">
            <h1 className="text-white text-sm font-bold">Napps</h1>
		  </div>

      <div className="flex gap-x-4 items-center justify-center mt-8">
      <button 
        onClick={logout} 
        
        className="--btn --btn-danger">
          Logout
        </button>
		  </div>

		  
			
		

		</aside>
      

      {/* MainBody */}
      <div className="">
       <div class="flex bg-blue-400 rounded-md mt-8 ml-8 w-96">
                <input
                  type="text"
                  class="w-full bg-[#ededed]  shadow"
                />
                <button class="bg-blue-400 px-6 py-2 text-white text-lg font-semibold  rounded-md">
                  Search
                </button>
              </div>

              <div className="absolute top-0 right-0 mr-8 mt-8" >
              <Link className="text-sm mr-4 text-blue-500" to="/login">
                <Icon icon={ic_contact_support_outline} size={35} /> 
              </Link>

              <Link className="text-sm text-blue-500" to="/login">
                <Icon icon={ic_account_circle_outline} size={35} /> 
              </Link>
              </div>
      </div>
      <div className="min-w-screen min-h-screen flex items-center justify-center">
        <img className="w-20 md:w-74" src={IconSpeak} alt="" />
        <h1>whats up</h1>
      </div>
    </div>
  );
};
export default A;

import { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import Icon from "react-icons-kit";
import {menu} from 'react-icons-kit/icomoon/menu';
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { selectName, SET_LOGIN } from "../../redux/features/auth/authSlice";
import { logoutUser } from "../../services/authServices";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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
        <div onClick={handleToggle}  className="menu-toggle ">
	   <Icon icon={menu} size={32} />  
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
      <div className="min-w-screen min-h-screen flex sm:flex-1 sm:p-20 items-center justify-center">
       lllll
      </div>
    </div>
  );
};
export default A;

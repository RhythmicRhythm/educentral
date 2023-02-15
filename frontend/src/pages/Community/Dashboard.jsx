import React, { useEffect } from "react";
import IconSpeak from "./Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";



const Dashboard = () => {
  useRedirectLoggedOutUser("/login");
 

  return (
    <div className="">
  <div className=" flex flex-col sm:flex-row gap-6 items-center justify-center mt-16">
        <div className="">
        <img className="w-20 md:w-74" src={IconSpeak} alt="" />

        </div>
        
        <div className="text-center sm:text-left">
          <h1 className="text-xl font-bold text-gray-800 mb-4">Welcome to eduCENTRAL</h1>
          <p className="text-xs text-gray-400 ">You can click on the button below to create a group and invite members to start chatting!</p>
        </div>
        
      </div>
        <div className="text-center mt-6">
            <button className=" outline outline-blue-500 text-xs p-2 text-blue-500 rounded-lg">
              {" "}
              <Icon icon={userPlus} size={14} /> Add menbers
            </button>
          </div>
    </div>
  );
};

export default Dashboard;
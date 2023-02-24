import React, { useEffect, useState } from "react";
import IconSpeak from "../Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        <div className="mx-auto flex flex-col w-[40rem]">
          <div className=" flex flex-col z-0 sm:flex-row gap-10 items-center justify-center mt-16">
            <div className="relative">
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
          <div className="text-center sm:text-left mt-8 ml-1">
            <Link to="/creategroup"
              
              className=" outline outline-blue-500 text-xs p-2 text-blue-500 rounded-lg"
            >
              {" "}
              <Icon icon={userPlus} size={14} /> Create Group
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

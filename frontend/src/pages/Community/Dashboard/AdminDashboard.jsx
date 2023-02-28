import React, { useEffect, useState } from "react";
import IconSpeak from "../Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import {bubble2} from 'react-icons-kit/icomoon/bubble2';
import {ic_favorite_border_outline} from 'react-icons-kit/md/ic_favorite_border_outline';
import { Link } from "react-router-dom";
import biden from "../Assets/biden.png";
import  User  from "../Assets/User.png";

const AdminDashboard = () => {
  return (
    <div>
      <div className="fixed bottom-0 right-0 mb-6 mr-6 ">
        <h1 className="text-gray-500 font-bold text-3xl bg-blue-200 rounded-full p-4">
          +
        </h1>
      </div>
      <div className="min-w-screen min-h-screen z-10 flex justify-center ">
        {/* <div className="mx-auto flex flex-col w-[40rem]">
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
        </div> */}

        <div className="w-[30rem]">
          <div className=" flex flex-row gap-4 justify-center mt-16">
            <div className="">
              <img className="w-15 md:w-74" src={User} alt="" />
            </div>

            <div className="text-left">
              <div className="flex gap-2">
                <h1 className="font-bold text-gray-500">Mr Fred</h1> 
              </div>
              <div className="">
              <p className="text-sm text-gray-600 mt-2">
                Welcome Everyone to our Presidential Inauguration ceremony this
                December, i hope we can work and collaborate to get the best out
                of this.
                
              </p>
              </div>
              <div className="flex mt-4 ">
            <img className="w-[7rem]" src={biden} alt="" />
          </div>
          <div className="flex mt-6 gap-6">
            <h1 className="text-xs text-gray-400"> <Icon icon={bubble2} size={12} /> 30</h1>
            <h1 className="text-xs text-gray-400"> <Icon icon={ic_favorite_border_outline} size={15} /> 30</h1>
            
          </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

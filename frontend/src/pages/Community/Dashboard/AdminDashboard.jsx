import React, { useEffect, useState } from "react";
import IconSpeak from "../Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import { bubble2 } from "react-icons-kit/icomoon/bubble2";
import { ic_favorite_border_outline } from "react-icons-kit/md/ic_favorite_border_outline";
import { Link } from "react-router-dom";
import biden from "../Assets/biden.png";
import User from "../Assets/User.png";
import {image} from 'react-icons-kit/icomoon/image';
import {happy} from 'react-icons-kit/icomoon/happy';
import {timesOutline} from 'react-icons-kit/typicons/timesOutline';
import {send} from 'react-icons-kit/fa/send';



import data from "./data";

const AdminDashboard = () => {
  const [showModal, setShowModal] = useState(true);
  return (
    <div>
        {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-16">
            <div className="relative w-[30rem] p-8 bg-white shadow-lg rounded-lg">

              <div onClick={() => setShowModal(false)}  
              className="absolute right-0 px-8 cursor-pointer">
                <h1 className="text-gray-600">
                <Icon icon={timesOutline} size={25} />
                </h1>
              </div>
              {/*content*/}
              <form className=" w-full">
           

            <div className="pb-2 pt-4 text-left">
              <label className="font-bold text-gray-700 text-sm">
                Description
              </label>
              <textarea
                type="text"
                name="email"
                id="email"
                placeholder="What's Happening?"
                className="form-input"
              />
            </div>

            <div className="flex justify-between">
              <div className="flex gap-6">
             <div className=""><Icon icon={image} size={20} /></div>
              <div className=""><Icon icon={happy} size={20} /></div>
              </div>
              <div className="">
                <div className=""><Icon icon={send} size={20} /></div>
                </div>
            
            </div>

           
          </form>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div onClick={() => setShowModal(true)} 
       className="fixed bottom-0 right-0 mb-6 mr-6 w-10 h-10 bg-blue-900 hover:bg-blue-800 rounded-full cursor-pointer">
        <h1 className="text-gray-200 font-bold text-3xl ">
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
          <div className="p-6">
            {data.map((item) => (
              <div key={item.id} className="flex flex-row gap-4 justify-center mt-16 border-b-2 border-gray-300 pb-8">
                <div className="">
                  <img className="w-14 md:w-74 rounded-full" src={item.userimg} alt="" />
                </div>
                <div className="text-left">
              <div className="flex gap-2">
                <h1 className="font-bold text-gray-500">{item.name}</h1>
              </div>
              <div className="">
                <p className="text-sm text-gray-600 mt-2">
                  {item.desc}
                </p>
              </div>
              <div className="flex mt-4 px-4">
                <img
                  className="w-auto rounded-lg"
                  src={item.imageUrl}
                  alt=""
                />
              </div>
              <div className="flex mt-6 gap-6">
                <h1 className="text-xs text-gray-400">
                  {" "}
                  <Icon icon={bubble2} size={12} /> 30
                </h1>
                <h1 className="text-xs text-gray-400">
                  {" "}
                  <Icon icon={ic_favorite_border_outline} size={15} /> 30
                </h1>
              </div>
            </div>


              </div>
            ))}

            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

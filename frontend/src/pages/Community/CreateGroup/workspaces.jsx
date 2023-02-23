import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import key from "../Assets/KeyIcon.png";
import Icon from "react-icons-kit";
import IconSpeak from "../Assets/IconSpeak.png";
import User from "../Assets/User.png";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { toast } from "react-toastify";
import Edu from "../Assets/Edu.png";

const Workspaces = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center left-0">
          <img src={Edu} alt="" />
        </div>
        <div
          className="w-auto
        mx-auto rounded-lg bg-white p-5 text-gray-800 flex flex-col items-center justify-center"
        >
         
          <h1 className="text-2xl font-bold ">Welcome Back</h1>
          <p className="text-sm">
          Workspaces for eugeneishado44@gmail.com 
          </p>

          <div className=" flex flex-col sm:flex-row gap-10 items-center outline-black justify-center mt-16">
            <div className="relative">
              <img className="w-20 md:w-74" src={IconSpeak} alt="" />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
              Napps Workspace
              </h1>
              <div className=" flex">
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />

                <p className="ml-4">10 Menbers</p>
              </div>
            </div>
           <div className="ml-6">
           <button type="submit" 
                  className="ent-btn block w-full px-4  text-lg text-white rounded-lg">
                    {" "}
                    Launch Workspace
                  </button>
           </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-10 items-center outline-black justify-center mt-16">
            <div className="relative">
              <img className="w-20 md:w-74" src={IconSpeak} alt="" />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
              LTV Workspace
              </h1>
              <div className=" flex">
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />

                <p className="ml-4">10 Menbers</p>
              </div>
            </div>
           <div className="ml-6">
           <button type="submit" 
                  className="ent-btn block w-full px-4  text-lg text-white rounded-lg">
                    {" "}
                    Launch Workspace
                  </button>
           </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-10 items-center outline-black justify-center mt-16">
            <div className="relative">
              <img className="w-20 md:w-74" src={IconSpeak} alt="" />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
              LTV Workspace
              </h1>
              <div className=" flex">
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />

                <p className="ml-4">10 Menbers</p>
              </div>
            </div>
           <div className="ml-6">
           <button type="submit" 
                  className="ent-btn block w-full px-4  text-lg text-white rounded-lg">
                    {" "}
                    Launch Workspace
                  </button>
           </div>
          </div>

          <div className=" flex flex-col sm:flex-row gap-10 items-center outline-black justify-center mt-16">
            <div className="relative">
              <img className="w-20 md:w-74" src={IconSpeak} alt="" />
            </div>

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold text-gray-800 mb-4">
              LTV Workspace
              </h1>
              <div className=" flex">
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />
                <img className="w-4" src={User} alt="" />

                <p className="ml-4">10 Menbers</p>
              </div>
            </div>
           <div className="ml-6">
           <button type="submit" 
                  className="ent-btn block w-full px-4  text-lg text-white rounded-lg">
                    {" "}
                    Launch Workspace
                  </button>
           </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Workspaces;

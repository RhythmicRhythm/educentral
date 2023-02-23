import React, { useEffect, useState } from "react";
import IconSpeak from "../Assets/IconSpeak.png";
import Icon from "react-icons-kit";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";
import Napps from "../Assets/Napps.png";
import {trash} from 'react-icons-kit/fa/trash'


const EditGroup = () => {
  return (
    
     <div className="">
         <div className="">
         <h1 className="">Edit Group Profile</h1>
         </div>
         <div className=" flex flex-col sm:flex-row gap-10 items-center justify-center mt-16">
        
        <div className="relative">
          <img className="w-36 sm:w-44" src={Napps} alt="" />
          <button className="absolute bottom-0 right-0 mb-6">
          <Icon className="text-right" icon={trash} size={14} />
          </button>
          <h1 className="text-sm text-gray-400 font-bold">Upload Picture</h1>
        </div>

        <div className="">
          <form className="w-[15rem] sm:w-[27rem]">
            <div className="pb-2 pt-4 text-left">
              <label className="text-sm font-bold text-gray-700" >Name</label>
              <input
                type="name" 
                name="name"
                id="name"
                placeholder="Napps"
                className="form-input"
              />
            </div>

            <div className="pb-2 pt-6 text-left">
              <label className="text-sm font-bold text-gray-700">Add Members By Email</label>
               <button className="ml-0 sm:ml-8 text-sm sm:mt-8 font-bold text-gray-700">Add from Google contacts </button>

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Ex. olaoluwagiri15@gmail.com"
                className="form-input"
              />
            </div>
          </form>
        </div>
      </div>
     </div>
   
  );
};

export default EditGroup;

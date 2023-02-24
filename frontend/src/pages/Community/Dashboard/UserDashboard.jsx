import React, { useEffect, useState } from "react";
import IconSpeak from "../Assets/IconSpeak.png";
import User from "../Assets/User.png";

const UserDashboard = () => {
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
                This forum will include every of your members once you invite or
                add them
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default UserDashboard

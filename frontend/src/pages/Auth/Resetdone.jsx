import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/eduCentralLogo.png";
import Done from "./Assets/Done.png";

const Resetdone = () => {
  return (
    <div>
         <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center right-0 left-0">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white p-5 text-gray-900 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={Done} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-4">Password Reset</h1>
          <p className="text-sm">
          Your Password has been successfully reset.
            
          </p>
            <p className="text-sm mt-6">click below to Login</p>

          <div class="w-full mt-20">
              <button className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-4">
                {" "}
                Log In
              </button>
              
            </div>

        </div>
      </div>
    </div>
  )
}

export default Resetdone

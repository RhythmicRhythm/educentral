import React from 'react'
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/eduCentralLogo.png";
import key from "./Assets/KeyIcon.png";

const Resetpassword = () => {
  return (
    <div>
       <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center right-0 left-0">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white shadow p-5 text-gray-800 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={key} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Set New Password ?</h1>
          <p className="text-sm">
          Your new password must be different to previously used passwords.
          </p>

          <form action="" className=" w-full">
            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="form-input"
              />
            </div>

            <div className="pb-2 pt-4 text-left">
                <p className='text-sm'>Must be at least 4 characters</p>
                <p className='text-sm'>At least one Uppercase</p>
                <p className='text-sm'>At least one Number</p>
                <p className='text-sm'>At least one Symbol</p>
                
            </div>

            <div className="pb-2 pt-4">
              <input
                type="password"
                name="password"
                id="confirm_password"
                placeholder="Confirm Password"
                className="form-input "
              />
            </div>
            
           

            <div className="w-full mt-20">
              <button className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2">
                {" "}
                Reset Password
              </button>
              <Link className="text-sm text-blue-500" to="/login">
                 Back to Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Resetpassword

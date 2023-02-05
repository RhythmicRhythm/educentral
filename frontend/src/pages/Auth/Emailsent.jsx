import React from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/eduCentralLogo.png";
import Email from "./Assets/Email.png";

const Emailsent = () => {
  return (
    <div>
         <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center right-0 left-0">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white shadow p-5 text-gray-900 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={Email} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-3">Check your Email</h1>
          <p className="text-sm">
            we sent a password reset link to
            <br />
            <span className="font-bold">eugeneishado44@gmail.com</span>
          </p>

          <div class="w-full mt-20">
              <button className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-4">
                {" "}
                Open your Email App
              </button>
               <p className="mb-4">Didn't receive the email?&nbsp;    
                <button className="text-blue-500 font-bold">  Click to resend</button>
               </p>
              <Link className="text-sm text-blue-700" to="/login">
                 Back to Login{" "}
              </Link>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Emailsent

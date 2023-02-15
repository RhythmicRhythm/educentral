import React, { useState } from "react";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./Assets/eduCentralLogo.png";
import key from "./Assets/KeyIcon.png";
import Icon from "react-icons-kit";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { forgotPassword, validateEmail } from "../../services/authServices";
import { toast } from "react-toastify";

const Forgot = () => {
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();
    if (!email) {
      return toast.error("Please enter an email");
    }

    if (!validateEmail(email)) {
      return toast.error("Please enter a valid email");
    }

    const userData = {
      email,
    };

    await forgotPassword(userData);
    setEmail("");
  };

  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center right-0 left-0">
          <img src={logo} alt="logo" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white p-5 text-gray-800 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={key} alt="" />
          </div>
          <h1 className="text-2xl font-bold ">Forgot Password ?</h1>
          <p className="text-sm">
            No worries, We’ll send you a new reset instructions
          </p>

          <form onSubmit={forgot} className=" w-full">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="w-full mt-20">
              <button
                type="submit"
                className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
              >
                Send Email
              </button>
              <Link className="text-sm text-blue-500" to="/login">
                <Icon icon={arrowLeft2} size={18} /> Back to Login{" "}
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import key from "../Assets/KeyIcon.png";
import Icon from "react-icons-kit";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { toast } from "react-toastify";
import Edu from "../Assets/Edu.png";

const AddWorkspace = () => {
  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
        <div className="top-0 absolute p-4 text-center left-0">
          <img src={Edu} alt="" />
        </div>
        <div
          className="w-96
        mx-auto rounded-lg bg-white p-5 text-gray-800 flex flex-col items-center justify-center"
        >
          <div className="">
            <img src={key} alt="" />
          </div>
          <h1 className="text-2xl font-bold ">First Enter your Email</h1>
          <p className="text-sm">
            We suggest you use the email address you regularly use
          </p>

          <form className=" w-full">
            <div className="pb-2 pt-4">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="form-input"
              />
            </div>

            <div className="w-full mt-20">
              <button
                type="submit"
                className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
              >
                continue
              </button>
              <p className="text-center text-xs ">
                By continuing, you’re agreeing to our Customer Terms of Service,
                User Terms of Service, Privacy policy and Cookie Policy.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddWorkspace;

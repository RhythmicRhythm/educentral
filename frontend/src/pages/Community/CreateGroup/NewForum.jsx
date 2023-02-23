import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import key from "../Assets/KeyIcon.png";
import Icon from "react-icons-kit";
import { arrowLeft2 } from "react-icons-kit/icomoon/arrowLeft2";
import { toast } from "react-toastify";
import Edu from "../Assets/Edu.png";

const NewForum = () => {
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
          
          <h1 className="text-2xl font-bold mb-3">Create New Forum</h1>
          <p className="text-sm">
          Forums are where your team communicates. They’re best when organized around a topic — #marketing, for example.
          </p>

          <form className=" w-full">
            <div className="pb-2 pt-4 text-left">
                <label className="font-bold text-gray-700 text-sm">Name</label>
              <input
                type="text"
                name="name"
                id="name"
               
                className="form-input"
              />
            </div> 

            <div className="pb-2 pt-4 text-left">
            <label className="font-bold text-gray-700 text-sm">Description</label>
              <input
                type="text"
                name="email"
                id="email"
                placeholder="what is the forum about?"
                className="form-input"
              />
            </div>

            <div className="w-full mt-20">
              <button
                type="submit"
                className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
              >
                Create Forum
              </button>
             
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewForum;

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/eduCentralLogo.png";
import Vector1 from "../Assets/Vector1.png";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";

const Creategroup = () => {
  useRedirectLoggedOutUser("/login");
  const navigate = useNavigate();
  const createGroup = (e) => {
    e.preventDefault();

    navigate("/creatinggroup");
  }

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
          <div>
            <img className="w-[10rem]" src={Vector1} alt="" />
          </div>
          <h1 className="text-2xl font-bold mb-4 text-gray-800">Get started on eduCENTRAL</h1>
          <p className="text-sm text-gray-700">
            It’s a new way to communicate with your members. It’s faster, better
            organized, and more secure than email.
          </p>

          <div className="w-full mt-20">
            <button 
             onClick={(e) => createGroup(e)}
            className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-4">
              {" "}
              Create Group
            </button>

            <p className="mt-6 text-xs">
              By continuing, you’re agreeing to our Customer Terms of Service,
              User Terms of Service, Privacy policy and Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Creategroup;

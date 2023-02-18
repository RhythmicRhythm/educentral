import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import eduLogo from "../Assets/eduCentralLogo.png";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authServices";
import axios from "axios";

const Profile = () => {
  useRedirectLoggedOutUser("/login");
  const dispatch = useDispatch();

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    console.log("Getting use");

    async function getUserData() {
      const data = await getUser();
      console.log(data);

      setProfile(data);

      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.firstname));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div>
      <div className="min-w-screen min-h-screen flex items-center justify-center mt-10">
        <div className="px-8 md:px-6">
          <div className="flex justify-center flex-col md:flex-row gap-10">
            
            <div className="flex flex-col flex-wrap gap-8 items-center">
              <h1 className="text-2xl font-bold">My Profile </h1>
              <img src={eduLogo} className="w-48" alt="" />
            </div>

            <div className="w-full lg:w-5/12 md:w-5/12 text-left ">
              <h1 className="text-xl font-bold mb-6">Basic Information</h1>

              <div className="mb-2">
                <h1 className="font-bold mb-1 text-base">FirstName:</h1>
                <p className="text-sm text-gray-800 font-semibold">{profile?.firstname}</p>
                <hr />
              </div>
              <div className="mb-2">
                <h1 className="font-bold mb-1 text-base">LastName:</h1>
                <p className="text-sm text-gray-800 font-semibold">{profile?.lastname}</p>
                <hr />
              </div>
              <div className="mb-2">
                <h1 className="font-bold text-gray-800 mb-1">Gender:</h1>
                <p className="">{profile?.gender} </p>
              </div>
              <hr />
              <div className="mb-2">
                <h1 className="font-bold text-gray-800 mb-1">
                  Marital Status:
                </h1>
                <p className=""> {profile?.marital_status}</p>
              </div>

              {/* <div className="flex flex-col md:flex-row gap-6 items-center ">
                <button className="block bg-blue-700 w-64 p-2 text-lg text-white rounded-lg mb-2">
                  try
                </button>
              </div> */}
            </div>
          </div>

          <div className="w-full  text-left ">
            <h1 className="text-xl font-bold mb-6">Contact Information</h1>

            <div className="mb-2">
              <h1 className="font-bold text-gray-800 mb-1">Email:</h1>
              <p className="">{profile?.email}</p>
              <hr />
            </div>
            <div className="mb-2">
              <h1 className="font-bold text-gray-800 mb-1">Phone:</h1>
              <p className="">{profile?.phone}</p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

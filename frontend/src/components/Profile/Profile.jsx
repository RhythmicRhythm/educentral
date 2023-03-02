import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import useRedirectLoggedOutUser from "../../customHook/useRedirectLoggedOutUser";
import { SET_NAME, SET_USER } from "../../redux/features/auth/authSlice";
import { getUser } from "../../services/authServices";

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
      <div className=" flex flex-col sm:flex-row gap-10 items-center justify-center mt-16">
        <div className="bg-gray-400 w-[15rem]">
          
          <div class="mt-6 w-fit mx-auto">
            <img
              src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
              class="rounded-full w-28 "
              alt="profile"
            />
          </div>

          <div class="mt-8 ">
            <h2 class="text-white font-bold text-2xl tracking-wide">
              Jonathan <br /> Smith
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div class="h-1 w-full bg-black mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-yellow-500 "></div>
          </div>
        </div>

        <div className="w-[15rem] sm:w-[33rem]">
          <div className="flex flex-col gap-4">

            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col  gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Association Name:</h1>
                <p className="text-gray-700 font-medium text-sm">Dos technologies</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Email Address:</h1>
                <p className="text-gray-700 font-medium text-sm">dos@gmail.com</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col  gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Association Name:</h1>
                <p className="text-gray-700 font-medium text-sm">Dos technologies</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Email Address:</h1>
                <p className="text-gray-700 font-medium text-sm">dos@gmail.com</p>
              </div>
            </div>

            <div className="flex md:flex-row flex-col justify-between">
              <div className="flex flex-col  gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Association Name:</h1>
                <p className="text-gray-700 font-medium text-sm">Dos technologies</p>
              </div>

              <div className="flex flex-col gap-2">
                <h1 className="text-gray-800 font-bold text-sm">Email Address:</h1>
                <p className="text-gray-700 font-medium text-sm">dos@gmail.com</p>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

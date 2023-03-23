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
      console.log(profile);

      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data.firstname));
    }
    getUserData();
  }, [dispatch]);

  return (
    <div className=" px-8">
      <div className=" flex flex-col md:flex-row gap-10 items-center  justify-center mt-16">
        <div className="bg-white p-4 rounded-lg shadow-2xl w-[15rem]">
        <div class="h-1 w-full bg-pink-600 mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5 bg-blue-700"></div>
          </div>
          
          <div class="mt-6 w-fit mx-auto">
            <img
              src="https://api.lorem.space/image/face?w=120&h=120&hash=bart89fe"
              class="rounded-full w-28 "
              alt="profile"
            />
          </div>

          <div class="mt-8 ">
            <h2 class="text-gray-600 font-bold text-2xl tracking-wide">
              {profile?._id}
            </h2>
          </div>
          <p class="text-emerald-400 font-semibold mt-2.5">Active</p>

          <div class="h-1 w-full bg-blue-700  mt-8 rounded-full">
            <div class="h-1 rounded-full w-2/5  bg-pink-600"></div>
          </div>
        </div>

        <div className="w-[15rem] sm:w-[33rem] bg-white p-4 rounded-lg shadow-2xl">

      

          <div className="flex flex-col gap-2 p-2">

            <div className="flex md:flex-row flex-col gap-6 justify-between">
              <div className="flex flex-col  gap-2">
              <div className="pb-2 text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Association Name
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Email Address
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 justify-between">
              <div className="flex flex-col  gap-2">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Association Name
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Email Address
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 justify-between">
              <div className="flex flex-col  ">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Association Name
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>

              <div className="flex flex-col ">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Email Address
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>
            </div>

            <div className="flex md:flex-row flex-col gap-6 justify-between">
              <div className="flex flex-col  ">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Association Name
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>

              <div className="flex flex-col ">
              <div className="pb-2  text-left">
                  <label className="font-bold text-gray-700 text-sm">
                  Email Address
                  </label>
                  <input
                  disabled="true"
                    type="text"
                    name="email"
                    id="email"
                    value="name"
                    placeholder="Email"
                    className="form-inputt text-gray-600"
                    
                  />
                </div>
              </div>
            </div>

           
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

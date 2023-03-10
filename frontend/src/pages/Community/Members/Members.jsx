import React, { useEffect, useState } from "react";
import { getMembers } from "../../../services/authServices";
import Icon from "react-icons-kit";
import { timesOutline } from "react-icons-kit/typicons/timesOutline";
import {addMember} from "../../../services/authServices";
import useRedirectLoggedOutUser from "../../../customHook/useRedirectLoggedOutUser";


const initialState = {
  email: "",
};

const Members = () => {
  useRedirectLoggedOutUser("/login");

  const [members, setMembers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [formData, setformData] = useState(initialState);
  const { email } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const addmember = async (e) => {
    e.preventDefault();

    console.log("clicked");

    const userData = {
      email,
    };

    try{
      const data = await addMember(userData);
      console.log(data);
      const updatedMembers = await getMembers();
      setMembers(updatedMembers);
      setShowModal(false);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log("Getting Members");

    async function getUserData() {
      const data = await getMembers();
      console.log(data);
      setMembers(data);
    }
    getUserData();
  }, []);

  return (
    <div>
       {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none px-4 sm:px-16">
            <div className="relative w-[30rem] p-4 sm:p-8 bg-white shadow-lg rounded-lg">
              <div
                onClick={() => setShowModal(false)}
                className="absolute right-0 px-8 cursor-pointer"
              >
                <h1 className="text-gray-600">
                  <Icon icon={timesOutline} size={25} />
                </h1>
              </div>
              {/*content*/}
              <form onSubmit={addmember} className=" w-full mt-6">
                <div className="pb-2 pt-4 text-left">
                  <label className="font-bold text-gray-700 text-sm">
                    Enter users email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    placeholder="Email"
                    className="form-input"
                    onChange={handleInputChange}
                  />
                </div>

                <div className="flex justify-between">
                  <div className="">
                  <button type="submit" className="ent-btn block w-full p-2 text-sm text-white rounded-lg">
                Add user
              </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="opacity-75 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-left justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Members
            </p>
            <div className="mt-4 sm:mt-0">
              <button onClick={() => setShowModal(true)} className="ent-btn block w-full p-2 text-sm text-white rounded-lg">
                Add Members
              </button>
            </div>
          </div>
        </div>
        <div className="bg-white px-4 md:px-10 pb-5">
          <div className="overflow-x-auto">
            <table className="w-full whitespace-nowrap">
              <tbody>
                <tr className="text-sm leading-none text-gray-600 h-16">
                  <td className="pr-4"></td>
                  <td className="">
                    <div className="flex items-center">
                      <div className="pl-2">
                        <p className="text-sm font-bold leading-none text-gray-800">
                          Firstname
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">
                      Lastname
                    </p>
                  </td>
                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">
                      Phone
                    </p>
                  </td>
                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">
                      Email
                    </p>
                  </td>
                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">
                      Shared on 21 Februray 2020
                    </p>
                  </td>
                </tr>

                {members.map((item) => (
                  <tr
                    key={item._id}
                    className="text-sm leading-none text-gray-600 h-16 border-b-2 border-gray-300"
                  >
                    <td className="pr-4">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center">
                        <img
                          className="w-14 md:w-74 rounded-full"
                          src={item.photo}
                          alt=""
                        />
                      </div>
                    </td>
                    <td className="">
                      <div className="flex items-center">
                        <div className="pl-2">
                          <p className="text-sm font-medium leading-none text-gray-800">
                            {item.firstname}
                          </p>
                        </div>
                      </div>
                    </td>

                    <td className="pl-6">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.lastname}
                      </p>
                    </td>
                    <td className="pl-6">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.phone}{" "}
                      </p>
                    </td>
                    <td className="pl-6">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.email}
                      </p>
                    </td>
                    <td className="pl-6">
                      <p className="text-sm font-medium leading-none text-gray-800">
                        {item.date}
                      </p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;

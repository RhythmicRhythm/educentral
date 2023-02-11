import { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import Icon from "react-icons-kit";
import { menu } from "react-icons-kit/icomoon/menu";
import { userPlus } from "react-icons-kit/icomoon/userPlus";
import IconSpeak from "./Assets/IconSpeak.png";

const AdminHomepage = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <div className="flex overflow-hidden">
      <div onClick={handleToggle} className="menu-toggle ">
        <Icon icon={menu} size={32} />
      </div>

      <aside className={` z-30 sidebar ${isActive ? null : "is-active"}`}>
        <div className="flex gap-x-4 items-center justify-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              isActive && "rotate-[360deg]"
            }`}
            alt=""
          />
        </div>

        <div className="flex gap-x-4 items-center justify-center mt-8">
          <h1 className="text-white text-sm font-bold">Napps</h1>
        </div>
      </aside>

      {/* MainBody */}
      <div className="w-full p-10">
        <div className="flex justify-between w-full">
          <div className="">
            <div class="flex">
              <div class="flex rounded-md overflow-hidden w-full">
                <input
                  type="text"
                  class="w-full rounded-md shadow rounded-r-none"
                />
                <button class="bg-indigo-600 text-white px-12 text-lg font-semibold py-4 rounded-r-md">
                  Go
                </button>
              </div>
              <button class="bg-white px-6 text-lg font-semibold py-4 rounded-md">
                Clear
              </button>
            </div>{" "}
          </div>
          <div className="">icons </div>
        </div>

        <div className="">
          <h1 className="font-bold text-xl flex justify-between mb-6">
            Presidential-Inauguration
          </h1>
          <div className="flex mb-6">
            <img className="w-20 md:w-96" src={IconSpeak} alt="" />
            <div className="ml-8 text-left mt-10">
              <p className="font-bold text-xl mb-4">
                You’re looking at the Presidential-Inauguration Forum
              </p>
              <p className="text-sm ">
                This forum will include every of your members once you invite or
                add them{" "}
              </p>
            </div>
          </div>

          <div className="text-left">
            <button className="outline outline-blue-500 text-lg p-2 text-blue-500 rounded-lg">
              {" "}
              <Icon icon={userPlus} size={18} /> Add menbers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AdminHomepage;

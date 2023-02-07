import { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";

const Sidebar = () => {
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(true);

  const Menus = [{ title: "Napps", src: "eduCentralLogo" }];

  const PageDisplay = () => {
    if (page === 0) {
      return <StepA />;
    } else if (page === 1) {
      return <StepB />;
    } else{
        return <StepC />;
    }
  };

  return (
    <div className="flex overflow-hidden">
      <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page == 1 ? "66.6%" : "100%" }}
        ></div>
      </div>

      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-blue-600 h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src={logo}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt=""
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
            alt=""
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            eduCentral
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <img src={`./Assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* MainBody */}
      <div className="min-w-screen min-h-screen flex sm:flex-1 items-center justify-center">
        <div
          className="w-50 sm:w-96 
        mx-auto rounded-lg bg-white p-5 text-gray-900 flex flex-col items-center justify-center"
        >
          <div className="">{PageDisplay()}</div>

          {/* Movement Button */}

          <div className="w-full">
            <button 
            className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-4"
            onClick={() => {
                setPage((currPage) => currPage +  1);
              }}>
              {" "}
              Next
            </button>

            <p className="mt-4 text-xs">
              By continuing, you’re agreeing to our Customer Terms of Service,
              User Terms of Service, Privacy policy and Cookie Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

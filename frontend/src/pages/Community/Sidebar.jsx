import { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import StepA from "./StepA";
import StepB from "./StepB";
import StepC from "./StepC";
import Icon from "react-icons-kit";
import {arrowLeft2} from 'react-icons-kit/icomoon/arrowLeft2';
import {menu} from 'react-icons-kit/icomoon/menu';

const Sidebar = () => {
  const [page, setPage] = useState(0);
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
		setActive(!isActive);
	  };

  

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
        <div onClick={handleToggle}  className="menu-toggle ">
	   <Icon icon={menu} size={32} />  
		</div>

    <aside className={` z-30 sidebar ${isActive ? null : "is-active" }`}>
			
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
      <div className="min-w-screen min-h-screen flex sm:flex-1 sm:p-20 items-center justify-center">
        <div
          className="w-50 sm:w-96 
        mx-auto rounded-lg bg-white p-5 text-gray-900 flex flex-col items-center justify-center"
        >
        <div className="progressbar">
        <div
          style={{ width: page === 0 ? "33.3%" : page === 1 ? "66.6%" : "100%" }}
        ></div>
      </div>
      
          <div className="">{PageDisplay()}</div>

          {/* Movement Button */}

          <div className="w-full relative">
            <button 
            className="ent-btn block w-full p-2 text-lg text-white rounded-lg mb-2"
            onClick={() => {
                setPage((currPage) => currPage +  1);
              }}>
              {" "}
              Next
            </button>

            <button 
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
             className={`absolute left-4 text-xs text-blue-900 ${page === 0 ? "opacity-0" : ""} `}>
            <Icon icon={arrowLeft2} size={14} />  prev step{" "}
                  </button>

            <p className="mt-8 text-xs">
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

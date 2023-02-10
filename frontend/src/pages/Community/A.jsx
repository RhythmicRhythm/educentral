import React, { useState } from "react";
import logo from "./Assets/eduCentralLogo.png";
import Icon from "react-icons-kit";
import {menu} from 'react-icons-kit/icomoon/menu';

const A = () => {
	const [isActive, setActive] = useState("true");

	const handleToggle = () => {
		setActive(!isActive);
	  };

  return (
    <div className="flex">
       <div onClick={handleToggle}  className="menu-toggle ">
	   <Icon icon={menu} size={32} />  
		</div>

    <aside className={` sidebar ${isActive ? null : "is-active" }`}>
			
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

		<main class="content">
			<h1>Welcome, Human</h1>
			<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, explicabo!</p>
		</main>



    </div>
  );
};

export default A;

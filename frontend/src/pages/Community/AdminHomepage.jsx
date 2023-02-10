import React from "react";

const AdminHomepage = () => {
  return (

    <div className="">
          <div className="h-screen flex item-end justify-end px-4 pb-6">
        <button
          className="relative z-30 lg:hidden peer top-0 h-14 w-14 rounded-full mt-8
         bg-blue-900 hover:bg-blue-500 transition mb-[660px]"
        >
          <p className="text-white ">M</p>
        </button>
        <div className="z-20 fixed top-0 -left-96 lg:left-0 h-screen 
         w-64 bg-blue-900 shadow-2xl peer-focus:left-0 peer:transition 
         ease-out delay-1500 duration-200">

            <nav role="navigation" className="p-6">
                <div className="flex items-center gap-4 pb-4">
                    <h2 className="text-2xl font-bold">eduCentral</h2>
                </div>

                <div className="mt-4 mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
                    <span className="uppercase px-4 text-white ">Docs</span>
                    <ul className="space-y-4 mb-12 px-4 mt-8">
                        <li> hello </li>
                    </ul>
                </div>
            </nav>
        </div>

      
      </div>
      <div className="flex item-center justify-center text-blue">
            <p>welcome to edu central</p>
            <p>welcome to edu central</p>
        </div>
    </div>
    
  );
};

export default AdminHomepage;

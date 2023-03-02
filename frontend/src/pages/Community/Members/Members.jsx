import React, { useEffect, useState } from "react";
import data from "./data";
import {getMembers} from "../../../services/authServices";


const Members = () => {
    
  useEffect(() => {
    console.log("Getting Members");

    async function getUserData() {
      const data = await getMembers();
      console.log(data);

      
    }
    getUserData();
  }, []);

  return (
    <div>
      <div className="xl:w-3/4 2xl:w-4/5 w-full">
        <div className="px-4 md:px-10 py-4 md:py-7">
          <div className="flex items-left justify-between">
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800">
              Members
            </p>
            <div className="mt-4 sm:mt-0">
              
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
                    <p className="text-sm font-bold leading-none text-gray-800">Role</p>
                  </td>
                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">Email</p>
                  </td>
                  <td className="pl-6">
                    <p className="text-sm font-bold leading-none text-gray-800">Shared on 21 Februray 2020</p>
                  </td>
                </tr>
              
                {data.map((item) => (
                   <tr key={item.id} className="text-sm leading-none text-gray-600 h-16 border-b-2 border-gray-300">
                   <td className="pr-4">
                   <div className="w-10 h-10 rounded-sm flex items-center justify-center">
                         <img
                           className="w-14 md:w-74 rounded-full"
                           src={item.userimg}
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
                     <p className="text-sm font-medium leading-none text-gray-800">{item.role} </p>
                   </td>
                   <td className="pl-6">
                     <p className="text-sm font-medium leading-none text-gray-800">{item.email}</p>
                   </td>
                   <td className="pl-6">
                     <p className="text-sm font-medium leading-none text-gray-800">{item.date}</p>
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

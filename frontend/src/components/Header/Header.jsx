import React from "react";
import Icon from "react-icons-kit";
import {search} from 'react-icons-kit/icomoon/search';
import { Link } from "react-router-dom";
import {ic_account_circle_outline} from 'react-icons-kit/md/ic_account_circle_outline';
import {ic_contact_support_outline} from 'react-icons-kit/md/ic_contact_support_outline';

const Header = () => {

  return (
    <div className="--pad header">
      <div className="--flex-between">
      <div class=" w-auto ">
                      <div class="overflow-hidden  rounded-lg relative shadow">
                        <form
                          
                          class="relative flex bg-white rounded-lg shadow"
                        >
                          <input
                            type="text"
                            placeholder="enter your search here"
                            class="rounded-lg flex-1 px-3 py-2 text-gray-700 focus:outline-none"
                          />
                          <button class="bg-[#1A0B8A] text-white rounded-lg font-semibold px-4 py-2 hover:bg-indigo-400 focus:bg-indigo-600 focus:outline-none">
                            Search
                          </button>
                        </form>
                      </div>
                    </div>

              <div className="flex">
              <Link className="text-sm mr-2 text-gray-500 hover:text-blue-800" to="#">
                <Icon icon={ic_contact_support_outline} size={22} /> 
              </Link>

              <Link className="text-sm text-gray-500 hover:text-blue-800" to="/profile">
                <Icon icon={ic_account_circle_outline} size={22} /> 
              </Link>
              </div>
      
      </div>
  
    </div>
  );
};

export default Header;
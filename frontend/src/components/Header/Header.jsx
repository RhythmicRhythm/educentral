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
      <div className="flex bg-blue-400 rounded-md sm:w-48 w-auto">
                <input
                  type="text"
                  className="w-full bg-[#ededed] shadow"
                  placeholder="Search"
                />
                <button className="bg-[#0539b4] px-4 py-2 text-white text-xs font-semibold rounded-md">
                <Icon icon={search} size={16} /> 
                </button>
              </div>

              <div className="flex">
              <Link className="text-sm mr-2 text-gray-500" to="#">
                <Icon icon={ic_contact_support_outline} size={18} /> 
              </Link>

              <Link className="text-sm text-gray-500" to="/profile">
                <Icon icon={ic_account_circle_outline} size={18} /> 
              </Link>
              </div>
      
      </div>
  
    </div>
  );
};

export default Header;
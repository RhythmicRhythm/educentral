import React from "react";
import Icon from "react-icons-kit";
import { search } from "react-icons-kit/icomoon/search";
import { Link } from "react-router-dom";
import { ic_account_circle_outline } from "react-icons-kit/md/ic_account_circle_outline";
import { ic_contact_support_outline } from "react-icons-kit/md/ic_contact_support_outline";

const Header = () => {
  return (
    <div className="pt-2">
      <div className="--flex-between">
        <div className="max-w-md mx-auto px-4">
          <div className="relative flex items-center w-full h-12 shadow rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
            <div className="grid place-items-center h-full w-12 text-gray-300 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            <input
              className="peer w-[20rem] outline-none text-sm text-gray-700 pr-2"
              type="text"
              id="search"
              placeholder="Search something.."
            />
          </div>
        </div>

        {/* <div className="flex mr-2">

          <Link
            className="text-sm text-gray-500 hover:text-blue-800"
            to="/profile"
          >
            <Icon icon={ic_account_circle_outline} size={22} />
          </Link>
        </div> */}


      </div>
    </div>
  );
};

export default Header;

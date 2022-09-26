import {
  SortAscendingIcon,
  SwitchHorizontalIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

function TopCards() {
  return (
    <div className="w-full">
      {/* left top */}
      <div className="flex items-center space-x-4">
        {/* left-side-top */}
        <div
          className=" flex-1 shadow-lg text-white bg-blue-600 p-3 space-y-4 rounded-md
      w-[50%] md:w-max pl-2 sm:pl-10 h-72 "
        >
          {/* master card icon */}
          <div className="w-16 -mt-5 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              enableBackground="new 0 0 48 48"
              viewBox="0 0 48 48"
            >
              <path
                fill="#f44336"
                d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
              />
              <path
                fill="#ff9800"
                d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
              />
              <ellipse cx="24" cy="24" fill="#ff7300" rx="6" ry="11.98" />
            </svg>
          </div>
          <p className="text-[10px]">Wallet Balance</p>
          <h1 className="text-lg md:text-2xl">$824,571.93</h1>
          <h3 className="text-[10px]">+0,8% than last week</h3>
          <div className="flex justify-around mt-32 space-x-3">
            <div className="space-y-4 ">
              <span className="flex items-center justify-center px-3 py-1 mt-3 bg-white rounded-md">
                <SortAscendingIcon className="text-gray-600 w-7 " />
              </span>
              <span className="text-[10px]">Invoices</span>
            </div>
            <div className="space-y-4 ">
              <span className="flex items-center justify-center px-3 py-1 mt-3 bg-white rounded-md">
                <SwitchHorizontalIcon className="text-gray-600 w-7" />
              </span>
              <span className="text-[10px]">Invoices</span>
            </div>
          </div>
        </div>
        {/* left bar */}
        <div className=" h-max  lg:w-[70%] rounded-md p-4   bg-white dark:bg-gray-800">
          <div className="flex justify-between px-1 pt-5 text-xs">
            <span className="space-y-1">
              <p className="text-gray-500">Main Balance</p>
              <h1 className="text-gray-600 text-md sm:text-2xl dark:text-gray-200">
                $98,452.44
              </h1>
            </span>
            <DotsVerticalIcon className="w-5 cursor-pointer" />
          </div>
          <div className="mx-2 mt-10">
            <ProgressBar completed={80} />
          </div>
          <div className="text-gray-400 text-[10px] lg:text-sm mt-5 mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
          </div>
          <div className="mt-5 sm:mt-14 text-[9px]   sm:text-xs flex items-center justify-between sm:px-5">
            <span>
              <p className="text-gray-400 t">VALID THRU</p>
              <h1>08/21</h1>
            </span>
            <span>
              <p className="text-gray-400 ">VALID THRU</p>
              <h1>08/21</h1>
            </span>
            <span>
              <p className="text-gray-400 ">VALID THRU</p>
              <h1>08/21</h1>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopCards;

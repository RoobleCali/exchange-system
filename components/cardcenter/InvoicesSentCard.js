import { ChevronDownIcon } from "@heroicons/react/solid";
import Actions from "../models/Actions";
import React from "react";

function InvoicesSentCard() {
  return (
    <div className="w-full overflow-hidden overflow-x-scroll h-max">
      {/* top bar invoices */}
      <div className="flex items-center justify-between">
        <div>
          <p>Invoices sent</p>
          <span className="text-xs  hidden sm:inline-flex text-gray-500 truncate">
            Lorem, ipsum dolor amet consectetur .
          </span>
        </div>
        <div className="flex items-center space-x-3">
          <button className="text-white w-14 md:w-auto text-xs truncate bg-blue-600 px-2 py-1 rounded-md">
            +Add Card
          </button>
          {/* filter  */}
          <select className="cursor-pointer focus:border-none border-none outline-none text-xs bg-white dark:bg-gray-900 px-2 py-1 flex space-x-2 innline-flex items-center">
            <option value="">Pending</option>
            <option value="">All</option>
            <option value="">Completed</option>
            <option value="">Cancelled</option>
          </select>
        </div>
      </div>
      {/* transactions */}
      <div className=" ">
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#FF9220] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#1EC090] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#BC1EE3] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#FF9220] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#1EC090] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
        {/* transaction 1 */}
        <div className="flex items-center justify-between  space-x-10  mt-4">
          <div className="flex items-center space-x-2">
            <div className="  w-10 h-10 bg-[#1EC090] rounded-md"></div>
            <p className="text-xs   text-gray-500 truncate">abdishakuur ally</p>
          </div>

          <p className="text-gray-500 lg:text-xs flex flex-col text-left">
            <span className="text-xs     text-gray-500 truncate">
              shakuur ally
            </span>
            <span className="text-xs   text-gray-500 truncate">24h, ago</span>
          </p>
          <span className="text-xs     text-blue-500 text-md">$562</span>
          <span className="text-xs     text-blue-500 text-md">$562</span>
        </div>
      </div>
    </div>
  );
}

export default InvoicesSentCard;

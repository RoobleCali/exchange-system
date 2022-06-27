import { Router } from "next/router";
import React, { useState } from "react";
import {
  ChevronUpIcon,
  ChevronDownIcon,
  HomeIcon,
  SortAscendingIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

function Dropdown() {
  const [Dropdown, setDropdown] = useState(false);
  const [Button, setButton] = useState(false);
  const [Report, setReport] = useState(false);
  const [ReportDropdown, setReportDropdown] = useState(false);

  return (
    <div>
      <li
        className={`  ${!Button || (Button && "text-gray-500")}`}
        onClick={() => setDropdown(!Dropdown)}
      >
        <div onClick={() => setButton(!Button)}>
          <a
            className={`flex  px-2 py-2 rounded-md 
                   transition-all duration-100 items-center
                    dark:text-white hover:bg-blue-600  ${
                      Router.pathname === "/users"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
          >
            <div className="w-4 h-4 text-gray-200">
              <SortAscendingIcon className="w-4 h-4" />
            </div>
            <button
              class={`flex items-center justify-between px-5  py-1 font-normal
                    transition duration-75 rounded-lg
                    group dark:text-white 
                    ${Button && !Dropdown && "text-gray-400"}
                    `}
            >
              <span class="-ml-2 w-14">Users</span>
              {Dropdown ? (
                <ChevronUpIcon className="w-4 h-4 ml-16" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 ml-16" />
              )}
            </button>
          </a>
        </div>
        <ul class={`${Dropdown ? "innline-flex" : "hidden"}  py-2 space-y-2`}>
          <li>
            <Link href="/users">
              <a
                class="flex items-center w-full p-2 text-xs font-normal 
                    text-gray-500 transition duration-75 rounded-lg group
                     hover:bg-gray-100 dark:text-white 
                     dark:hover:bg-gray-700 pl-11"
              >
                users
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/orders">
              <a
                class="flex items-center w-full p-2 text-xs
                     font-normal text-gray-500 transition 
                     duration-75 rounded-lg group hover:bg-gray-100
                      dark:text-white dark:hover:bg-gray-700 
                      pl-11"
              >
                Roles
              </a>
            </Link>
          </li>
        </ul>
      </li>
      {/* reports */}
      <li
        className={`  ${!Report || (Report && "text-gray-500")}`}
        onClick={() => setReportDropdown(!ReportDropdown)}
      >
        <div onClick={() => setReportDropdown(!ReportDropdown)}>
          <a
            className={`flex  px-2 py-2 rounded-md 
                   transition-all duration-100 items-center
                    dark:text-white hover:bg-blue-600  ${
                      Router.pathname === "/users"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
          >
            <div className="w-4 h-4 text-gray-200">
              <SortAscendingIcon className="w-4 h-4" />
            </div>
            <button
              class={`flex items-center justify-between px-5  py-1 font-normal
                    transition duration-75 rounded-lg
                    group dark:text-white 
                    ${Report && "text-gray-400"} `}
            >
              <span class="  w-14">Reports</span>
              {ReportDropdown ? (
                <ChevronUpIcon className="w-4 h-4 ml-14" />
              ) : (
                <ChevronDownIcon className="w-4 h-4 ml-14" />
              )}
            </button>
          </a>
        </div>
        <ul
          class={`${
            ReportDropdown ? "innline-flex" : "hidden"
          }  py-2 space-y-2`}
        >
          <li>
            <Link href="/users">
              <a class="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                Transactions
              </a>
            </Link>
          </li>
          <li>
            <Link href="/ecommerce/orders">
              <a class="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                Common Report
              </a>
            </Link>
          </li>
        </ul>
      </li>
    </div>
  );
}

export default Dropdown;

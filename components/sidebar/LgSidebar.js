import Link from "next/link";
import logo from "../../pages/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";

import {
  HomeIcon,
  SortAscendingIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

export default function LgSidebar({ Mobilesidebar, setMobileSidebar }) {
  const router = useRouter();
  const [Dropdown, setDropdown] = useState(false);

  // console.log(router.pathname.includes("/cardcenter"));
  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 transform h-screen  w-72 -translate-x-64  shrink-0  dark:bg-slate-800 bg-white p-4 transition-all duration-200 ease-in-out
          ${
            Mobilesidebar
              ? "hidden transition-all duration-500"
              : " innline-block"
          }`}
      >
        {/* Logo */}
        <div className="  w-48 md:ml-10 overflow-hidden z-96">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={38}
            className="cursor-pointer"
          />
          <hr className="border-bn mt-3 border-gray-200 dark:border-gray-600" />
        </div>
        {/* Links */}
        <div className="w-48 mt-2   ">
          <ul className="mt-1 text-sm dark:text-white space-y-1 ">
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/dashboard">
                <a
                  className={` flex  px-2 py-3 rounded-md   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/dashboard" &&
                        "bg-blue-700 text-white"
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">Dashboard</span>
                </a>
              </Link>
            </li>
            {/* link with dropdown */}
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/wallet">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/wallet" &&
                        "bg-blue-700 text-white"
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">my wallet</span>
                </a>
              </Link>
            </li>

            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/transactions">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                  ${
                    router.pathname === "/transactions" ||
                    router.pathname === "/transactions/[id]"
                      ? "bg-blue-700 text-white"
                      : ""
                  }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">transactions</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/invoices">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                  ${
                    router.pathname === "/invoices" ||
                    (router.pathname === "/invoices/[id]" &&
                      "bg-blue-700 text-white")
                  }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">invoices</span>
                </a>
              </Link>
            </li>

            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/cardcenter">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/cardcenter" &&
                        "bg-blue-700 text-white"
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">card Center</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/remittance">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/remittance" &&
                        "bg-blue-700 text-white"
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SortAscendingIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5"> Remittance</span>
                </a>
              </Link>
            </li>
            {/*  dropdown*/}
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setDropdown(!Dropdown)}
            >
              <a className="flex  px-2 py-2 rounded-md hover:bg-blue-100 text-gray-500 dark:text-gray-300   transition-all duration-100 items-center dark:text-white ">
                <div className="w-4 h-4 text-gray-200">
                  <SortAscendingIcon className="w-4 h-4" />
                </div>
                <button
                  type="button"
                  class="flex items-center w-full  text-sm font-normal text-gray-600 transition duration-75 rounded-lg group dark:text-white dark:hover:bg-gray-700"
                >
                  <span
                    class="flex-1 ml-3 text-left whitespace-nowrap"
                    sidebar-toggle-item
                  >
                    E-commerce
                  </span>
                  {Dropdown ? (
                    <ChevronDownIcon className="w-4 h-4" />
                  ) : (
                    <ChevronUpIcon className="w-4 h-4" />
                  )}
                </button>
              </a>

              <ul
                class={`${
                  Dropdown ? "innline-flex" : "hidden"
                }  py-2 space-y-2`}
              >
                <li>
                  <Link href="/ecommerce/orders">
                    <a
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                      class="flex items-center w-full p-2 text-[15px] font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                    >
                      Products
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <hr className="border-b-1 mt-2 border-gray-200" />
          </ul>
        </div>
      </div>
    </div>
  );
}

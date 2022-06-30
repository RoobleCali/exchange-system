import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import logo from "../../pages/assets/logo2.png";
import Image from "next/image";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import {
  HomeIcon,
  SortAscendingIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();
  const [Dropdown, setDropdown] = useState(false);
  const [Button, setButton] = useState(false);
  const [Report, setReport] = useState(false);
  const [ReportDropdown, setReportDropdown] = useState(false);

  const sidebar = useRef(null);
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });
  // close on click outside

  const handleClickOutside = (e) => {
    if (sidebar.current && !sidebar.current.contains(e.target)) {
      setSidebarOpen(false);
    }
  };
  useEffect(() => {
    if (sidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    }
  }, [sidebarOpen]);
  return (
    <div className="shadow-xl">
      {/* Sidebar backdrop (mobile only) */}
      <div
        className={`fixed inset-0 bg-white text-white bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`flex text-sm 	flex-col absolute z-40 left-0 top-0  
        transform h-screen    w-64 lg:w-72  shrink-0  dark:bg-slate-700 bg-white p-4 transition-all duration-200 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-64"}`}
        ref={sidebar}
      >
        {/* Logo */}
        <div className="w-40 pr-3 mb-3 ml-10  sm:px-2">
          <Image src={logo} alt="logo" />
          <hr className="mt-3 border-gray-200 border-bn dark:border-gray-600" />
        </div>
        {/* Links */}
        <div className="w-48 mt-5 ">
          <ul className="mt-1 text-[13px] dark:text-white space-y-1.5 ">
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/dashboard">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white  ${
                    !sidebarOpen && "ml-0"
                  } transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/dashboard"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">Dashboard</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/wallet">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/wallet"
                          ? "bg-blue-700 text-white"
                          : ""
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
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/clients">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/clients"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">Clients</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/transactions">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/transactions" ||
                        router.pathname === "/transactions/[id]"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">transactions</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/invoices">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                  ${
                    router.pathname === "/invoices" ||
                    router.pathname === "/invoices/[id]"
                      ? "bg-blue-700 text-white"
                      : ""
                  }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">invoices</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/branches">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/branches"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">Branches</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/cardcenter">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/cardcenter"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">card Center</span>
                </a>
              </Link>
            </li>
            <li
              className="text-gray-500 dark:text-gray-300"
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <Link href="/remittance">
                <a
                  className={` flex  px-2 py-3 rounded-md hover:bg-blue-700 hover:text-white   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/remittance"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                  onClick={() => setSidebarOpen(!sidebarOpen)}
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
              className={`  ${!Button || (Button && "text-gray-500")}`}
              onClick={() => setDropdown(!Dropdown)}
            >
              <div onClick={() => setButton(!Button)}>
                <a
                  className={`flex  px-2 py-2 rounded-md 
                   transition-all duration-100 items-center
                    dark:text-white hover:bg-blue-600 hover:text-gray-100
                      ${
                        router.pathname === "/users" ||
                        router.pathname === "/roles"
                          ? "bg-blue-600 text-white"
                          : ""
                      }`}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SortAscendingIcon className="w-4 h-4" />
                  </div>
                  <button
                    className={`flex items-center justify-between px-5  py-1 font-normal
                    transition duration-75 rounded-lg
                    hover:text-gray-200
                    group dark:text-white text-gray-500

                    ${
                      router.pathname === "/users" ||
                      router.pathname === "/roles"
                        ? "text-white"
                        : ""
                    }
                    `}
                  >
                    <span className="-ml-2 w-14">Users</span>
                    {Dropdown ? (
                      <ChevronUpIcon className="w-4 h-4 ml-16" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 ml-16" />
                    )}
                  </button>
                </a>
              </div>
              <ul
                className={`${
                  Dropdown ? "innline-flex" : "hidden"
                }  py-2 space-y-2`}
              >
                <li>
                  <Link href="/users">
                    <a
                      className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      users
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/roles">
                    <a
                      className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11"
                      onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                      Roles
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            {/* reports */}
            <li
              className={`  ${!Report || (Report && "text-gray-400")}`}
              onClick={() => setReportDropdown(!ReportDropdown)}
            >
              <div onClick={() => setReportDropdown(!ReportDropdown)}>
                <a
                  className={`flex  px-2 py-2 rounded-md 
                   transition-all duration-100 items-center
                   text-gray-400
                    dark:text-white hover:text-gray-200 hover:bg-blue-600  ${
                      router.pathname === "/Report"
                        ? "bg-blue-600 text-white"
                        : ""
                    }`}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SortAscendingIcon className="w-4 h-4" />
                  </div>
                  <button
                    className={`flex items-center justify-between px-5  py-1 font-normal
                    transition duration-75 rounded-lg
                    group dark:text-white 
                    ${Report && "text-gray-400"} `}
                  >
                    <span className=" w-14">Reports</span>
                    {ReportDropdown ? (
                      <ChevronUpIcon className="w-4 h-4 ml-14" />
                    ) : (
                      <ChevronDownIcon className="w-4 h-4 ml-14" />
                    )}
                  </button>
                </a>
              </div>
              <ul
                className={`${
                  ReportDropdown ? "innline-flex" : "hidden"
                }  py-2 space-y-2`}
              >
                <li>
                  <Link href="/">
                    <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                      Transactions
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                      Common Report
                    </a>
                  </Link>
                </li>
              </ul>
            </li>
            <hr className="mt-2 border-gray-200 border-b-1" />
          </ul>
        </div>
      </div>
    </div>
  );
}

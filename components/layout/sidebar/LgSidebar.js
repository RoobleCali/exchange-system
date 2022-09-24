import { sidebarData } from "./SidebarData";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { canView, decodeToken, getToken } from "../../utils/utils";
import jwtDecode from "jwt-decode";
export default function LgSidebar({ setSidebarOpen, Mobilesidebar }) {
  const router = useRouter();
  const [Dropdown, setDropdown] = useState(false);
  const token = getToken();

  const decoded = decodeToken();

  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 transform h-screen  w-72 -translate-x-64  shrink-0  dark:bg-slate-800 bg-white p-4 transition-all duration-200 ease-in-out
          ${Mobilesidebar ? "hidden" : "flex"}
          `}
      >
        {/* Logo */}
        <Logo />
        {/* Links */}
        <div className="mt-5 text-gray-600 dark:text-white">
          {decoded &&
            decoded.userType === "HQ-ADMIN" &&
            sidebarData.map((item, index) => {
              const link = item.link;
              if (item.children) {
                return (
                  <div key={index}>
                    <div>
                      <a
                        className={` flex  cursor-pointer  py-3 rounded-md space-x-3 ml-1 justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                     ${
                       router.pathname.replace("/", "") == "users" ||
                       router.pathname.replace("/", "") == "roles"
                         ? "bg-blue-700  text-white"
                         : ""
                     } `}
                        onClick={() => setDropdown(!Dropdown)}
                      >
                        <span className="w-3"> {item.icon}</span>
                        <span className="flex-1">{item.title}</span>
                        <ChevronDownIcon className="w-4 h-4 " />
                      </a>
                    </div>

                    <ul
                      className={`mt-1 space-y-1 ${
                        Dropdown ? "block " : "hidden"
                      }`}
                    >
                      {item.children.map((child, index) => {
                        const link = child.link;
                        return (
                          <li
                            className="w-full -ml-1 text-gray-500 "
                            key={index}
                          >
                            <Link href={link}>
                              <a
                                className={` flex  py-3 rounded-md space-x-3 ml-2 w-full cursor-pointer  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                    
                    `}
                                onClick={() => setDropdown(false)}
                              >
                                <div className="w-3 text-left">{item.icon}</div>
                                <span className="text-left">{child.title}</span>
                              </a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              }
              return (
                <div className="px-1 mt-3 dark:text-white " key={index}>
                  <Link href={link}>
                    <a
                      className={` flex  px-2 py-3 rounded-md space-x-3 transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
       ${
         router.pathname.replace("/", "") == link
           ? "bg-blue-700  text-white"
           : ""
       } `}
                    >
                      <span className="w-3"> {item.icon}</span>
                      <span>{item.title}</span>
                    </a>
                  </Link>
                </div>
              );
            })}
          <div>
            {decoded &&
              sidebarData.map((item, index) => {
                return decoded.roles.map((access) => {
                  const link = access.path.toLowerCase();
                  const path = item.link;
                  if (item.children) {
                    if (item.children[0].link === link) {
                      return (
                        <div key={index}>
                          <div>
                            <a
                              className={` flex  py-3 cursor-pointer rounded-md space-x-3 ml-1 justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                           ${
                             router.pathname.replace("/", "") == "users" ||
                             router.pathname.replace("/", "") == "roles"
                               ? "bg-blue-700  text-white"
                               : ""
                           } `}
                              onClick={() => setDropdown(!Dropdown)}
                            >
                              <span className="w-3"> {item.icon}</span>
                              <span className="flex-1">{item.title}</span>
                              <ChevronDownIcon className="w-4 h-4 " />
                            </a>
                          </div>

                          <ul
                            className={`mt-1 space-y-1 ${
                              Dropdown ? "block " : "hidden"
                            }`}
                          >
                            {item.children.map((child, index) => {
                              const link = child.link;
                              return (
                                <li
                                  className="w-full -ml-1 text-gray-500 "
                                  key={index}
                                >
                                  <Link href={link}>
                                    <a
                                      className={` flex  py-3 rounded-md space-x-3 ml-2 w-full cursor-pointer  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                             `}
                                      onClick={() => setDropdown(false)}
                                    >
                                      <div className="w-3 text-left">
                                        {item.icon}
                                      </div>
                                      <span className="text-left">
                                        {child.title}
                                      </span>
                                    </a>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      );
                    }
                  }
                  if (link == path && token) {
                    return (
                      <ul className="px-1 mt-3 dark:text-white " key={index}>
                        <Link href={link}>
                          <a
                            className={` flex  px-2 py-3 rounded-md space-x-3 transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                              ${
                                router.pathname.replace("/", "") == link
                                  ? "bg-blue-700  text-white"
                                  : ""
                              }
              
          
                      `}
                          >
                            <span className="w-3"> {item.icon}</span>
                            <span>{item.title}</span>
                          </a>
                        </Link>
                      </ul>
                    );
                  }
                });
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

import logo from "../../pages/assets/logo.png";
import Image from "next/image";
import { sidebarData } from "./SidebarData";
import jwt_decode from "jwt-decode";
import { getCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";

export default function LgSidebar() {
  const router = useRouter();
  const [Dropdown, setDropdown] = useState(false);
  const token = getCookie("token");
  const decoded = jwt_decode(token);
  console.log(decoded.userType);
  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 transform h-screen  w-72 -translate-x-64  shrink-0  dark:bg-slate-800 bg-white p-4 transition-all duration-200 ease-in-out
       `}
      >
        {/* Logo */}
        <div className="w-48 overflow-hidden md:ml-10 z-96">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={38}
            className="cursor-pointer"
          />
          <hr className="mt-3 border-gray-200 border-bn dark:border-gray-600" />
        </div>
        {/* Links */}
        <div className="mt-5 text-gray-600 dark:text-white">
          {/* check user typw if user is admin  can access all sidebar links */}
          {decoded.userType === "BranchAdmin"
            ? sidebarData.map((item, index) => {
                const link = item.link;
                console.log(link);
                if (item.children) {
                  return (
                    <div key={index}>
                      <div
                        className={` flex  py-3 rounded-md space-x-3 ml-2  justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                     ${
                       router.pathname.replace("/", "") == link
                         ? "bg-blue-700  text-white"
                         : ""
                     }
                            `}
                        onClick={() => setDropdown(!Dropdown)}
                      >
                        <span className="w-3"> {item.icon}</span>
                        <span className="flex-1">{item.title}</span>
                        <ChevronDownIcon className="w-4 h-4 " />
                      </div>
                      <ul
                        className={`mt-1 space-y-1 ${
                          Dropdown ? "flex " : "hidden"
                        }`}
                      >
                        {item.children.map((child, index) => {
                          const link = child.link;
                          return (
                            <li className="text-gray-500 " key={index}>
                              <Link href={link}>
                                <a
                                  className={` flex  px-24 py-3 rounded-md  transition-all duration-100
                                 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700
                                  hover:text-white  
                                  ${
                                    router.pathname == link
                                      ? "bg-blue-700  text-white"
                                      : ""
                                  }

                                       `}
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
                        <div className="w-3"> {item.icon}</div>
                        <span>{item.title}</span>
                      </a>
                    </Link>
                  </ul>
                );
              })
            : sidebarData.map((item, index) => {
                return decoded.roles.map((access) => {
                  const link = access.path.toLowerCase();
                  const path = item.link;
                  if (link == path) {
                    // check if item has children
                    if (item.children) {
                      return (
                        <div key={index}>
                          <div
                            className={` flex  py-3 rounded-md space-x-3 ml-2  justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                           ${
                             router.pathname == link
                               ? "bg-blue-700  text-white"
                               : ""
                           }
                                  `}
                            onClick={() => setDropdown(!Dropdown)}
                          >
                            <span className="w-3"> {item.icon}</span>
                            <span className="flex-1">{item.title}</span>
                            <ChevronDownIcon className="w-4 h-4 " />
                          </div>
                          <ul
                            className={`mt-1 space-y-1 ${
                              Dropdown ? "flex " : "hidden"
                            }`}
                          >
                            {item.children.map((child, index) => {
                              const link = child.link;
                              return (
                                <li className="text-gray-500 " key={index}>
                                  <Link href={link}>
                                    <a
                                      className={` flex  px-24 py-3 rounded-md  transition-all duration-100
                                       items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700
                                        hover:text-white  
                                      ${
                                        router.pathname == link
                                          ? "bg-blue-700  text-white"
                                          : ""
                                      }
                                             `}
                                      onClick={() => setSidebarOpen(false)}
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
                            <div className="w-3"> {item.icon}</div>
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
  );
}

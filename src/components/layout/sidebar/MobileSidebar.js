import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import logo from "../../../pages/assets/logo2.png";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import { sidebarData } from "././SidebarData";
import { decodeToken, getToken } from "../../utils/utils";
export default function MobileSidebar({ sidebarOpen, setSidebarOpen }) {
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const token = getToken();
  useEffect(() => {
    if (!token) {
      router.replace({ pathname: "/login" });
    }
  }, [token, router]);
  const decoded = decodeToken();
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
  }, [sidebarOpen, handleClickOutside]);
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
        <div className="w-40 pr-3 mb-3 ml-10 sm:px-2">
          <Image src={logo} alt="logo" />
          <hr className="mt-3 border-gray-200 border-bn dark:border-gray-600" />
        </div>
        {/* Links */}
        <div className="mt-5 text-gray-600 list-none dark:text-white">
          {/* Links */}
          {decoded &&
            decoded.userType === "HQ-ADMIN" &&
            sidebarData.map((item, index) => {
              const link = item.link;
              const path = router.pathname.replace("/", "");

              // eslint-disable-next-line react/jsx-key

              {
                if (!item.submenu) {
                  return (
                    <li key={index}>
                      <Link
                        href={`${item.link}`}
                        className={`
                      
                `}
                      >
                        <a
                          className={`flex items-center p-2 mt-5 text-sm text-gray-400 rounded-md cursor-pointer gap-x-3 first-letter hover:bg-light-white transition-all duration-100
                      
                ${link == path && "bg-blue-700  text-white"}
                      `}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="block w-5 text-xl">{item.icon}</span>
                          <span className={`   text-sm font-normal flex-1`}>
                            {item.title}
                          </span>
                        </a>
                      </Link>
                    </li>
                  );
                } else {
                  return (
                    <>
                      <a
                        className="flex items-center p-2 mt-3 text-sm text-gray-400 rounded-md cursor-pointer text-md gap-x-3 first-letter hover:bg-light-white"
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      >
                        <span className="block w-5 text-xl">{item.icon}</span>
                        <span className={`   text-sm font-medium flex-1`}>
                          {item.title}
                        </span>
                        <ChevronDownIcon
                          className={`w-4   ${submenuOpen && "rotate-180"}`}
                        />
                      </a>
                      <ul>
                        {submenuOpen &&
                          item.children.map((item) => (
                            // eslint-disable-next-line react/jsx-key
                            <li
                              className="flex items-center p-2 mt-3 text-sm text-gray-300 rounded-md cursor-pointer gap-x-3 first-letter hover:bg-light-white"
                              onClick={() => setSidebarOpen(false)}
                            >
                              <span className="w-4">{item.icon}</span>
                              <span className={`text-md  `}>{item.title}</span>
                            </li>
                          ))}
                      </ul>
                    </>
                  );
                }
              }
            })}

          {decoded &&
            sidebarData.map((item, index) => {
              return decoded.roles.map((access) => {
                const link = access.path.toLowerCase();

                const path = item.link;
                if (link == path) {
                  console.log(link);
                }
                if (link == path) {
                  if (!item.submenu) {
                    return (
                      <li key={index}>
                        <Link
                          href={`${item.link}`}
                          className={`
                        
                  `}
                        >
                          <a
                            className={`flex items-center p-2 mt-1 text-sm text-gray-300 rounded-md cursor-pointer gap-x-3 first-letter hover:bg-light-white transition-all duration-100
                        
                  ${link == path && "bg-blue-700  text-white"}
                        `}
                          >
                            <span className="block w-5 text-xl">
                              {item.icon}
                            </span>
                            <span
                              className={`  
                              } text-sm font-normal flex-1`}
                            >
                              {item.title}
                            </span>
                          </a>
                        </Link>
                      </li>
                    );
                  }
                  return (
                    <>
                      <a
                        className="flex items-center p-2 mt-3 text-sm text-gray-300 rounded-md cursor-pointer text-md gap-x-3 first-letter hover:bg-light-white"
                        onClick={() => setSubmenuOpen(!submenuOpen)}
                      >
                        <span className="block w-5 text-xl">{item.icon}</span>
                        <span className={`     text-sm font-medium flex-1`}>
                          {item.title}
                        </span>
                        <ChevronDownIcon
                          className={`w-4   ${submenuOpen && "rotate-180"}`}
                        />
                      </a>
                      <ul>
                        {/* {item.children.map((item) => {
                      console.log(item);
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <li className="flex items-center p-2 mt-3 text-sm text-gray-300 rounded-md cursor-pointer gap-x-3 first-letter hover:bg-light-white">
                          <span className="w-4">{item.icon}</span>
                          <span
                            className={`text-md ${
                              Collapse ? "flex" : "hidden"
                            }`}
                          >
                            {link}
                          </span>
                        </li>
                      );
                    })} */}
                      </ul>
                    </>
                  );
                }
              });
            })}
        </div>
      </div>
    </div>
  );
}

// styles

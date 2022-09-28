import { sidebarData } from "./SidebarData";
import Link from "next/link";
import { Router, useRouter } from "next/router";
import { useState } from "react";
import logo from "../../../pages/assets/logo.png";
import { decodeToken, getToken } from "../../utils/utils";
import Image from "next/image";
import { ChevronDownIcon } from "@heroicons/react/outline";
export default function LgSidebar({ Collapse }) {
  const router = useRouter();
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const decoded = decodeToken();
  console.log(decoded);
  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs mt-3	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 list-none transform h-screen p-5   -translate-x-64  shrink-0  dark:bg-slate-800 bg-white  transition-all duration-200 ease-in-out
          
          ${Collapse ? "w-72" : "w-20"}
          `}
      >
        {/* Logo */}
        <div className="-pl-4 z-96">
          <h1>Tick Entry</h1>
        </div>
        {/* Links */}
        {decoded &&
          decoded.userType === "HQ-ADMIN" &&
          sidebarData.map((item, index) => {
            const link = item.link;
            const path = router.pathname.replace("/", "");

            // eslint-disable-next-line react/jsx-key

            return (
              <li key={index}>
                <Link
                  href={`${item.link}`}
                  className={`
                      
                `}
                >
                  <a
                    className={`flex items-center p-2 mt-5 list-none text-sm text-gray-500 rounded-md cursor-pointer gap-x-3 first-letter hover:bg-light-white transition-all duration-100
                      
                ${link == path && "bg-blue-700  text-gray-300"}
                      `}
                  >
                    <span className="block w-5 text-xl">{item.icon}</span>
                    <span
                      className={`   ${
                        Collapse ? "flex" : "hidden"
                      } text-sm font-normal flex-1`}
                    >
                      {item.title}
                    </span>
                  </a>
                </Link>
              </li>
            );
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
                          <span className="block w-5 text-xl">{item.icon}</span>
                          <span
                            className={`   ${
                              Collapse ? "flex" : "hidden"
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
                      <span
                        className={`   ${
                          Collapse ? "flex" : "hidden"
                        } text-sm font-medium flex-1`}
                      >
                        {item.title}
                      </span>
                      <ChevronDownIcon
                        className={`w-4 ${Collapse ? "flex" : "hidden"} ${
                          submenuOpen && "rotate-180"
                        }`}
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
  );
}

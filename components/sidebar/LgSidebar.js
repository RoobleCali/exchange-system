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
import { sidebarData } from "./SidebarData";

export default function LgSidebar({ Mobilesidebar, setMobileSidebar }) {
  const router = useRouter();
  const [Dropdown, setDropdown] = useState(false);
  const [Button, setButton] = useState(false);
  const [Report, setReport] = useState(false);
  const [ReportDropdown, setReportDropdown] = useState(false);

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
        {/* map sidebar data and nested sidebar data */}
        {sidebarData.map((item) => (
          <div>
            <ul className="mt-1 text-[12px] dark:text-white space-y-1 ">
              <li>
                <Link href={"item.link"}>
                  <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                    {item.title}
                  </a>
                </Link>
              </li>
              {/* check item name with submenu */}
            </ul>{" "}
            {item.name === "Reports" ? (
              item.children.map((subitem) => (
                <li>
                  <Link href="">
                    <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
                      {subitem.name}
                    </a>
                  </Link>
                </li>
              ))
            ) : (
              <></>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

import Link from "next/link";
import logo from "../../pages/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { sidebarData } from "./SidebarData";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { getCookie } from "cookies-next";

export default function LgSidebar() {
  const token = getCookie("token");
  const decoded = jwt_decode(token);
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
          {sidebarData.map((item, index) => {
            {
              decoded.roles.map((access) => {
                const link = access.path.toLowerCase();
                const path = item.link;
                if (link == path) {
                  console.log("can access  " + link);
                }
              });
            }
          })}
        </div>
      </div>
    </div>
  );
}

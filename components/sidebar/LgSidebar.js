import Link from "next/link";

import { useRouter } from "next/router";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import { useState } from "react";
import { sidebarData } from "./SidebarData";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import Logo from "./Logo";

export default function LgSidebar() {
  const { accessToken } = useSelector(
    (state) => state.transactions.transactions
  );
  const decoded = jwt_decode(accessToken);
  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 transform h-screen  w-72 -translate-x-64  shrink-0  dark:bg-slate-800 bg-white p-4 transition-all duration-200 ease-in-out
       `}
      >
        {/* Logo */}
        <Logo />
        {/* Links */}
        <div className="mt-5 text-gray-600 dark:text-white">
          {sidebarData.map((item, index) => {
            // check decoded token roles and compare with sidebar data roles and show only allowed pathnames
            {
              decoded.roles.map((access) => {
                // access tolowercase to compare with sidebar data path
                const link = access.path.toLowerCase();
                const path = item.link;
                // if path is equal to link then show the item and them
                if (path === link) {
                  console.log("authorized");
                }
              });
            }
          })}
        </div>
      </div>
    </div>
  );
}

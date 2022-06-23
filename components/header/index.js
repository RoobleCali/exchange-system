import {
  MoonIcon,
  SunIcon,
  MenuAlt2Icon,
  BellIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { useState } from "react";
import Avatar from "./Avatar";
function Header({
  sidebarOpen,
  setSidebarOpen,
  Mobilesidebar,
  setMobileSidebar,
}) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [DropdownOpen, setDropdownOpen] = useState(false);
  return (
    <header
      className={`sticky dark:text-white bg-white dark:bg-slate-800  top-0  border-b border-slate-200 z-30`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex space-x-2  items-center">
            {/* Hamburgers button */}
            <button
              className="text-slate-500 dark:text-gray-200 lg:hidden  hover:text-slate-600 "
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuAlt2Icon className="w-6 h-6" />
            </button>
            <button
              className="text-slate-500 hidden    lg:inline-flex hover:text-slate-600 "
              onClick={() => setMobileSidebar(!Mobilesidebar)}
            >
              <MenuAlt2Icon className="w-6 h-6" />
            </button>
            <p className="font-medium  text-sm  capitalize">
              {/* router pathname remove / */}
              {router.asPath.replace("/", "")}
            </p>
          </div>

          {/* Header: Right side */}
          <div className="flex space-x-3 items-center">
            {/* dark mode toggle  */}
            <div>
              {theme === "dark" ? (
                <MoonIcon
                  onClick={() => setTheme("light")}
                  className="w-7 cursor-pointer"
                />
              ) : (
                <SunIcon
                  onClick={() => setTheme("dark")}
                  className="w-7 cursor-pointer"
                />
              )}
            </div>
            <div>
              <BellIcon className="w-7 cursor-pointer" />
            </div>

            {/*  Divider */}
            <hr className="border-l border-slate-200" />
            {/* avatar and user role */}
            <div
              className="flex items-center h-24 "
              onClick={() => setDropdownOpen(!DropdownOpen)}
            >
              <div className=" text-[10px] truncate hidden sm:inline-block font-medium text-gray-600 dark:text-white">
                <div className="w-24 truncate">abdishakuur ally</div>
                <div className=" text-gray-500 w-24 truncate dark:text-gray-400">
                  web developer
                </div>
              </div>
              <Avatar />
            </div>
            {/* user avator */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

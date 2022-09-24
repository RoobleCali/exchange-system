import { MoonIcon, SunIcon, MenuAlt2Icon } from "@heroicons/react/outline";
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
  const { theme, setTheme } = useTheme("dark");
  const [DropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header
      className={`sticky dark:text-white bg-white dark:bg-slate-800  top-0  border-b border-slate-200 z-30`}
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 -mb-px">
          {/* Header: Left side */}
          <div className="flex items-center space-x-2">
            {/* Hamburgers button */}
            {/* mobile menu */}
            <button
              className="text-slate-500 dark:text-gray-200 lg:hidden hover:text-slate-600 "
              onClick={() => setSidebarOpen(!sidebarOpen)}
            >
              <MenuAlt2Icon className="w-6 h-6" />
            </button>
            {/* desktop menu */}
            <button
              className="hidden text-slate-500 lg:inline-flex hover:text-slate-600 "
              onClick={() => setMobileSidebar(!Mobilesidebar)}
            >
              <MenuAlt2Icon className="w-6 h-6" />
            </button>
            <p className="text-sm font-medium text-gray-600 capitalize dark:text-gray-200">
              {/* router pathname remove / */}
              {router.asPath.replace("/", "")}
            </p>
          </div>

          {/* Header: Right side */}
          <div className="flex items-center space-x-3 text-gray-600 dark:text-white">
            {/* dark mode toggle  */}
            <div>
              {theme === "dark" ? (
                <MoonIcon
                  onClick={() => setTheme("light")}
                  className="cursor-pointer w-7"
                />
              ) : (
                <SunIcon
                  onClick={() => setTheme("dark")}
                  className="cursor-pointer w-7"
                />
              )}
            </div>

            {/*  Divider */}
            <hr className="border-l border-slate-200" />
            {/* avatar and user role */}
            <div
              className="flex items-center h-24 "
              onClick={() => setDropdownOpen(!DropdownOpen)}
            >
              <div className=" text-[10px] truncate hidden sm:inline-block font-medium text-gray-600 dark:text-white">
                <div className="w-24 truncate">mohamed ahmed</div>
                <div className="w-24 text-gray-500 truncate dark:text-gray-400">
                  abdishakuur ally
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

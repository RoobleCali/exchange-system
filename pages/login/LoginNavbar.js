import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";
import Image from "next/image";
import React from "react";

function LoginNavbar() {
  const { theme, setTheme } = useTheme("light");
  console.log(theme);
  return (
    <div className="sticky top-0 z-30 overflow-hidden text-gray-700 shadow-md dark:text-gray-100 ">
      <div className="flex flex-wrap items-center justify-between p-2 px-2 text-center shadow-lg md:p-4 md:px-24 ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={36}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center space-x-3">
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
          <Link href="/login">
            <button
              type="button"
              className="px-5 py-2 text-sm font-medium text-white transition duration-500 ease-in-out transform bg-blue-700 rounded-lg hover:-translate-y-1 hover:scale-100 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginNavbar;

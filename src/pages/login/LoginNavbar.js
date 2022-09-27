/* eslint-disable react/jsx-no-comment-textnodes */
import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import logo from "../assets/logo2.png";
import Image from "next/image";
import React from "react";

function LoginNavbar() {
  const { theme, setTheme } = useTheme("light");
  console.log(theme);
  return (
    <div className="sticky top-0 left-0 z-40 flex items-center w-full p-2 scroll-smooth bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container">
        <div className="flex items-center justify-between ">
          <div className="w-48 overflow-hidden z-96">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={150}
                height={40}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div className="flex justify-end pr-5">
            <Link href="/login">
              <a
                href="signup.html"
                className="px-6 py-3 text-base font-medium text-white duration-300 ease-in-out bg-white rounded-lg signUpBtn bg-opacity-20 hover:bg-opacity-100 hover:text-dark"
              >
                Sign In
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginNavbar;

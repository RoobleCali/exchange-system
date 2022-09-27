import LoginNavbar from "./LoginNavbar";
import FormLogin from "./FormLogin";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import HomeImage from "../assets/homeImage.png";
function Index() {
  return (
    <div className="dark:bg-gray-800">
      <LoginNavbar />
      <div className="h-screen text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-slate-800">
        <div className="flex items-center justify-between px-10 py-10 mt-10 ">
          <div className="hidden md:flex">
            <Image
              src={HomeImage}
              width={600}
              height={600}
              alt="image"
              layout="fixed"
            />
          </div>
          <div className="space-y-3 mt-9">
            <FormLogin />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

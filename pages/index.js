import { useRouter } from "next/router";
import Image from "next/image";
import HomeImage from "../pages/assets/homeImage.png";
import LoginNavbar from "./login/LoginNavbar";
import { useEffect } from "react";
export default function Home() {
  const router = useRouter();

  return (
    <div className=" bg-gray-100 dark:bg-slate-800 transition-all duration-500 h-screen ">
      <LoginNavbar />
      <div className="flex items-center justify-between flex-col px-3 md:flex-row py-10 sm:px-24">
        <div className="flex-2  mt-9 w-full md:max-w-md">
          <h1 className="text-4xl md:text-4xl pb-3">
            you can make your Business More Profitable....
          </h1>
          <p className="text-xl">
            Just as peaple cannot live without eating, so abusiness cannot live
            without profit. Profit is not something to add on at the end, it is
            something to plane for in the beginning. To make good plane you need
            profitional accountant and this system is the next level of human
            accountant.
          </p>
        </div>
        <div className="">
          <Image src={HomeImage} alt="image" />
        </div>
      </div>
    </div>
  );
}

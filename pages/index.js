import { useRouter } from "next/router";
import Image from "next/image";
import HomeImage from "../pages/assets/homeImage.png";
import LoginNavbar from "./login/LoginNavbar";
import Link from "next/link";
import { getCookie } from "cookies-next";

export default function Home() {
  const clearData = () => {
    const token = getCookie("token");
    console.log(token);
    // Remove userData from localStorage
    // localStorage.removeItem("userData");
  };
  clearData();
  return (
    <div className="h-screen text-gray-600 bg-gray-100 dark:text-gray-200 dark:bg-slate-800">
      <LoginNavbar />
      <div className="flex flex-col-reverse items-center justify-between px-3 py-10 mt-10 md:flex-row md:py-24 sm:px-24">
        <div className="w-full space-y-3 flex-2 mt-9 md:max-w-md">
          <h1 className="pb-3 text-4xl md:text-4xl">
            you can make your Business More Profitable but How .. !
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Just as peaple cannot live without eating, so abusiness cannot live
            without profit. Profit is not something to add on at the end, it is
            something to plane for in the beginning. To make good plane you need
            profitional accountant and this system is the next level of human
            accountant.
          </p>
          <Link href="/login">
            <button
              type="button"
              className="py-2 text-sm font-medium text-white transition-all duration-200 bg-blue-700 rounded-lg dark:hover:text-gray-800 hover:text-gray-100 focus:ring-4 focus:ring-blue-300 px-9 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Get started
            </button>
          </Link>
        </div>
        <div className="">
          <Image src={HomeImage} alt="image" />
        </div>
      </div>
    </div>
  );
}

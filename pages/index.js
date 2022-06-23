import { useRouter } from "next/router";
import Image from "next/image";
import HomeImage from "../pages/assets/homeImage.png";
import LoginNavbar from "./login/LoginNavbar";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className=" bg-gray-100 dark:bg-slate-800  h-max ">
      <LoginNavbar />
      <div className="flex items-center justify-between  flex-col-reverse px-3 md:flex-row py-14 md:py-24 sm:px-24">
        <div className="flex-2  mt-9 w-full space-y-3 md:max-w-md">
          <h1 className="text-4xl md:text-4xl pb-3">
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
              className="text-white hover:text-gray-700 hover:bg-white bg-blue-700 transition-all duration-200   focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-9 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
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

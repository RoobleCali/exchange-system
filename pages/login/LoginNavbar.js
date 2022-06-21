import Link from "next/link";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import logo from "../assets/logo.png";
import Image from "next/image";
export default () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className=" sticky top-0 z-30  overflow-hidden shadow-md ">
      <div className="flex items-center flex-wrap  text-center justify-between shadow-lg p-2 px-2 md:p-4 md:px-24 ">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={190}
            height={38}
            className="cursor-pointer"
          />
        </Link>

        <div className="flex items-center  space-x-3">
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
          <Link href="/login">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

import Link from "next/link";
import logo from "../../pages/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import {
  HomeIcon,
  SortAscendingIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/outline";

export default function LgSidebar({ Mobilesidebar, setMobileSidebar }) {
  const router = useRouter();
  return (
    <div className="shadow-xl">
      {/* Sidebar */}
      <div
        className={`flex text-xs	flex-col absolute z-40 left-0 top-0 lg:static lg:left-auto 
          lg:top-auto lg:translate-x-0 transform h-screen  w-72 -translate-x-64  shrink-0  dark:bg-slate-900 bg-white p-4 transition-all duration-200 ease-in-out
          ${
            Mobilesidebar
              ? "hidden transition-all duration-500"
              : " innline-block"
          }`}
      >
        {/* Logo */}
        <div className="  w-48 md:ml-10 ">
          <Image src={logo} alt="logo" />
          <hr className="border-bn mt-3   border-gray-200 dark:border-gray-600" />
        </div>
        {/* Links */}
        <div className="w-48 mt-2   ">
          <ul className="mt-1 dark:text-white space-y-1 ">
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/dashboard">
                <a
                  className={` flex  px-2 py-3 rounded-md   transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/dashboard"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">Dashboard</span>
                </a>
              </Link>
            </li>
            {/* link with dropdown */}
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/wallet">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/wallet"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <HomeIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">my wallet</span>
                </a>
              </Link>
            </li>

            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/transactions">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/transactions" ||
                        router.pathname === "/transactions/[id]"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">transactions</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/invoices">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                  ${
                    router.pathname === "/invoices" ||
                    router.pathname === "/invoices/[id]"
                      ? "bg-blue-700 text-white"
                      : ""
                  }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">invoices</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/cardcenter">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/cardcenter"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SwitchHorizontalIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5">card Center</span>
                </a>
              </Link>
            </li>
            <li className="text-gray-500 dark:text-gray-300">
              <Link href="/remittance">
                <a
                  className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13
              
                      ${
                        router.pathname === "/remittance"
                          ? "bg-blue-700 text-white"
                          : ""
                      }
                      `}
                >
                  <div className="w-4 h-4 text-gray-200">
                    <SortAscendingIcon className="w-4 h-4" />
                  </div>
                  <span className="ml-5"> Remittance</span>
                </a>
              </Link>
            </li>
            <hr className="border-b-1 mt-2 border-gray-200" />
          </ul>
        </div>
      </div>
    </div>
  );
}
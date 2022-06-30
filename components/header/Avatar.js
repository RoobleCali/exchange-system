import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import abdishakuur from "../../pages/assets/abdishakuur.jpg";
export default function Avatar() {
  return (
    <div className="flex justify-end px-6 py-3 ">
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center cursor-pointer ">
          <Image
            src={abdishakuur}
            width={30}
            height={30}
            className="border-2 rounded-lg border-slate-200"
            alt="avatar"
          />
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="caret-down"
            className="w-2 ml-2"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512"
          >
            <path
              fill="currentColor"
              d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
            ></path>
          </svg>
        </Menu.Button>

        <Transition
          enter-active-classname="transition duration-100 ease-out transform"
          enter-from-classname="scale-90 opacity-0"
          enter-to-classname="scale-100 opacity-100"
          leave-active-classname="transition duration-100 ease-in transform"
          leave-from-classname="scale-100 opacity-100"
          leave-to-classname="scale-90 opacity-0"
        >
          <Menu.Items className="absolute right-0 w-48 mt-2 overflow-hidden text-gray-700 origin-top-right bg-white border rounded-md shadow-lg focus:outline-none dark:bg-gray-800 dark:text-gray-200">
            <Menu.Item v-slot="{active}">
              <a href="#" className="block px-4 py-2 text-sm ">
                My Profile
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active, disabled}" disabled>
              <a href="#" className="block px-4 py-2 text-sm ">
                Settings
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active}">
              <a href="#" className="block px-4 py-2 text-sm ">
                Help
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active}">
              <Link href="/login">
                <a className="block px-4 py-2 text-sm ">Log out</a>
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

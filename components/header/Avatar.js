import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import abdishakuur from "../../pages/assets/abdishakuur.jpg";

export default function Avatar() {
  return (
    <div className="flex justify-end py-3 px-6 ">
      <Menu as="div" className="relative">
        <Menu.Button className="cursor-pointer flex items-center ">
          <Image
            src={abdishakuur}
            width={30}
            height={30}
            className="rounded-lg border-2 border-slate-200"
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
          enter-active-classname="transition transform duration-100 ease-out"
          enter-from-classname="opacity-0 scale-90"
          enter-to-classname="opacity-100 scale-100"
          leave-active-classname="transition transform duration-100 ease-in"
          leave-from-classname="opacity-100 scale-100"
          leave-to-classname="opacity-0 scale-90"
        >
          <Menu.Items className="origin-top-right mt-2 focus:outline-none absolute right-0 bg-white overflow-hidden rounded-md shadow-lg border w-48">
            <Menu.Item v-slot="{active}">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                My Profile
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active, disabled}" disabled>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Settings
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active}">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Help
              </a>
            </Menu.Item>
            <Menu.Item v-slot="{active}">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700">
                Log out
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

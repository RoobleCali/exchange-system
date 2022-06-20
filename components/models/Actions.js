/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  InformationCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import Link from "next/link";
import ViewModel from "./ViewModel";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Actions({ link }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full rounded-md text-black   px-4 py-2 bg-gray-50 dark:bg-gray-800  dark:text-white text-sm font-medium  ">
            <DotsVerticalIcon className="w-5 h-5" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 overflow-hidden right-0  mr-10 w-56 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none">
            <div className="py-2 space-y-2">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                      "  px-4 py-2 flex  items-center overflow-hidden  text-sm"
                    )}
                    onClick={() => setOpen(!open)}
                  >
                    <XCircleIcon className="w-5 opacity-60 text-red-500" />
                    <span className="ml-2"> Old Transactions</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href={link}>
                    <a
                      className={classNames(
                        active ? "bg-gray-100 text-gray-900 " : "text-gray-700",
                        "  px-4 py-2 flex   items-center    text-sm"
                      )}
                    >
                      <InformationCircleIcon className="w-5 text-gray-500" />
                      <span className="ml-2">View Transactions</span>
                    </a>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      <ViewModel open={open} setOpen={setOpen} />
    </div>
  );
}

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChevronUpIcon } from "@heroicons/react/outline";
export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  if (item.children) {
    return (
      <div className="w-48 mt-0">
        <ul className="mt-1 text-[12px] dark:text-white space-y-1 ">
          <div
            className={
              open
                ? "sidebar-item flex  open  "
                : "hidden cursor-pointer sidebar-item hover:bg-blue-600"
            }
            onClick={() => setOpen(!open)}
          >
            <div className="flex items-center justify-center cursor-pointer sidebar-title">
              <span>
                {item.icon && <i className={item.icon}></i>}
                {item.title}
              </span>
              {open ? (
                <ChevronUpIcon className="w-6" />
              ) : (
                <ChevronDownIcon className="w-6" />
              )}
            </div>
            <div className="sidebar-content">
              {item.children.map((child, index) => (
                <SidebarItem key={index} item={child} />
              ))}
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    const link = item.link;
    console.log(link);
    return (
      <Link href={link}>
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
  
          ${router.pathname === { link } ? "bg-blue-700 text-white" : ""}
          `}
        >
          <div className="w-4 h-4 text-gray-600">
            {item.icon && <i className={item.icon}></i>}
          </div>
          <span className="ml-5">{item.title}</span>
        </a>
      </Link>
    );
  }
}

import React, { useState, useEffect, useRef } from "react";

import LgSidebar from "./LgSidebar";
import MobileSidebar from "./MobileSidebar";

function SampleSidebar({ sidebarOpen, setSidebarOpen, Collapse, setCollapse }) {
  return (
    <main className="shadow-xl">
      {/* Sidebar */}

      <div className="hidden lg:inline-flex ">
        <LgSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          Collapse={Collapse}
          setCollapse={setCollapse}
        />
      </div>
      <div className="inline-flex lg:hidden">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </main>
  );
}

export default SampleSidebar;

// if (item.children) {
//   return (
//     <div></div>
//     // <div key={index}>
//     //   <div>
//     //     <a
//     //       className={` flex  py-3 cursor-pointer rounded-md space-x-3 ml-1 justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
//     //  ${
//     //    router.pathname.replace("/", "") == "users" ||
//     //    router.pathname.replace("/", "") == "roles"
//     //      ? "bg-blue-700  text-white"
//     //      : ""
//     //  } `}
//     //       onClick={() => setDropdown(!Dropdown)}
//     //     >
//     //       <span className="w-3"> {item.icon}</span>
//     //       <span className="flex-1">{item.title}</span>
//     //       <ChevronDownIcon className="w-4 h-4 " />
//     //     </a>
//     //   </div>
//     //   <div>
//     //     <ul
//     //       className={`mt-1 space-y-1 ${
//     //         Dropdown ? "block " : "hidden"
//     //       }`}
//     //     >
//     //       {item.children.map((child, index) => {
//     //         const link = child.link;
//     //         return (
//     //           <li
//     //             className="w-full -ml-1 text-gray-500 "
//     //             key={index}
//     //             onClick={() => {
//     //               setSidebarOpen(false);
//     //             }}
//     //           >
//     //             <Link href={link}>
//     //               <a
//     //                 className={` flex  py-3 rounded-md space-x-3 ml-2 w-full cursor-pointer  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white

//     // `}
//     //                 onClick={() => setDropdown(false)}
//     //               >
//     //                 <div className="w-3 text-left">
//     //                   {item.icon}
//     //                 </div>
//     //                 <span className="text-left">
//     //                   {child.title}
//     //                 </span>
//     //               </a>
//     //             </Link>
//     //           </li>
//     //         );
//     //       })}
//     //     </ul>
//     //   </div>
//     // </div>
//   );
// }

{
  /* {decoded &&
            sidebarData.map((item, index) => {
              return decoded.roles.map((access) => {
                const link = access.path.toLowerCase();
                const path = item.link;
                if (item.children) {
                  if (item.children[0].link === link) {
                    return (
                      <div key={index}>
                        <a
                          className={` flex  py-3 cursor-pointer rounded-md space-x-3 ml-1 justify-between transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                           ${
                             router.pathname.replace("/", "") == "users" ||
                             router.pathname.replace("/", "") == "roles"
                               ? "bg-blue-700  text-white"
                               : ""
                           } `}
                          onClick={() => setDropdown(!Dropdown)}
                        >
                          <span className="w-3"> {item.icon}</span>
                          <span className="flex-1">{item.title}</span>
                          <ChevronDownIcon className="w-4 h-4 " />
                        </a>

                        <ul
                          className={`mt-1 space-y-1 ${
                            Dropdown ? "block " : "hidden"
                          }`}
                        >
                          {item.children.map((child, index) => {
                            const link = child.link;
                            return (
                              <li
                                className="w-full -ml-1 text-gray-500 "
                                key={index}
                                onClick={() => setSidebarOpen(false)}
                              >
                                <Link href={link}>
                                  <a
                                    className={` flex  py-3 rounded-md space-x-3 ml-2 w-full cursor-pointer  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                          
                          `}
                                    onClick={() => setDropdown(false)}
                                  >
                                    <div className="w-3 text-left">
                                      {item.icon}
                                    </div>
                                    <span className="text-left">
                                      {child.title}
                                    </span>
                                  </a>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  }
                }
                if (link == path && token) {
                  return (
                    <div className="px-1 mt-3 dark:text-white " key={index}>
                      <Link href={link}>
                        <a
                          className={` flex  px-2 py-3 rounded-md space-x-3 transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
                              ${
                                router.pathname.replace("/", "") == link
                                  ? "bg-blue-700  text-white"
                                  : ""
                              }
                             
                      `}
                          onClick={() => setSidebarOpen(false)}
                        >
                          <span className="w-3"> {item.icon}</span>
                          <span>{item.title}</span>
                        </a>
                      </Link>
                    </div>
                  );
                }
              });
            })} */
}

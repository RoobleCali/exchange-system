import { useRouter } from "next/router";
import { useState } from "react";

import Header from "../../components/header";
import SampleSidebar from "../../components/sidebar";
import React from "react";

function index({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Mobilesidebar, setMobileSidebar] = useState(false);

  const router = useRouter();
  if (
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/404"
  ) {
    return <div>{children}</div>;
  } else {
    return (
      <>
        <div className="flex h-screen bg-gray-50 overflow-hidden font-popins  dark:bg-gray-800 transition-all duration-500">
          <SampleSidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            Mobilesidebar={Mobilesidebar}
            setMobileSidebar={setMobileSidebar}
          />

          <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            <Header
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
              Mobilesidebar={Mobilesidebar}
              setMobileSidebar={setMobileSidebar}
            />
            <main>
              <div className=" p-1 mt-3 mx-3 px-3 sm:px-4 lg:px-8">
                <div className="h-max  ">{children}</div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}

export default index;

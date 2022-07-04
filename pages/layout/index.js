import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/header";
import { RouteGuard } from "../../components/Protected";
import SampleSidebar from "../../components/sidebar";
function index({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Mobilesidebar, setMobileSidebar] = useState(false);

  const router = useRouter();
  // check if there is no user and show only login page also check if user is logged in and not
  if (
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/404"
  ) {
    return <div>{children}</div>;
  } else {
    return (
      // <RouteGuard>
      <div className="flex h-screen overflow-hidden bg-gray-50 font-popins dark:bg-gray-800 ">
        <SampleSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          Mobilesidebar={Mobilesidebar}
          setMobileSidebar={setMobileSidebar}
        />

        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
          <Header
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            Mobilesidebar={Mobilesidebar}
            setMobileSidebar={setMobileSidebar}
          />
          <main>
            <div className="p-1 px-3 mx-3 mt-3 sm:px-4 lg:px-8">
              <div className="h-max">{children}</div>
            </div>
          </main>
        </div>
      </div>
      // </RouteGuard>
    );
  }
}

// make user can`t access to login page if user already logged in

export default index;

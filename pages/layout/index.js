import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { async } from "regenerator-runtime";
import Header from "../../components/header";
import SampleSidebar from "../../components/sidebar";
function index({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Mobilesidebar, setMobileSidebar] = useState(false);
  const token = getCookie("token");
  const router = useRouter();
  // check if there is no user and show only login page also check if user is logged in and not
  if (
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/404"
  ) {
    return <div>{children}</div>;
  }
  // check if user is logged and don't show login page if user is logged in also check if user is not logged in and show login page

  if (!token) {
    if (typeof window !== "undefined") {
      router.push("/login");
    }
  }

  if (token) {
    return (
      <>
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
      </>
    );
  }
}

export default index;
export const getServerSideProps = async ({ req }) => {
  if (!token) {
    req.writeHead("/login");
  }

  return {
    props: {
      data: null,
    },
  };
};

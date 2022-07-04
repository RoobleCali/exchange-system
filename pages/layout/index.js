import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import SampleSidebar from "../../components/sidebar";

function index({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Mobilesidebar, setMobileSidebar] = useState(false);
  const token = getCookie("token");
  const router = useRouter();
  // if window typeof window !== 'undefined' check token

  if (
    router.pathname === "/" ||
    router.pathname === "/login" ||
    router.pathname === "/404"
  ) {
    return <div>{children}</div>;
  }
  if (!token && typeof window !== "undefined") {
    router.push("/login");
  } else {
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
  const token = req.cookies.get("token");
  if (!token) {
    req.writeHead("/login");
  }

  return {
    props: {
      data: null,
    },
  };
};

import { useRouter } from "next/router";
import { useState } from "react";
import Header from "../../components/layout/header";
import SampleSidebar from "../../components/layout/sidebar";
function Index({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [Collapse, setCollapse] = useState(false);

  const router = useRouter();
  if (
    router.pathname === "/" ||
    router.pathname === "/unauthorised" ||
    router.pathname === "/login" ||
    router.pathname === "/404"
  ) {
    return <div>{children}</div>;
  }
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-popins dark:bg-gray-800 ">
      <SampleSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        setCollapse={setCollapse}
        Collapse={Collapse}
      />

      <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto">
        <Header
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          Collapse={Collapse}
          setCollapse={setCollapse}
        />
        <main>
          <div className="p-1 px-3 mx-3 mt-3 sm:px-4 lg:px-8">
            <div className="h-max">{children}</div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Index;

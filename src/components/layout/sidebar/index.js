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

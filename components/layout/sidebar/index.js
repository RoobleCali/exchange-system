import React, { useState, useEffect, useRef } from "react";

import LgSidebar from "./LgSidebar";
import MobileSidebar from "./MobileSidebar";

function SampleSidebar({
  sidebarOpen,
  setSidebarOpen,
  Mobilesidebar,
  setMobileSidebar,
}) {
  return (
    <div className="shadow-xl">
      {/* Sidebar */}

      <div className={`hidden lg:inline-flex        `}>
        <LgSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          Mobilesidebar={Mobilesidebar}
          setMobileSidebar={setMobileSidebar}
        />
      </div>
      <div className="inline-flex lg:hidden">
        <MobileSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>
    </div>
  );
}

export default SampleSidebar;

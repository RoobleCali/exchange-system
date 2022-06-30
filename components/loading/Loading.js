import React from "react";

function Loading() {
  return (
    <div>
      {/* create dashboard skleton based on my dashboard using tailwindcss */}
      <div className="flex ">
        {/* sidebar */}
        <div className="relative flex flex-col flex-1 overflow-x-hidden overflow-y-auto animate-pulse">
          <div className="h-screen bg-gray-400 w-52">
            <div className="w-full h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
            <div className="mt-10 space-y-6">
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
              <div className="w-[180px] ml-2 h-10 px-6 mt-1 bg-gray-200 rounded-md"></div>
            </div>
          </div>
          {/* header */}
          {/* main */}
        </div>
        {/* header */}
        <div className="w-[90%] h-14 bg-gray-300 animate-pulse"></div>
        {/* main */}
      </div>
    </div>
  );
}

export default Loading;

import React from "react";

function Grid() {
  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      <div className="w-full mb-8 h-80 loading"></div>
      <div className="w-full mb-8 h-80 loading"></div>
      <div className="w-full mb-8 h-80 loading"></div>
      <div className="w-full mb-8 h-80 loading"></div>
      <div className="w-full mb-8 h-80 loading"></div>
      <div className="w-full mb-8 h-80 loading"></div>
    </div>
  );
}

export default Grid;

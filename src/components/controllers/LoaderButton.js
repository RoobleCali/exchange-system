import DoubleBounce from "better-react-spinkit/dist/DoubleBounce";
import React from "react";

function LoaderButton() {
  return (
    <div>
      <button
        className="flex space-x-6 items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl  px-4 py-2 text-white"
        disabled
      >
        <DoubleBounce color="white" size={30} />
        <span className="font-medium"> Loading... </span>
      </button>
    </div>
  );
}

export default LoaderButton;

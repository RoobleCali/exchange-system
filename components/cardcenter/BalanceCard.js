import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

function BalanceCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-md p-5">
      <span className="space-y-1">
        <p className="text-gray-500">Main Balance</p>
        <h1 className="text-md sm:text-2xl">$98,452.44</h1>
      </span>
      <div className="mt-6 mx-2">
        <ProgressBar completed={80} />
      </div>
      <div className="text-gray-500 text-[12px] mt-4 mx-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        expedita esse perspiciatis deserunt.
      </div>
      <div className="mt-6  mx-4 md:mx-0  md:space-y-8 flex   md:flex-col justify-between md:justify-start text-xs">
        <span>
          <p className="t text-gray-400">VALID THRU</p>
          <h1>08/21</h1>
        </span>
        <span>
          <p className=" text-gray-400">VALID THRU</p>
          <h1>08/21</h1>
        </span>
        <span>
          <p className=" text-gray-400">VALID THRU</p>
          <h1>08/21</h1>
        </span>
      </div>
    </div>
  );
}

export default BalanceCard;

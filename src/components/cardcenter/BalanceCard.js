import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";

function BalanceCard() {
  return (
    <div className="p-5 bg-white rounded-md dark:bg-gray-800">
      <span className="space-y-1">
        <p className="text-gray-500">Main Balance</p>
        <h1 className="text-md sm:text-2xl">$98,452.44</h1>
      </span>
      <div className="mx-2 mt-6">
        <ProgressBar completed={80} />
      </div>
      <div className="text-gray-500 text-[12px] mt-4 mx-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        expedita esse perspiciatis deserunt.
      </div>
      <div className="flex justify-between mx-4 mt-6 text-xs text-gray-400 md:mx-0 md:space-y-8 md:flex-col md:justify-start">
        <span>
          <p>VALID THRU</p>
          <h1>08/21</h1>
        </span>
        <span>
          <p>VALID THRU</p>
          <h1>08/21</h1>
        </span>
        <span>
          <p>VALID THRU</p>
          <h1>08/21</h1>
        </span>
      </div>
    </div>
  );
}

export default BalanceCard;

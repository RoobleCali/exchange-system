import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

function StatisCards() {
  const percentage = 66;
  return (
    <div>
      {/* bottom cards */}
      <div className="mt-4 sm:p-2 rounded-md bg-white dark:bg-gray-700 grid grid-cols-2 gap-3 lg:grid-cols-4 justify-between sm:mx-">
        {/* card-1 */}
        <div className="  flex bg-[#efe1f5] dark:bg-[#4f4f50] dark:text-gray-200 space-x-2 rounded-md p-4">
          <div className="w-10">
            <CircularProgressbar
              value={percentage}
              styles={{
                path: { stroke: "#AC39D4" },
              }}
            />
          </div>
          <div>
            <div className="text-sm">
              <p>installment</p>
              <span className="text-gray-500 dark:text-gray-300 text-[10px]">
                $39, 992
              </span>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="  flex bg-[#efe1f5] dark:bg-[#636364] space-x-2 rounded-md p-4">
          <div className="w-10">
            <CircularProgressbar
              value={percentage}
              styles={{
                path: { stroke: "#AC39D4" },
              }}
            />
          </div>
          <div>
            <div className="text-sm">
              <p>installment</p>
              <span className="text-gray-500 dark:text-gray-300 text-[10px]">
                $39, 992
              </span>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="  flex bg-[#efe1f5]  dark:bg-[#79797a] space-x-2 rounded-md p-4">
          <div className="w-10">
            <CircularProgressbar
              value={percentage}
              styles={{
                path: { stroke: "#AC39D4" },
              }}
            />
          </div>
          <div>
            <div className="text-sm">
              <p>installment</p>
              <span className="text-gray-500 dark:text-gray-300 text-[10px]">
                $39, 992
              </span>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="  flex bg-blue-700  dark:bg-blue-600 text-white  space-x-2 rounded-md p-4">
          <div className="    p-3">
            <p className="text-xs lg:text-md">+New Spends</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StatisCards;

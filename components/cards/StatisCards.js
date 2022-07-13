import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import React from "react";

function StatisCards() {
  // statis json data
  const statisData = [
    {
      title: "Total Balance",
      value: "$1,000,000",
      icon: "💰",
      bg: "bg-green-200",
      progress: "100",
    },
    {
      title: "Total Assets",
      value: "$1,000,000",
      icon: "💰",
      bg: "bg-green-200",
      progress: "100",
    },
    {
      title: "Total Assets",
      value: "$1,000,000",
      icon: "💰",
      bg: "bg-green-200",
      progress: "100",
    },
    {
      title: "New Assets",
      value: "$1,000,000",
      icon: "💰",
      bg: "bg-green-200",
      progress: "100",
    },
  ];
  const percentage = 300;
  return (
    <div>
      {/* bottom cards */}
      <div className="grid justify-between grid-cols-2 gap-3 mt-4 bg-white rounded-md sm:p-2 dark:bg-gray-700 lg:grid-cols-4 sm:mx-">
        {/* map */}

        {statisData.map((item, index) => (
          <div
            className="grid w-full grid-cols-2 gap-3 mt-4 bg-white rounded-md sm:p-2 dark:bg-gray-700 lg:grid-cols-4 sm:mx-"
            key={index}
          >
            {/* card 2 */}

            {/* card-1 */}
            <div className="  flex bg-[#efe1f5] col-span-4 dark:bg-[#4f4f50] dark:text-gray-200 space-x-2 rounded-md p-4">
              <div className="w-10">
                <CircularProgressbar
                  value={item.progress}
                  styles={{
                    path: { stroke: "#AC39D4" },
                  }}
                />
              </div>
              <div>
                <div className="text-sm">
                  <p className="text-gray-600 dark:text-gray-200">
                    {item.title}
                  </p>
                  <span className="text-gray-500 dark:text-gray-400 text-[10px]">
                    {item.value}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StatisCards;

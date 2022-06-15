import StatisCards from "../../components/cards/StatisCards";
import TopCards from "../../components/cards/TopCards";
import Transactions from "../../components/cards/Transactions";
import BottomTransactions from "../../components/cards/BottomTransactions";
import PieChart from "../../components/charts/PieChart";
import React from "react";

function index() {
  return (
    <div className="grid  grid-cols-1 md:grid-cols-2 md:grid-col-3 lg:grid-cols-5 gap-x-2">
      {/* left */}
      <div className="  md:col-span-4 lg:col-span-3 xl:col-span-4 ">
        <TopCards />
        {/* bottom statis */}
        <div>
          <StatisCards />
        </div>
        <div className="mt-5 rounded-lg bg-white dark:bg-gray-800 text-white  p-4">
          <Transactions />
        </div>
      </div>
      {/* right */}
      <div className="  space-y-10   rounded-md md:col-span-2 lg:col-span-2 xl:col-span-1 p-0">
        <div className=" bg-white   w-full max-w-full dark:bg-gray-800 dark:text-white  p-4">
          <PieChart />
        </div>
        <div className=" mt-4 bg-white w-full max-w-full dark:bg-gray-800 dark:text-gray-200 p-3">
          <BottomTransactions />
        </div>
      </div>
    </div>
  );
}

export default index;

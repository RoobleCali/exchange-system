import StatisCards from "../../components/cards/StatisCards";
import TopCards from "../../components/cards/TopCards";
import Transactions from "../../components/cards/Transactions";
import BottomTransactions from "../../components/cards/BottomTransactions";
import PieChart from "../../components/charts/PieChart";
import React from "react";

function index() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 md:grid-col-3 lg:grid-cols-5 gap-x-2">
      {/* left */}
      <div className=" md:col-span-4 lg:col-span-3 xl:col-span-4">
        <TopCards />
        {/* bottom statis */}
        <div>
          <StatisCards />
        </div>
        <div className="p-4 mt-5 text-white bg-white rounded-lg dark:bg-gray-800">
          <Transactions />
        </div>
      </div>
      {/* right */}
      <div className="p-0 space-y-10 rounded-md  md:col-span-2 lg:col-span-2 xl:col-span-1">
        <div className="w-full max-w-full p-4 bg-white  dark:bg-gray-800 dark:text-white">
          <PieChart />
        </div>
        <div className="w-full max-w-full p-3 mt-4 bg-white  dark:bg-gray-800 dark:text-gray-200">
          <BottomTransactions />
        </div>
      </div>
    </div>
  );
}

export default index;

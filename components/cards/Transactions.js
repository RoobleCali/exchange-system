import Link from "next/link";
import React from "react";

function Transactions() {
  return (
    <div className="overflow-x-scroll overflow-hidden">
      {/* transactions table with filtering */}
      <div className="flex items-center justify-between">
        {/* tob bar transactions */}
        <div>
          <p className="text-gray-700  dark:text-gray-300 tex-[8px] md:text-md">
            latest transactions
          </p>
          <span className="text-gray-500 dark:text-gray-300 hidden md:inline-flex text-[13px]">
            this is the transactions page to see whats going on
          </span>
        </div>
        <div>
          <ul className="flex items-center mb-3 text-gray-700 dark:text-gray-300 space-x-4">
            <li className="text-[9px] sm:text-xs">
              <Link href="/wallet">Monthly</Link>
            </li>
            <li className=" text-[9px] sm:text-xs ">
              <Link href="/wallet">Weekly</Link>
            </li>
            <li className="text-[9px] sm:text-xs">
              <Link href="/wallet">Today</Link>
              <hr className="  border-b md:border-b-4 border-b-blue-600 rounded-md" />
            </li>
          </ul>
        </div>
      </div>
      {/* transaction data */}
      <div className="mt-5 space-y-5   z-50 overflow-x-scroll">
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-green-500 px-4 py-2  w-max truncate rounded-md">
            success
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            MasterCard 453
          </p>

          <p className="text-white bg-gray-400 px-3 py-2  w-max truncate rounded-md">
            canceled
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max   truncate">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-orange-500 px-4 py-2 rounded-md truncate">
            pending
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            MasterCard 453
          </p>

          <p className="text-white bg-gray-400 px-3 py-2  w-max truncate rounded-md">
            canceled
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max   truncate">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-orange-500 px-4 py-2 rounded-md truncate">
            pending
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-green-500 px-4 py-2  w-max truncate rounded-md">
            success
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            MasterCard 453
          </p>

          <p className="text-white bg-gray-400 px-3 py-2  w-max truncate rounded-md">
            canceled
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max   truncate">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-orange-500 px-4 py-2 rounded-md truncate">
            pending
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 3, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max  truncate">
            MasterCard 453
          </p>

          <p className="text-white bg-gray-400 px-3 py-2  w-max truncate rounded-md">
            canceled
          </p>
        </div>
        <div className="flex items-center justify-between space-x-14 text-xs">
          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            Abdishakuur ally
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max   truncate">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            June 10, 2020, 08:22 AM
          </p>

          <p className="text-gray-700  dark:text-gray-300 w-max truncate ">
            MasterCard 453
          </p>

          <p className="text-white bg-orange-500 px-4 py-2 rounded-md truncate">
            pending
          </p>
        </div>
      </div>
    </div>
  );
}

export default Transactions;

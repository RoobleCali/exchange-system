import Link from "next/link";
import React from "react";

function Transactions() {
  // transactions json data
  const transactions = [
    {
      id: 1,
      phone: "0123456789",
      CustFullName: "John Doe",
      AccountNumber: "123456789",
      date: "June 3, 2020, 08:22 AM",
      type: "MasterCard 453",
      Status: "Pending",
    },
    {
      id: 1,
      phone: "0123456789",
      CustFullName: "John Doe",
      AccountNumber: "123456789",
      date: "June 3, 2020, 08:22 AM",
      type: "MasterCard 453",
      Status: "Pending",
    },
    {
      id: 1,
      phone: "0123456789",
      CustFullName: "John Doe",
      AccountNumber: "123456789",
      date: "June 3, 2020, 08:22 AM",
      type: "MasterCard 453",
      Status: "Pending",
    },
    {
      id: 1,
      phone: "0123456789",
      CustFullName: "John Doe",
      AccountNumber: "123456789",
      date: "June 3, 2020, 08:22 AM",
      type: "MasterCard 453",
      Status: "Pending",
    },
  ];

  const [data, setData] = React.useState([]);
  return (
    <div className="overflow-hidden overflow-x-scroll">
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
          <ul className="flex items-center mb-3 space-x-4 text-gray-700 dark:text-gray-300">
            <li className="text-[9px] sm:text-xs">
              <Link href="/wallet">Monthly</Link>
            </li>
            <li className=" text-[9px] sm:text-xs ">
              <Link href="/wallet">Weekly</Link>
            </li>
            <li className="text-[9px] sm:text-xs">
              <Link href="/wallet">Today</Link>
              <hr className="border-b rounded-md md:border-b-4 border-b-blue-600" />
            </li>
          </ul>
        </div>
      </div>
      {/* transaction data */}
      <div className="z-50 mt-5 space-y-5 overflow-x-scroll">
        {/* transactions data map */}
        {/* transactions json data map */}
        {transactions.map((transaction, index) => (
          <div
            className="flex items-center justify-between text-xs space-x-14"
            key={index}
          >
            <p className="text-gray-700 truncate dark:text-gray-300 w-max">
              {transaction.phone}
            </p>

            <p className="text-gray-700 truncate dark:text-gray-300 w-max">
              {transaction.CustFullName}
            </p>

            <p className="text-gray-700 truncate dark:text-gray-300 w-max ">
              {transaction.AccountNumber}
            </p>

            <p className="text-gray-700 truncate dark:text-gray-300 w-max ">
              {transaction.date}
            </p>
            <p className="text-gray-700 truncate dark:text-gray-300 w-max ">
              {transaction.type}
            </p>
            <p className="px-4 py-2 text-white truncate bg-green-500 rounded-md w-max">
              {transaction.Status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Transactions;

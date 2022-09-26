import { useState } from "react";
import Transactions from "../../components/cards/Transactions";
import SendMoney from "../../components/remittence/SendMoney";
import React from "react";

function Index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-3 space-y-5">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="font-semibold text-gray-600 text-md dark:text-gray-400">
            Transactions
          </h1>
          <button
            className="px-4 py-1 font-semibold text-white bg-blue-500 rounded-md"
            onClick={() => setOpen(!open)}
          >
            Send Money
          </button>
        </div>
        <hr className="mt-5 border-gray-100 border-b-1" />
        <div>
          <SendMoney open={open} setOpen={setOpen} />
        </div>
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
}

export default Index;

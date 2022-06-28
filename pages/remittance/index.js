import { useState } from "react";
import Transactions from "../../components/cards/Transactions";
import SendMoney from "../../components/remittence/SendMoney";

export default () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="space-y-5 mt-3">
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-md font-semibold text-gray-600 dark:text-gray-400">
            Transactions
          </h1>
          <button
            className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-md"
            onClick={() => setOpen(!open)}
          >
            Send Money
          </button>
        </div>
        <hr className="border-b-1 mt-5 border-gray-100" />
        <div>
          <SendMoney open={open} setOpen={setOpen} />
        </div>
      </div>
      <div>
        <Transactions />
      </div>
    </div>
  );
};

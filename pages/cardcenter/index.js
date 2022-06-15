import BalanceCard from "../../components/cardcenter/BalanceCard";

import Cards from "../../components/cardcenter/Cards";
import InvoicesSentCard from "../../components/cardcenter/InvoicesSentCard";

export default () => {
  return (
    <div className="space-y-10">
      {/* top cards */}
      <div>
        <Cards />
      </div>
      {/* bottom statistics */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {/* main balance card */}
        <div className="col-span-2 md:col-span-1 space-y-5">
          <BalanceCard />
        </div>
        {/* right side */}
        <div className="col-span-2 md:col-span-3 p-3 bg-white dark:bg-gray-800 rounded-md dark:text-gray-300">
          <InvoicesSentCard />
        </div>
      </div>
    </div>
  );
};

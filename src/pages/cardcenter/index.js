import BalanceCard from "../../components/cardcenter/BalanceCard";

import Cards from "../../components/cardcenter/Cards";
import InvoicesSentCard from "../../components/cardcenter/InvoicesSentCard";

function index() {
  return (
    <div className="space-y-10">
      {/* top cards */}
      <div>
        <Cards />
      </div>
      {/* bottom statistics */}
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {/* main balance card */}
        <div className="col-span-2 space-y-5 md:col-span-1">
          <BalanceCard />
        </div>
        {/* right side */}
        <div className="col-span-2 p-3 bg-white rounded-md md:col-span-3 dark:bg-gray-800 dark:text-gray-300">
          <InvoicesSentCard />
        </div>
      </div>
    </div>
  );
}

export default index;

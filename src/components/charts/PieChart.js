import { PieChart } from "react-minimal-pie-chart";

const data = [
  {
    title: "Group A",
    value: 400,
    color: "#f00",
  },
  {
    title: "Group B",
    value: 300,
    color: "#0f0",
  },
  {
    title: "Group C",
    value: 300,
    color: "#00f",
  },
];

function PieCharts() {
  return (
    <div className="w-full ">
      <p className="xl:ml-[10%] text-xs ">weekly summary</p>{" "}
      <div className="flex justify-between sm:space-x-10 md:justify-center mt-3">
        <div className=" min-w-52">
          <PieChart
            data={data}
            animate={true}
            startAngle={180}
            lineWidth={40}
            colors={["#09BD3C", "#36A2EB", "#FFCE56"]}
          />
        </div>
        {/* labels */}
        <div className="flex flx-1 flex-col space-y-2 pt-5">
          <div className="flex items-center justify-between space-x-5">
            <span className="bg-green-500 rounded-full w-4 h-4 py-1"></span>
            <span className="text-gray-500 text-xs">
              <p className="text-gray-500 text-[11px]">incomes</p>
            </span>
            <h1 className="text-[9px]">10%</h1>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <span className="bg-red-300 rounded-full w-4 h-4 py-1"></span>
            <span className="text-gray-500 text-xs">
              <p className="text-gray-500 text-[11px]">expences</p>
            </span>
            <h1 className="text-[9px]">10%</h1>
          </div>
          <div className="flex items-center justify-between space-x-5">
            <span className="bg-gray-400 rounded-full w-4 h-4 py-1"></span>
            <span className="text-gray-500 text-xs">
              <p className="text-gray-500  text-[11px]">unknown</p>
            </span>
            <h1 className="text-[9px]">10%</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PieCharts;

import {
  PrinterIcon,
  CurrencyDollarIcon,
  PhoneMissedCallIcon,
  LocationMarkerIcon,
  MailIcon,
  DotsVerticalIcon,
} from "@heroicons/react/solid";
import { PieChart } from "react-minimal-pie-chart";
import Transactions from "../../components/cards/Transactions";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

const data = [
  {
    title: "Group A",
    value: 400,
    color: "green",
  },
  {
    title: "Group C",
    value: 300,
    color: "yellow",
  },
  {
    title: "Group B",
    value: 300,
    color: "red",
  },
];
export default () => {
  let componentRef = useRef(null);
  return (
    <div>
      {/* top profile */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {/* left */}
        <div className="col-span-2 p-3 bg-white dark:bg-gray-800 ">
          <div className="flex flex-col space-y-4">
            <div className="flex items-center justify-between pb-5">
              <p className="flex flex-col space-y-1">
                <span className="text-xs text-gray-400">ID Payment</span>
                <span className="text-xl font-bold">
                  <span className="text-gray-600 dark:text-gray-300">
                    #00123521
                  </span>
                </span>
              </p>
              {/* download report and print */}
              <ReactToPrint
                trigger={() => (
                  <div className="flex space-x-3">
                    <button className="px-2 py-1 bg-gray-100 rounded-md">
                      <PrinterIcon className="w-6 h-6 text-blue-600" />
                    </button>
                    <button className="px-2 py-1 text-xs text-white bg-blue-500 rounded-md ">
                      Download Report
                    </button>
                  </div>
                )}
                content={() => componentRef}
              />
            </div>
            <hr className="mt-5 border-b border-gray-100" />
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex items-center space-x-3">
              <span className="px-5 py-5 bg-gray-400 rounded-md"></span>
              <p className="flex flex-col space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <span className="text-xs">Abdishakuur ally</span>
                <span className="text-xs text-gray-500">@abdially</span>
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <p className="flex flex-col space-y-1 text-xs text-gray-600 dark:text-gray-400">
                <span className="text-xs text-gray-500">Amount</span>
                <span className="text-xs ">$839, 9392</span>
              </p>
              <span className="px-1 py-1 rounded-md bg-[#FDBF20]">
                <CurrencyDollarIcon className="w-6 h-6 text-white" />
              </span>
            </div>
          </div>{" "}
          {/* payment information */}
          <div className="flex items-center justify-between mt-8 space-x-5">
            <span className="space-y-2">
              <p className="text-xs text-gray-400"> Payment method</p>
              <p className="text-xs text-gray-800 truncate dark:text-gray-300 w-14 md:w-max">
                MasterCard 404
              </p>
            </span>
            <span className="space-y-2">
              <p className="text-xs text-gray-400"> Invoice Date </p>
              <p className="text-xs text-gray-800 truncate dark:text-gray-300 w-14 md:w-max">
                {" "}
                April 29, 2020
              </p>
            </span>
            <span className="space-y-2">
              <p className="text-xs text-gray-400"> Due Date</p>
              <p className="text-xs text-gray-800 truncate dark:text-gray-300 w-14 md:w-max">
                June 5, 2020
              </p>
            </span>
            <span className="space-y-2">
              <p className="text-xs text-gray-400">Date Paid</p>
              <p className="text-xs text-gray-800 truncate dark:text-gray-300 w-14 md:w-max">
                June 4, 2020
              </p>
            </span>
          </div>
          {/* contact information */}
          <div className="flex flex-wrap gap-6 mt-10 space-y-2 lg:mt-24">
            <span className="flex items-center space-x-5">
              <PhoneMissedCallIcon className="text-blue-600 w-7" />
              <p className="flex flex-col space-y-2">
                <span className="text-xs text-gray-400">Phone</span>
                <span className="text-xs text-gray-800 dark:text-gray-300">
                  +1 (939) 939-3939
                </span>
              </p>
            </span>
            <span className="flex items-center space-x-5">
              <LocationMarkerIcon className="text-blue-600 w-7" />
              <p className="flex flex-col space-y-2">
                <span className="text-xs text-gray-400">Address</span>
                <span className="text-xs text-gray-800 dark:text-gray-300">
                  Mogadisho, somalia
                </span>
              </p>
            </span>
            <span className="flex items-center space-x-5">
              <MailIcon className="text-blue-600 w-7" />
              <p className="flex flex-col space-y-2">
                <span className="text-xs text-gray-400">Email</span>
                <span className="text-xs text-gray-800 dark:text-gray-300">
                  abdishakuuralimohamed@gmail.com
                </span>
              </p>
            </span>
          </div>
        </div>
        {/* right */}
        <div className="col-span-2 space-y-5">
          {/* top card */}
          <div className="col-span-2 p-3 mt-2 bg-white rounded-md h-max md:mt-0 dark:bg-gray-800 ">
            <div className="flex flex-col space-y-4">
              <div className="bg-[#BC1EE3] rounded-xl text-white">
                <div className="p-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="flex flex-col space-y-3">
                      <span>Main Balance</span>
                      <span className="text-xl font-bold">$88,455.12</span>
                    </p>
                    {/* master card icon */}
                    <div className="w-16 -mt-5 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 48 48"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#f44336"
                          d="M18,24c0-4.903,2.363-9.243,6-11.98C21.491,10.132,18.382,9,15,9C6.716,9,0,15.716,0,24
      c0,8.284,6.716,15,15,15c3.382,0,6.491-1.133,9-3.02C20.363,33.242,18,28.903,18,24z"
                        />
                        <path
                          fill="#ff9800"
                          d="M33,9c-3.382,0-6.491,1.132-9,3.02c3.637,2.737,6,7.077,6,11.98s-2.363,9.242-6,11.98
      c2.509,1.888,5.618,3.02,9,3.02c8.284,0,15-6.716,15-15C48,15.716,41.284,9,33,9z"
                        />
                        <ellipse
                          cx="24"
                          cy="24"
                          fill="#ff7300"
                          rx="6"
                          ry="11.98"
                        />
                      </svg>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mt-10">
                      <p className="flex flex-col">
                        <span className="text-sm text-gray-200">
                          VALID THRU
                        </span>
                        <span className="text-sm">12/20</span>
                      </p>
                      <p className="flex flex-col">
                        <span className="text-sm text-gray-200">
                          VALID THRU
                        </span>
                        <span className="text-sm">12/20</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 p-3 mt-5 bg-white rounded-md h-max md:mt-0 dark:bg-gray-800 ">
            {/* top */}
            <div className="flex items-center justify-between space-y-2">
              <div className="">
                <span>Specifies</span>
                <span>
                  <p className="text-xs text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <p className="mt-2 text-xs text-gray-500">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quidem iusto possimus qui ipsam maiores deserunt cumque quae
                    dignissimos eos nemo.
                  </p>
                </span>
              </div>
              {/* pie chart */}
              <div className="w-auto  md:w-44 lg:40">
                <PieChart
                  data={data}
                  animate={true}
                  startAngle={180}
                  lineWidth={40}
                  colors={["#09BD3C", "#36A2EB", "#FFCE56"]}
                />
              </div>
              <div></div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="flex items-center space-x-2">
                <p className="w-2 h-8 bg-blue-600 rounded-sm"></p>
                <span>
                  <p className="font-medium "> 4, 920</p>
                  <p className="text-xs text-gray-400">Propably sold</p>
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <p className="w-2 h-8 bg-green-500 rounded-sm"></p>
                <span>
                  <p className="font-medium "> $4, 920</p>
                  <p className="text-xs text-gray-400">income</p>
                </span>
              </span>
              <span className="flex items-center space-x-2">
                <p className="w-2 h-8 bg-red-500 rounded-sm"></p>
                <span>
                  <p className="font-medium "> 4, 920</p>
                  <p className="text-xs text-gray-400">expences</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* bottom charts */}
      <div className="grid grid-cols-1 gap-10 mt-5 md:grid-cols-2 lg:grid-cols-4">
        <div className="p-2 bg-white rounded-md dark:bg-gray-800">
          {/* chart top title */}
          <span className="flex items-center justify-between">
            <p>pie charts</p>
            <DotsVerticalIcon className="w-4 cursor-pointer " />
          </span>
          {/* chart */}
          <div className="flex items-center justify-center w-auto  md:w-44 lg:40">
            <PieChart
              data={data}
              animate={true}
              startAngle={180}
              lineWidth={40}
              colors={["red", "green", "yellow"]}
              style={{
                height: "200px",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto",
                display: "flex",
              }}
            />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center mt-5 space-x-2 flex-nowrap">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <span>income</span>
            </div>
            <div className="flex items-center mt-5 space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <span>income</span>
            </div>
            <div className="flex items-center mt-5 space-x-2">
              <div className="w-5 h-5 bg-green-500 rounded-full"></div>
              <span>income</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap col-span-1 bg-white dark:bg-gray-800 md:col-span-1 lg:col-span-2 xl:col-span-3">
          <div className="w-full p-2" ref={(el) => (componentRef = el)}>
            <Transactions />
          </div>
        </div>
      </div>
    </div>
  );
};

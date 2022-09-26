import {
  PhoneMissedCallIcon,
  LocationMarkerIcon,
  UserIcon,
  PrinterIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";
import Transition from "../../utils/Transition";
import Transactions from "../../../components/cards/Transactions";
import StatisCards from "../../../components/cards/StatisCards";
import { XIcon } from "@heroicons/react/outline";
function ViewProfile({ open, setOpen }) {
  // payment information json data
  const paymentInfo = [
    {
      name: "Invoice Date",
      value: "   12/12/2020",
    },
    {
      name: "Due Date",
      value: "   12/12/2020",
    },
    {
      name: "Date Paid",
      value: "   12/12/2020",
    },
  ];
  //   contact information json data
  const contactInfo = [
    {
      name: "Name",
      value: "   John Doe",
      icon: <UserIcon className="text-blue-600 w-7" />,
    },
    {
      name: "Phone",
      value: "   +1 (555) 555-5555",
      icon: <PhoneMissedCallIcon className="text-blue-600 w-7" />,
    },
    {
      name: "Address",
      value: "  Nairobi, Kenya",
      icon: <LocationMarkerIcon className="text-blue-600 w-7" />,
    },
  ];

  return (
    <div>
      <div
        id="popup"
        className={`z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${
          open ? "flex" : "hidden"
        }`}
      >
        <Transition
          className="fixed inset-0 z-50 flex items-start justify-center px-4 transform sm:px-6"
          show={open}
          enter="transition ease-in-out duration-200"
          enterStart="opacity-0 translate-y-4"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveStart="opacity-100 translate-y-0"
          leaveEnd="opacity-0 translate-y-4"
        >
          <div className="flex items-center justify-center w-full h-full overflow-scroll">
            <div className="fixed justify-center w-full h-screen max-h-full overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800">
              <div className="sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-2 py-7">
                <p className="text-base font-semibold dark:text-white">
                  Your Account
                </p>
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-6 w-7" />
                </button>
              </div>
              {/* main */}
              <div className="grid grid-cols-1 gap-2 px-3 mt-10 lg:grid-cols-7">
                {/* left */}
                <div className="flex flex-col max-h-screen col-span-2 md:shadow-lg">
                  {/* top */}
                  <div className="w-full col-span-2 p-3 bg-white dark:bg-gray-800 ">
                    <div className="flex flex-col space-y-4">
                      <div className="flex items-center justify-between pb-5">
                        <p className="flex flex-col space-y-1">
                          <span className="text-xs text-gray-400">
                            ID Payment
                          </span>
                          <span className="text-sm font-bold md:text-xl">
                            <span className="text-gray-600 dark:text-gray-300">
                              #00123521
                            </span>
                          </span>
                        </p>
                        {/* download report and print */}

                        <div className="flex space-x-3">
                          <button className="px-2 py-1 bg-gray-100 rounded-md">
                            <PrinterIcon className="w-6 h-6 text-blue-600" />
                          </button>
                        </div>
                      </div>
                      <hr className="mt-5 border-b border-gray-100" />
                    </div>
                    {/* profile info */}
                    <div className="flex justify-between mt-4">
                      <div className="flex items-center space-x-3">
                        <span className="px-5 py-5 bg-gray-400 rounded-md"></span>
                        <p className="flex flex-col space-y-1 text-xs text-gray-600 dark:text-gray-400">
                          <span className="text-xs">Abdishakuur ally</span>
                          <span className="text-xs text-gray-500">
                            @abdially
                          </span>
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
                    </div>
                    {/* payment information */}
                    <div className="flex flex-wrap items-center justify-between mt-8 md:space-x-5">
                      {/* map the payment json */}
                      {paymentInfo.map((item, index) => (
                        <span className="space-y-3" key={index}>
                          <p className="text-xs text-gray-400"> {item.name}</p>
                          <p className="w-16 mt-2 text-xs text-gray-800 truncate dark:text-gray-300">
                            {item.value}
                          </p>
                        </span>
                      ))}
                    </div>
                    <div className="mt-10 text-white bg-blue-400 rounded-xl">
                      <div className="p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <p className="flex flex-col space-y-3">
                            <span>Main Balance</span>
                            <span className="text-xl font-bold">
                              $88,455.12
                            </span>
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
                    {/* contact information */}
                    <div className="flex flex-wrap gap-6 mt-10 space-y-2 md:space-x-8 lg:mt-14">
                      {contactInfo.map((item, index) => (
                        <span
                          className="flex items-center space-x-5"
                          key={index}
                        >
                          {item.icon}
                          <p className="flex flex-col space-y-2">
                            <span className="text-xs text-gray-400 truncate">
                              {item.name}
                            </span>
                            <span className="text-xs text-gray-800 truncate dark:text-gray-300">
                              {item.value}
                            </span>
                          </p>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="col-span-5 px-2 shadow-lg md:px-10">
                  <StatisCards />
                  {/* bottom */}

                  <div className="px-10 mt-10">
                    <Transactions />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

export default ViewProfile;

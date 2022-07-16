import {
  PhoneMissedCallIcon,
  LocationMarkerIcon,
  MailIcon,
  CashIcon,
  UserIcon,
  PrinterIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/solid";
import Transition from "../utils/Transition";
import BottomTransactions from "../../components/cards/BottomTransactions";
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
              <div className="sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7">
                <p className="text-base font-semibold dark:text-white">
                  Your Account
                </p>
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                    alt="icon"
                  />
                </button>
              </div>
              {/* main */}
              <div className="grid grid-cols-1 gap-2 px-3 lg:grid-cols-5">
                {/* left */}
                <div className="flex flex-col max-h-screen col-span-1 ">
                  {/* top */}

                  <div className="w-full col-span-1 p-3 bg-white dark:bg-gray-800 ">
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
                    {/* contact information */}
                    <div className="flex flex-wrap gap-6 mt-10 space-y-2 md:space-x-8 lg:mt-24">
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
                <div className="col-span-4 px-10 shadow-lg">
                  {/* top */}
                  <div class="grid grid-cols-1 space-y-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-4 w-full">
                    <div class="flex items-center relative p-5 w-full bg-white rounded-lg  shadow hover:shadow-md">
                      <div class="w-12 h-12 rounded-full bg-gray-100"></div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800">123,490</p>
                        <p class="text-sm text-gray-600">Total Transactions</p>
                      </div>
                    </div>
                    <div class="flex items-center relative p-5 w-full bg-white rounded-lg  shadow hover:shadow-md">
                      <div class="w-12 h-12 rounded-full bg-gray-100"></div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800">14,490</p>
                        <p class="text-sm text-gray-600">Total Pending</p>
                      </div>
                    </div>
                    <div class="flex items-center relative p-5 w-full bg-white rounded-lg  shadow hover:shadow-md">
                      <div class="w-12 h-12 rounded-full bg-gray-100"></div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800">123,490</p>
                        <p class="text-sm text-gray-600">
                          {" "}
                          Incomplete Transactions
                        </p>
                      </div>
                    </div>
                    <div class="flex items-center relative p-5 w-full bg-white rounded-lg  shadow hover:shadow-md">
                      <div class="w-12 h-12 rounded-full bg-gray-100"></div>
                      <div class="ml-3">
                        <p class="font-medium text-gray-800">123,490</p>
                        <p class="text-sm text-gray-600">
                          {" "}
                          Incomplete Transactions
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* bottom */}
                  <div class="grid grid-cols-1 space-y-4 md:grid-cols-2 gap-6 mt-4 w-full">
                    <div></div>
                    <div>
                      <BottomTransactions />
                    </div>
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

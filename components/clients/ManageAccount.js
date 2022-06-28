import { PrinterIcon } from "@heroicons/react/solid";
import avatar from "../../pages/assets/avatar.png";
import ReactToPrint from "react-to-print";
import Image from "next/image";
import { PencilAltIcon } from "@heroicons/react/outline";
function ManageAccount({ open, setOpen }) {
  return (
    <div>
      <div
        id="popup"
        class={`z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
            open ? " opacity-90" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div class="flex items-center justify-center overflow-scroll h-full w-full">
          <div class="bg-white  max-h-full  dark:bg-gray-800 justify-center  rounded-md shadow fixed overflow-y-auto sm:h-[45%] w-[90%] lg:w-[35%] ">
            <div
              class="bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md px-2 md:px-4
               md:py-4 py-7 flex items-center justify-between sticky top-0"
            >
              <p class="text-base font-semibold dark:text-white">Send Money</p>
              <button
                onclick="popuphandler(false)"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                  alt="icon"
                />
              </button>
            </div>
            <div className="flex items-center justify-between px-10 py-2 space-x-5">
              {/* left */}
              <div className="w-[70%] px-5 py-3 bg-white shadow dark:bg-gray-800 space-y-5">
                <div className="flex items-center justify-between pb-5">
                  <p className="flex items-center space-x-3">
                    <Image src={avatar} alt="" width={50} height={50} />
                    <span className="text-gray-600 text-md dark:text-gray-300">
                      Abdishakuur ally
                    </span>
                  </p>

                  <button className="px-2 py-1 bg-gray-100 rounded-md">
                    <PencilAltIcon className="w-6 h-6 text-blue-600" />
                  </button>
                </div>
                <div className="space-y-3">
                  <p className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>Phone: </span>
                    <span>$839, 9392</span>
                  </p>
                  <p className="flex justify-between text-sm text-left text-gray-600 dark:text-gray-400">
                    <span>Id No: </span>
                    <span>7292092</span>
                  </p>
                  <p className="flex justify-between text-sm text-left text-gray-600 dark:text-gray-400">
                    <span>Issued: </span>
                    <span>9/2/2021</span>
                  </p>
                </div>
                <hr className="mt-5 border-b border-gray-100" />
                <p>Current Money</p>{" "}
                <div className="flex items-center justify-between">
                  <button className="px-5 py-1.5 text-green-600 bg-green-100 rounded-md">
                    USD $9, 543, 268
                  </button>
                  <button className="px-5 py-1.5 ml-10 text-red-500 bg-red-100 rounded-md">
                    KES $9, 543, 268
                  </button>
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col items-center justify-between space-y-4">
                <button
                  type="button"
                  class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                   text-sm px-5 py-3 w-36 text-gray-200 text-center mr-2 mb-2"
                >
                  Deposit(IN)
                </button>
                <button
                  type="button"
                  class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                   text-sm px-5 py-3 w-36 text-gray-200 text-center mr-2 mb-2"
                >
                  Widthdraw(Out)
                </button>
                <button
                  type="button"
                  class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                   text-sm px-5 py-3 w-36 text-gray-200 text-center mr-2 mb-2"
                >
                  Transfer (OUT)
                </button>
                <button
                  type="button"
                  class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                   text-sm px-5 py-3 w-36 text-gray-200 text-center mr-2 mb-2"
                >
                  Exchange
                </button>
                <button
                  type="button"
                  class="bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl 
                  focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg
                   text-sm px-5 py-3 w-36 text-gray-200 text-center mr-2 mb-2"
                >
                  View History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageAccount;

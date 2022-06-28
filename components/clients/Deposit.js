import Image from "next/image";
import avatar from "../../pages/assets/avatar.png";

import { PencilAltIcon } from "@heroicons/react/outline";
function DepositModel({ open, setOpen }) {
  return (
    <div>
      <div>
        <div
          id="popup"
          class={`z-50 fixed w-full flex justify-center inset-0 ${
            open ? "flex" : "hidden"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
              open ? " opacity-90" : "opacity-0 pointer-events-none"
            }`}
          ></div>
          <div class="mx-auto container">
            <div class="flex items-center justify-center h-full w-full">
              <div
                class="bg-white dark:bg-gray-800  rounded-md shadow
               fixed overflow-y-auto sm:h-auto w-[20%] h-[60%] "
              >
                <div
                  class="bg-gray-100 dark:bg-gray-600 rounded-tl-md 
                rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between"
                >
                  <p class="text-base font-semibold dark:text-white">
                    Deposit Form
                  </p>
                  <button
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                      alt="icon"
                    />
                  </button>
                </div>
                {/* deposit section */}
                <div class="px-4 md:px-10 pt-3  shadow-2xl md:pb-4 pb-7">
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
                  <p className="mt-3">Current Money</p>{" "}
                  <div className="flex items-center justify-between mt-2 space-x-2">
                    <button className="px-2 py-1.5 text-green-600 bg-green-100 rounded-md">
                      USD $9, 543, 268
                    </button>
                    <button className="px-2 py-1.5   text-red-500 bg-red-100 rounded-md">
                      KES $9, 543, 268
                    </button>
                  </div>
                  <form class="mt-11">
                    <input
                      placeholder="Amout"
                      class="focus:ring-2 focus:ring-gray-400  focus:outline-none placeholder-gray-500 py-3 px-3 
                        text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  
                        border rounded border-gray-200 w-full dark:border-gray-700 "
                    />
                    <input
                      placeholder="Date"
                      type="date"
                      class="focus:ring-2 text-lg focus:ring-gray-400 block  focus:outline-none
                         placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800
                          bg-white dark:bg-gray-900 w-full  border rounded
                           border-gray-200 dark:border-gray-700 mt-3 "
                    />
                    <div class="mt-6">
                      <textarea
                        placeholder="Description"
                        class=" focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 py-3 pl-3 overflow-y-auto h-24 border placeholder-gray-500 rounded border-gray-200 dark:border-gray-700  w-full resize-none focus:outline-none"
                      ></textarea>
                    </div>
                  </form>
                  <button
                    aria-label="add user"
                    role="button"
                    class="focus:ring-2 w-full focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Deposit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositModel;

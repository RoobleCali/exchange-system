import avatar from "../../pages/assets/avatar.png";
import Image from "next/image";
import { PencilAltIcon, XIcon } from "@heroicons/react/outline";
import { useState } from "react";
import DepositModel from "./Deposit";
import WithdrawModel from "./Withdraw";
import TransferModel from "./Transfer";
import Transition from "../utils/Transition";
function ManageAccount({ open, setOpen }) {
  const [Deposit, setDeposit] = useState(false);
  const [Withdraw, setWithdraw] = useState(false);
  const [Transfer, setTransfer] = useState(false);

  return (
    <div>
      <div
        id="popup"
        className={`z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0
            transition-opacity duration-200 ${
              open ? " opacity-90" : "opacity-0 pointer-events-none"
            }`}
        ></div>
        <Transition
          className="fixed inset-0 z-50 flex items-start justify-center px-2 mb-4 overflow-hidden transform top-20 sm:px-6"
          show={open}
          enter="transition ease-in-out duration-200"
          enterStart="opacity-0 translate-y-4"
          enterEnd="opacity-100 translate-y-0"
          leave="transition ease-in-out duration-200"
          leaveStart="opacity-100 translate-y-0"
          leaveEnd="opacity-0 translate-y-4"
        >
          <div className="flex items-center justify-center w-full h-full overflow-scroll">
            <div className="fixed justify-center max-h-full overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 h-max md:w-max">
              <div className="sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7">
                <p className="text-base font-semibold dark:text-white">
                  Manage Account
                </p>
                <button
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="h-6 w-7" />
                </button>
              </div>
              <div className="flex flex-wrap items-center justify-center py-2 mt-5 space-x-5 md:justify-between">
                {/* left */}
                <div className="hidden px-5 py-3 space-y-5 bg-white shadow md:inline-block dark:bg-gray-800">
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
                <div className="grid grid-cols-2 gap-y-6 gap-x-10 md:gap-x-10 md:flex md:flex-col ">
                  <button
                    type="button"
                    className="px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36"
                    onClick={() => setDeposit(true)}
                  >
                    Deposit(IN)
                  </button>
                  <button
                    type="button"
                    className="px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36"
                    onClick={() => setWithdraw(true)}
                  >
                    Widthdraw(Out)
                  </button>
                  <button
                    type="button"
                    className="px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36"
                    onClick={() => setTransfer(true)}
                  >
                    Transfer (OUT)
                  </button>
                  <button
                    type="button"
                    className="px-5 py-3 mb-2 mr-2 text-sm font-medium text-center text-gray-200 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-blue-300 dark:focus:ring-blue-800 w-36"
                  >
                    Exchange
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>

      {/* deposit model */}
      <DepositModel open={Deposit} setOpen={setDeposit} />

      {/* withdraw model */}
      <WithdrawModel open={Withdraw} setOpen={setWithdraw} />

      {/* transfer model */}
      <TransferModel open={Transfer} setOpen={setTransfer} />
    </div>
  );
}

export default ManageAccount;

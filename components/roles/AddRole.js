import Image from "next/image";
import React from "react";
import avatar from "../../pages/assets/avatar.png";
function AddRole({ open, setOpen }) {
  return (
    <div>
      <div
        id="popup"
        className={`z-50 fixed w-full flex justify-center inset-0 ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
            open ? " opacity-90" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div className="container mx-auto">
          <div className="flex items-center justify-center w-full h-full">
            <div className="fixed w-10/12 overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="flex items-center justify-between px-4 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold dark:text-white">
                  Create New Role
                </p>
                <button
                  role="button"
                  aria-label="close label"
                  onclick="popuphandler(false)"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                    alt="icon"
                  />
                </button>
              </div>
              <div className="px-4 pt-6 md:px-10 md:pt-12 md:pb-4 pb-7">
                <div className="flex items-center justify-center">
                  <div
                    tabindex="0"
                    aria-label="img"
                    role="img"
                    className="flex items-center justify-center p-16 bg-gray-100 rounded-md focus:outline-none"
                  >
                    <Image src={avatar} alt="icon" />
                  </div>
                </div>
                <form className="mt-11">
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="Full Name"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      min="0"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                  <div className="flex items-center mt-8 space-x-9">
                    <input
                      placeholder="Username"
                      type="Username"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <div
                      tabindex="0"
                      className="focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700  py-2.5 px-3"
                    >
                      <select
                        aria-label="select an option"
                        className="w-full text-sm text-gray-500 dark:bg-gray-900 focus:outline-none"
                      >
                        <option selected="" disabled="" value="">
                          Role
                        </option>
                        <option>Cashier</option>
                        <option>Admin</option>
                        <option>No Role</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex items-center space-x-9 mt-11">
                    <input
                      placeholder="Full Name"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      min="0"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    role="button"
                    aria-label="close button"
                    onclick="popuphandler(false)"
                    className="px-6 py-3 text-sm text-white bg-gray-600 rounded shadow focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    aria-label="add user"
                    role="button"
                    className="px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                  >
                    Add User
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

export default AddRole;

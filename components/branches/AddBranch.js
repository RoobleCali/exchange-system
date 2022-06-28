import Image from "next/image";
import avatar from "../../pages/assets/avatar.png";
import { XIcon } from "@heroicons/react/solid";

function AddBranch({ open, setOpen }) {
  return (
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
            <div class="bg-white dark:bg-gray-800  rounded-md shadow fixed overflow-y-auto sm:h-auto w-10/12 md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div class="bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md px-4 md:px-8 md:py-4 py-7 flex items-center justify-between">
                <p class="text-base font-semibold dark:text-white">
                  Create New Branch
                </p>
                <button
                  role="button"
                  aria-label="close label"
                  onclick="popuphandler(false)"
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="w-7" />
                </button>
              </div>
              <div class="px-4 md:px-10 pt-6 md:pt-12 md:pb-4 pb-7">
                <div class="flex items-center justify-center">
                  <div class="focus:outline-none p-16 bg-gray-100  rounded-md flex items-center justify-center">
                    <Image src={avatar} alt="icon" />
                  </div>
                </div>
                <form class="mt-11">
                  <div class="flex items-center space-x-9">
                    <input
                      placeholder="Full Name"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      min="0"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
                    />
                  </div>
                  <div class="flex items-center space-x-9 mt-8">
                    <input
                      placeholder="Branchname"
                      type="Branchname"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
                    />
                    <div
                      tabindex="0"
                      class="focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700  py-2.5 px-3"
                    >
                      <select
                        aria-label="select an option"
                        class="text-sm text-gray-500 dark:bg-gray-900 w-full focus:outline-none"
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
                  <div class="flex items-center space-x-9 mt-11">
                    <input
                      placeholder="Full Name"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      min="0"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
                    />
                  </div>
                </form>
                <div class="flex items-center justify-between mt-9">
                  <button
                    role="button"
                    aria-label="close button"
                    onclick="popuphandler(false)"
                    class="focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none px-6 py-3 bg-gray-600 hover:bg-gray-500 shadow rounded text-sm text-white"
                  >
                    Cancel
                  </button>
                  <button
                    aria-label="add Branch"
                    role="button"
                    class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow rounded text-sm text-white"
                  >
                    Add Branch
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

export default AddBranch;

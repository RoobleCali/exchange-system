import React, { useState } from "react";
import AddBranch from "../../components/branches/AddBranch";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

function index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-7 max-w-[90rem]max-w- mx-auto">
      {/* top */}
      <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
        <div class="flex items-center justify-between">
          <p class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">
            All Branches
          </p>
          <button
            class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 
                  inline-flex sm:ml-3  items-start justify-start px-6 py-3 
                  bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
            onClick={() => setOpen(!open)}
          >
            <p class="text-sm font-medium leading-none text-white">
              Add Branch
            </p>
          </button>
        </div>
      </div>
      <AddBranch open={open} setOpen={setOpen} />
      {/* table */}
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th class="px-6 py-3">Branch name</th>
              <th class="px-6 py-3">Branch Phone</th>
              <th class="px-6 py-3">Country</th>
              <th class="px-6 py-3">City</th>
              <th class="px-6 py-3">Commision</th>
              <th class="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="space-y-5">
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Nairobi kenya
              </th>
              <td class="px-6 py-4">+252618995283</td>
              <td class="px-6 py-4">Kenya</td>
              <td class="px-6 py-4">Nairobi</td>
              <td class="px-6 py-4">$27,202,920</td>

              <td class="px-6 py-4 space-x-5 flex items-center ">
                <PencilAltIcon className="w-7 font-medium text-blue-600 dark:text-blue-500 cursor-pointer" />
                <TrashIcon class="w-7 font-medium text-red-600 dark:text-red-500 cursor-pointer" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default index;

import React, { useState } from "react";
import AddBranch from "../../components/branches/AddBranch";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";

function index() {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-7 max-w-[90rem]max-w- mx-auto">
      {/* top */}
      <div className="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl dark:text-white ">
            All Branches
          </p>
          <button
            className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <p className="text-sm font-medium leading-none text-white">
              Add Branch
            </p>
          </button>
        </div>
      </div>
      <AddBranch open={open} setOpen={setOpen} />
      {/* table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Branch name</th>
              <th className="px-6 py-3">Branch Phone</th>
              <th className="px-6 py-3">Country</th>
              <th className="px-6 py-3">City</th>
              <th className="px-6 py-3">Commision</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="space-y-5">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                Nairobi kenya
              </th>
              <td className="px-6 py-4">+252618995283</td>
              <td className="px-6 py-4">Kenya</td>
              <td className="px-6 py-4">Nairobi</td>
              <td className="px-6 py-4">$27,202,920</td>

              <td className="flex items-center px-6 py-4 space-x-5 ">
                <PencilAltIcon className="font-medium text-blue-600 cursor-pointer w-7 dark:text-blue-500" />
                <TrashIcon className="font-medium text-red-600 cursor-pointer w-7 dark:text-red-500" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default index;

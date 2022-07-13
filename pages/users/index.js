import { getCookie } from "cookies-next";
import React, { useState } from "react";
import AddUser from "../../components/users/addUser";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useTasksQuery } from "../../redux/api/UserApi";
function index() {
  const [open, setOpen] = useState(false);
  const { data, error, isLoading, isSuccess } = useTasksQuery();
  return (
    <div>
      <div className="p-2 mx-auto space-y-10 min- max-w-7xl md:p-4">
        <div className="px-2 py-2 bg-gray-100 md:px-5 md:py-3 dark:bg-gray-700 ">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl dark:text-white ">
              All Users
            </p>
            <button
              className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <p className="text-sm font-medium leading-none text-white">
                New User
              </p>
            </button>
          </div>

          <AddUser open={open} setOpen={setOpen} />

          {/* table */}
          <table className="w-full text-sm text-left text-gray-500 mt-14 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th className="px-6 py-3">User name</th>
                <th className="px-6 py-3">FullName</th>
                <th className="px-6 py-3">UserPhone</th>
                <th className="px-6 py-3">userType</th>
                <th className="px-6 py-3">Commision</th>
                <th className="px-6 py-3">RoleName</th>
              </tr>
            </thead>
            <tbody className="space-y-5">
              {/* map the data */}
              {isLoading ? (
                <div>Loading...</div>
              ) : (
                data.map((item) => (
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                    >
                      {item._id}
                    </th>
                    <td className="px-6 py-4">{item.FullName}</td>
                    <td className="px-6 py-4">{item.UserPhone}</td>
                    <td className="px-6 py-4">{item.userType}</td>
                    <td className="px-6 py-4">{item.RoleName}</td>

                    <td className="flex items-center px-6 py-4 space-x-5 ">
                      <PencilAltIcon className="font-medium text-blue-600 cursor-pointer w-7 dark:text-blue-500" />
                      <TrashIcon className="font-medium text-red-600 cursor-pointer w-7 dark:text-red-500" />
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* <Table columns={columns} data={Data} /> */}
    </div>
  );
}

export default index;

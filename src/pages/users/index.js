import React, { useState } from "react";
import AddUser from "../../components/userAndRole/AddUser";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useUsersQuery } from "../../store/user/User";
import users from "./users.json";
import Image from "next/image";
function Index() {
  const [open, setOpen] = useState(false);
  const { data, error, isLoading, isSuccess, refetch } = useUsersQuery();

  return (
    <div>
      <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200">
        <div className="overflow-x-auto rounded-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Position
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Country
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Status
                    </th>
                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {users.map((user) => (
                    <tr className="hover:bg-gray-100" key={user.id}>
                      <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap lg:p-5 lg:mr-0">
                        <div className="text-sm font-normal text-gray-500">
                          <div className="text-base font-semibold text-gray-900">
                            {user.name}
                          </div>
                          <div className="text-sm font-normal text-gray-500">
                            {user.email}
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        {user.position}
                      </td>
                      <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                        {user.country}
                      </td>
                      <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap lg:p-5">
                        <div className="flex items-center">
                          {user.status === "Active" ? (
                            <div className="h-2.5 w-2.5 rounded-full bg-green-400 mr-2"></div>
                          ) : (
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                          )}
                          {user.status}
                        </div>
                      </td>
                      <td className="p-4 space-x-2 whitespace-nowrap lg:p-5">
                        <button
                          type="button"
                          data-modal-toggle="user-modal"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                        <button
                          type="button"
                          data-modal-toggle="delete-user-modal"
                          className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform"
                        >
                          <svg
                            className="w-5 h-5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

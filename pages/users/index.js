import React from "react";

function index() {
  return (
    <div>
      <div class="sm:px-6 w-full">
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="sm:flex items-center justify-between">
            <h1>10 Users Here</h1>
            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p class="text-sm font-medium leading-none text-white">
                Add User
              </p>
            </button>
          </div>
          <div className="w-full mt-10  divide-y divide-gray-200    border-b">
            <table className="  dark:bg-gray-800 w-full pb-16 overflow-x-scroll overflow-hidden   inline-block border-gray-200 sm:rounded-lg dark:text-gray-300 ">
              <thead className="">
                <tr>
                  <th className="group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600  text-gray-500 p-auto  py-3 text-left text-xs font-medium   dark:text-gray-600 uppercase tracking-wider">
                    Id
                  </th>
                  <th className="group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600  text-gray-500 p-auto  py-3 text-left text-xs font-medium   dark:text-gray-600 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600  text-gray-500 p-auto  py-3 text-left text-xs font-medium   dark:text-gray-600 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600  text-gray-500 p-auto  py-3 text-left text-xs font-medium   dark:text-gray-600 uppercase tracking-wider">
                    Number
                  </th>
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-500 w-full">
                <tr>
                  <td
                    className="px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap"
                    role="cell"
                  >
                    abdishakuuur ally
                  </td>
                  <td
                    className="px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap"
                    role="cell"
                  >
                    abdishakuuurally@gmail.com
                  </td>
                  <td
                    className="px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap"
                    role="cell"
                  >
                    abdishakuuur ally abdishakuuur ally
                  </td>
                  <td
                    className="px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap"
                    role="cell"
                  >
                    abdishakuuurally@gmail.com
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

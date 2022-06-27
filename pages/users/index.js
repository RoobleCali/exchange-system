import axios from "axios";
import React from "react";

function index() {
  return (
    <div>
      <div class="sm:px-6 w-full">
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="w-full sm:px-6">
            <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
              <div class="sm:flex items-center justify-between">
                <p
                  tabindex="0"
                  class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white "
                >
                  All Users
                </p>
                <div>
                  <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
                    <p class="text-sm font-medium leading-none text-white">
                      New User
                    </p>
                  </button>
                </div>
              </div>
            </div>
            <div class="bg-white dark:bg-gray-800  shadow px-4 md:px-10 pt-4 md:pt-7 pb-5 overflow-y-auto">
              <table class="w-full whitespace-nowrap">
                <thead>
                  <tr
                    tabindex="0"
                    class="focus:outline-none h-16 w-full text-sm leading-none text-gray-800 dark:text-white "
                  >
                    <th class="font-normal text-left pl-4">Id</th>
                    <th class="font-normal text-left pl-12">Name</th>
                    <th class="font-normal text-left pl-12">Role</th>
                    <th class="font-normal text-left pl-20">Number</th>
                    <th class="font-normal text-left pl-16">Date</th>
                    <th class="font-normal text-left pl-16">Date</th>5599o
                    <th class="font-normal text-left pl-16">Actions</th>
                  </tr>
                </thead>
                <tbody class="w-full">
                  <tr class="focus:outline-none h-20 text-sm leading-none text-gray-800 dark:text-white  border-b border-t bg-white dark:bg-gray-800  hover:bg-gray-100 dark:hover:bg-gray-900  dark:bg-gray-700  border-gray-100 dark:border-gray-700 ">
                    <td class="pl-4 cursor-pointer">
                      <p class="text-sm font-medium leading-none text-gray-800 dark:text-white ">
                        Abdishakuur ally
                      </p>
                    </td>
                    <td class="pl-12">
                      <p class="text-sm font-medium leading-none text-gray-800 dark:text-white ">
                        Abdishakuur ally
                      </p>
                    </td>
                    <td class="pl-12">
                      <p class="text-sm font-medium leading-none text-gray-800 dark:text-white ">
                        Administrator
                      </p>
                    </td>
                    <td class="pl-20">
                      <p class="font-medium">$13,000</p>
                      <p class="text-xs leading-3 text-gray-600 dark:text-gray-200  dark:text-gray-200  mt-2">
                        $4,200 left
                      </p>
                    </td>
                    <td class="pl-20">
                      <p class="font-medium">22.12.21</p>
                      <p class="text-xs leading-3 text-gray-600 dark:text-gray-200  dark:text-gray-200  mt-2">
                        34 days
                      </p>
                    </td>
                    <td class="pl-16">
                      <div class="flex items-center">
                        <img
                          class="shadow-md w-8 h-8 rounded-full"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(8).png"
                          alt="collaborator 1"
                        />
                        <img
                          class="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(9).png"
                          alt="collaborator 2"
                        />
                        <img
                          class="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(10).png"
                          alt="collaborator 3"
                        />
                        <img
                          class="shadow-md w-8 h-8 rounded-full -ml-2"
                          src="https://cdn.tuk.dev/assets/templates/olympus/projects(11).png"
                          alt="collaborator 4"
                        />
                      </div>
                    </td>
                    <td class="px-7 2xl:px-0">
                      <button
                        onclick="dropdownFunction(this)"
                        class="focus:ring-2 rounded-md focus:outline-none ml-7"
                        role="button"
                        aria-label="options"
                      >
                        <img
                          class="w-5"
                          src="https://tuk-cdn.s3.amazonaws.com/can-uploader/table_3-svg1.svg"
                          alt="dropdown"
                        />
                      </button>
                      <div class="dropdown-content bg-white dark:bg-gray-800  shadow w-24 absolute z-30 right-0 mr-6 hidden">
                        <div
                          tabindex="0"
                          class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                        >
                          <p>Edit</p>
                        </div>
                        <div
                          tabindex="0"
                          class="focus:outline-none focus:text-indigo-600 text-xs w-full hover:bg-indigo-700 py-4 px-4 cursor-pointer hover:text-white"
                        >
                          <p>Delete</p>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies;
  if (!token) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  } else {
    const resp = await axios.get(`http://localhost:3000/api/transactions`);

    return {
      props: {
        data: resp.data,
      },
    };
  }
};

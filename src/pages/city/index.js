import React, { useState } from "react";
import NewCity from "../../components/city/NewCity";
import { useCityQuery, useDeleteCityMutation } from "../../store/city";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  const [inputText, setInputText] = useState("");

  const { error, data } = useCityQuery();
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData =
    data &&
    data.filter((city) => {
      //if no input the return the original
      if (inputText === "") {
        return city;
      } else {
        return city.City.toLowerCase().includes(inputText);
      }
    });
  return (
    <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200 dark:shadow-gray-700">
      <div className="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7 dark:bg-gray-700">
        <div className="flex items-center justify-between space-x-5 md:space-x-96">
          <div className="relative md:w-[520px]">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
              onChange={inputHandler}
            />
          </div>
          <button
            className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <p className="text-sm font-medium leading-none text-white">
              Add City
            </p>
          </button>
        </div>
      </div>
      <NewCity open={open} setOpen={setOpen} />

      <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200 dark:shadow-none">
        <div className="overflow-x-auto rounded-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white dark:text-gray-100 dark:bg-gray-500 ">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left uppercase lg:p-5"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left uppercase lg:p-5"
                    >
                      Country
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left uppercase lg:p-5"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left uppercase lg:p-5"
                    >
                      Updated at
                    </th>

                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 bg-white divide-y divide-gray-200 dark:text-gray-100 dark:bg-gray-500 ">
                  {data &&
                    filteredData.map((d) => (
                      <tr className="hover:bg-gray-100" key={d._id}>
                        <td className="p-4 text-base font-normal whitespace-nowrap lg:p-5">
                          {d.Country}
                        </td>
                        <td className="p-4 text-base font-normal whitespace-nowrap lg:p-5">
                          {d.City}
                        </td>
                        <td className="p-4 text-base font-normal whitespace-nowrap lg:p-5">
                          {d.createdAt}
                        </td>
                        <td className="p-4 text-base font-normal whitespace-nowrap lg:p-5">
                          {d.updatedAt}
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

export default index;

import React, { useState } from "react";
import NewCity from "../../components/city/NewCity";
import { useCityQuery, useDeleteCityMutation } from "../../store/city";

function index() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { error, isFetching, data } = useCityQuery();
  return (
    <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200">
      <div className="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl dark:text-white ">
            All Cities
          </p>
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
                      Country
                    </th>

                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Created at
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Updated at
                    </th>

                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    data.map((d) => (
                      <tr className="hover:bg-gray-100" key={d._id}>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {d.Country}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {d.City}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                          {d.createdAt}
                        </td>
                        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
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

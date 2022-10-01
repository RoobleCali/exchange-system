import React, { useState } from "react";
import NewCharge from "../../components/charge/NewCharge";
import NewCity from "../../components/city/NewCity";
import SearchFilter from "../../components/common/SearchFilter";
import TableLoader from "../../components/Loaders/TableLoader";
import { useChargeQuery } from "../../store/charge";

function index() {
  const [open, setOpen] = useState(false);
  const { error, isFetching, data } = useChargeQuery();
  const [inputText, setInputText] = useState("");
  console.log(error);
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  const filteredData =
    data &&
    data.filter((source) => {
      //if no input the return the original
      if (inputText === "") {
        return source;
      } else {
        return source.source.toLowerCase().includes(inputText);
      }
    });
  return (
    <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200">
      <div className="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <SearchFilter inputHandler={inputHandler} />
          <button
            className="inline-flex items-start justify-start px-6 py-3 truncate bg-indigo-700 rounded w-max focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <p className="text-sm font-normal leading-none text-white">
              Add Charge
            </p>
          </button>
        </div>
      </div>
      <NewCharge open={open} setOpen={setOpen} />

      <div className="flex flex-col mx-4 my-6 shadow-xl rounded-2xl shadow-gray-200">
        <div className="overflow-x-auto rounded-2xl">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden shadow-lg">
              <table className="min-w-full divide-y divide-gray-200 table-fixed">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="p-4 text-xs font-normal text-left text-gray-500 uppercase lg:p-5"
                    >
                      source
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-normal text-left text-gray-500 uppercase lg:p-5"
                    >
                      destination
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-normal text-left text-gray-500 uppercase lg:p-5"
                    >
                      rate
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-normal text-left text-gray-500 uppercase lg:p-5"
                    >
                      created At
                    </th>
                    <th scope="col" className="p-4 lg:p-5"></th>
                  </tr>
                </thead>{" "}
                {isFetching && <TableLoader />}
                <tbody className="bg-white divide-y divide-gray-200">
                  {data &&
                    filteredData.map((d) => (
                      <tr className="hover:bg-gray-100" key={d._id}>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap lg:p-5">
                          {d.source}
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap lg:p-5">
                          {d.destination}
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap lg:p-5">
                          {d.rate}
                        </td>
                        <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap lg:p-5">
                          {d.createdAt}
                        </td>
                      </tr>
                    ))}
                </tbody>{" "}
              </table>
            </div>
          </div>{" "}
          {error && (
            <div className="flex items-center justify-center pb-24 mt-16 text-center">
              Something went wrong
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default index;

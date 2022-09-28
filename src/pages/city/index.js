import React, { useState } from "react";
import NewCity from "../../components/city/NewCity";

function index() {
  const [open, setOpen] = useState(false);

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

      <div className="overflow-x-auto rounded-2xl">
        <div className="inline-block min-w-full align-middle">
          <div className="flex items-center justify-center p-5 overflow-hidden shadow-lg">
            <h2> No city found</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

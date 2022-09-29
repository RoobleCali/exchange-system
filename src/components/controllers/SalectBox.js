import React from "react";

function SalectBox({ data, register }) {
  return (
    <div>
      <select
        id="countries"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        ref={register({
          required: true,
          message: "Please enter",
          // valueAsNumber: true,
        })}
      >
        <option value={data}>{data}</option>
      </select>
    </div>
  );
}

export default SalectBox;

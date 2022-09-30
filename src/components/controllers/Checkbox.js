import React from "react";

function Checkbox({ label, register, name }) {
  return (
    <div className="flex items-center mb-4">
      <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
        <input
          id="bordered-checkbox-1"
          type="checkbox"
          value=""
          ref={register({
            required: false,
            message: "Please enter",
          })}
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          htmlFor="bordered-checkbox-1"
          className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          {label}
        </label>
      </div>
    </div>
  );
}

export default Checkbox;

import React from "react";

function NumberInput({ value }) {
  return (
    <div>
      <input
        className={`w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
               border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700  
                 `}
        onChange={(e) => value(e.target.value)}
      />
    </div>
  );
}

export default NumberInput;

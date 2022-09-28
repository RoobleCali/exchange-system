import { DoubleBounce } from "better-react-spinkit";
import React from "react";

function Button({ title, loading }) {
  return (
    <div>
      <button
        className="w-full px-6 py-3 mt-2 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
        type="submit"
      >
        <a className="flex items-center justify-center text-center text-md">
          <span> {title}</span>
        </a>
      </button>
    </div>
  );
}

export default Button;

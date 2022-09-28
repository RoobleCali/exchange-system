import { DoubleBounce } from "better-react-spinkit";
import React from "react";

function Button({ title, loading }) {
  return (
    <div>
      <button
        className="inline-block w-full px-6 py-4 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft bg-gradient-to-tl from-blue-600 to-cyan-400 hover:scale-102 hover:shadow-soft-xs active:opacity-85"
        type="submit"
      >
        <a className="flex items-center justify-center text-center text-md">
          <span> {loading && <DoubleBounce color="white" size={20} />}</span>
          <span> {title}</span>
        </a>
      </button>
    </div>
  );
}

export default Button;

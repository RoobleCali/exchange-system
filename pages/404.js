import { getCookie } from "cookies-next";
import Image from "next/image";
import Router from "next/router";
import { useEffect } from "react";
import sad from "./assets/sad.png";
import lottie from "lottie-web";
import notfound from "./assets/not-found.json";
function error() {
  // only show 404 page if user is logged in
  const token = getCookie("token");

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: notfound,
    });
  }, []);

  return (
    <div className="h-screen bg-white lg:w-full">
      <div className="flex flex-col items-center justify-center py-24">
        <div id="react-logo" className="w-[40%] h-full" />
        <a
          className="p-3 mt-2 font-mono text-xl text-gray-200 bg-blue-500 rounded-md cursor-pointer hover:shadow-md"
          onClick={() => Router.back()}
        >
          Go back
        </a>
      </div>
    </div>
  );
}

export default error;

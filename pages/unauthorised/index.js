import { getCookie } from "cookies-next";
import Image from "next/image";
import Router from "next/router";
import { useEffect, useState } from "react";
import sad from "../assets/sad.png";
function Index() {
  // only show 404 page if user is logged in
  const token = getCookie("token");

  useEffect(() => {
    if (!token) {
      Router.replace({ pathname: "/login" });
    }
  }, [token]);

  return (
    <div>
      {/* check if router pathname is Accessdenied */}
      <div className="justify-center h-screen ">
        <center className="m-auto space-y-6 mt-14">
          <div className=" animate-pulse">
            <Image src={sad} alt="image" />
          </div>
          <div className="mt-4 space-y-3 tracking-widest ">
            <span className="block text-6xl text-gray-500">
              <span>4 0 4</span>
            </span>
            <span className="text-xl text-gray-500">
              you are not authorized pro
            </span>
          </div>
        </center>
        <center className="mt-9">
          <div onClick={() => Router.back()}>
            <a className="p-3 font-mono text-xl text-gray-200 bg-blue-500 rounded-md cursor-pointer hover:shadow-md">
              Go back
            </a>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Index;

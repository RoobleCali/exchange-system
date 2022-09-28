import LoginNavbar from "./LoginNavbar";
import React from "react";
import FormLogin from "./LoginForm";
function Index() {
  return (
    <div className="dark:bg-gray-800">
      <LoginNavbar />
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto bg-white md:p-1 md:px-7 mt-14 md:mt-20 dark:bg-gray-800 rounded-xl md:h-auto md:drop-shadow-xl md:space-x-14">
        {/* left carousel */}
        <div className="bg-gray-500 hidden md:inline-block w-1/2 h-[80vh]">
          {/* <Image src={demo} alt= /> */}
        </div>
        {/* right form login */}

        <FormLogin />
      </div>
    </div>
  );
}

export default Index;

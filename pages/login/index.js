import LoginNavbar from "./LoginNavbar";

import FormLogin from "./FormLogin";
export default () => {
  return (
    <div className="dark:bg-gray-800">
      <LoginNavbar />
      <div
        className="flex  md:p-1     md:px-7  items-center mt-14 
        md:mt-20 justify-between  w-full bg-white
         dark:bg-gray-800 rounded-xl 
        md:h-auto md:drop-shadow-xl md:space-x-14   max-w-5xl mx-auto"
      >
        {/* left carousel */}
        <div className="bg-gray-500 hidden md:inline-block w-1/2 h-[80vh]"></div>
        {/* right form login */}

        <FormLogin />
      </div>
    </div>
  );
};

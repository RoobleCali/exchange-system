import LoginNavbar from "./LoginNavbar";
import FormLogin from "./FormLogin";
import { getCookie } from "cookies-next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useEffect } from "react";
export default () => {
  const user = useSelector((state) => state.login.user);
  console.log(user);
  const router = useRouter();

  const token = getCookie("token");
  if (typeof window !== "undefined") {
    if (token) {
      router.back();
    }
  }
  // redirect to home if already logged in

  return (
    <div className="dark:bg-gray-800">
      <LoginNavbar />
      <div className="flex items-center justify-between w-full max-w-5xl mx-auto bg-white md:p-1 md:px-7 mt-14 md:mt-20 dark:bg-gray-800 rounded-xl md:h-auto md:drop-shadow-xl md:space-x-14">
        {/* left carousel */}
        <div className="bg-gray-500 hidden md:inline-block w-1/2 h-[80vh]"></div>
        {/* right form login */}

        <FormLogin />
      </div>
    </div>
  );
};

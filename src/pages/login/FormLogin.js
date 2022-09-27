import Image from "next/image";
import { useForm } from "react-hook-form";
import onlyLogo from "../assets/onlyLogo.png";
import { setCookies } from "cookies-next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { DoubleBounce } from "better-react-spinkit";
import { RouteForLoggedInUser } from "../../components/utils/utils";
import { XIcon } from "@heroicons/react/outline";
import InputField from "../../components/controllers/InputField";

function FormLogin() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,

    errors,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");
  const onSubmit = (data) => {
    const res = axios.post(
      "https://tick-account.herokuapp.com/api/auth/login",
      data
    );
    setLoading(true);
    res
      .then((res) => {
        setCookies("token", res.data.user.accessToken);
        RouteForLoggedInUser(res.data.user);
        setLoading(false);
      })
      .catch((err) => {
        // get error message from server and show it
        setLoading(false);
        let errorMessage = "";
        if (err.message === "Network Error") {
          setmessage("please check your internet connection");
        }
        if (err.response) {
          setmessage(err.response.data.message);
        }
      });
  };
  console.log(errors.password);

  useEffect(() => {
    setTimeout(() => {
      setmessage("");
    }, 10000);
  }, [message]);
  return (
    <>
      <div
        className=" mx-4  md:mx-0 mt-24 md:mt-0 p-10 shadow-lg md:shadow-none w-full md:ml-5 dark:bg-gray-800 rounded-xl h-[80vh]
  md:h-auto  px-2 md:px-0  md:w-1/2"
      >
        <div className="flex justify-center items-container">
          <Image src={onlyLogo} alt="" />
        </div>
        <p className="mt-10 text-2xl text-center text-gray-600 dark:text-white">
          WELCOME BACK !
        </p>
        <p className="mt-2 text-xl text-center text-gray-400 ">
          please sign in your credentials to continue
        </p>
        {/* form submit login */}
        {message && (
          <div
            id="alert-border-2"
            className="flex p-4 mb-4 bg-red-100 border-red-500 border-t-1 dark:bg-red-200"
            role="alert"
          >
            <XIcon className="flex-shrink-0 w-4 h-5 text-red-700" />

            <div className="ml-3 text-sm font-medium text-red-700">
              {message}
            </div>
          </div>
        )}
        <form
          className="w-full mt-5 space-y-7 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="w-full">
            <InputField
              id="userName"
              name="userName"
              type="text"
              label="userName"
              register={register}
              error={errors.userName}
            />
            <InputField
              id="password"
              name="password"
              type="password"
              label="password"
              register={register}
              error={errors.password}
            />
          </div>

          {loading ? (
            <button
              className="flex space-x-6  items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl  px-3 py-3 mt-3  text-white"
              disabled
            >
              <DoubleBounce color="white" size={30} />
              <span className="font-medium"> Loading... </span>
            </button>
          ) : (
            <button
              className="w-full px-3 py-3 mt-3 text-2xl text-white transition duration-300 duration-500 ease-in ease-in-out transform bg-blue-600 rounded-md hover:-translate-y-1 hover:scale-100 hover:bg-blue-500 hover:drop-shadow-md "
              type="submit"
            >
              Login
            </button>
          )}
        </form>
      </div>
    </>
  );
}

export default FormLogin;

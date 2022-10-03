import Image from "next/image";
import { useForm } from "react-hook-form";
import onlyLogo from "../assets/onlyLogo.png";
import { setCookies } from "cookies-next";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { RouteForLoggedInUser } from "../../components/utils/utils";
import { Button, LoaderButton, InputField } from "../../components/controllers";

function FormLogin() {
  const { register, handleSubmit, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const [message, setmessage] = useState("");

  const onSubmit = (data) => {
    const res = axios.post("http://192.167.67.107:5000/api/auth/login", data);
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

        console.log(errorMessage);
      });
  };
  // message set timeout to clear it

  useEffect(() => {
    setTimeout(() => {
      setmessage("");
    }, 10000);
  }, [message]);
  return (
    <>
      <div
        className=" flex items-center justify-center flex-col w-full px-14 md:ml-5 dark:bg-gray-800 rounded-xl h-[80vh]
  md:h-auto  md:px-2   md:w-1/2"
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
            <svg
              className="flex-shrink-0 w-5 h-5 text-red-700"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-Rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-Rule="evenodd"
              ></path>
            </svg>
            <div className="ml-3 text-sm font-medium text-red-700">
              {message}
            </div>
            <button
              type="button"
              className="ml-auto -mx-1.5 -my-1.5 bg-red-100 dark:bg-red-200 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 dark:hover:bg-red-300 inline-flex h-8 w-8"
              data-dismiss-target="#alert-border-2"
              aria-label="Close"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => setmessage("")}
              >
                <path
                  fill-Rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-Rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        )}
        <form
          className="w-full mt-5 space-y-7 "
          onSubmit={handleSubmit(onSubmit)}
        >
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
          {loading ? <LoaderButton /> : <Button title="Login " />}
        </form>
      </div>
    </>
  );
}

export default FormLogin;

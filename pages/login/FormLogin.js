import Image from "next/image";
import { useForm } from "react-hook-form";
import onlyLogo from "../assets/onlyLogo.png";
import { setCookies } from "cookies-next";
import axios from "axios";
import { addTransaction } from "../../redux/slices/transactionSlice";
import { useDispatch } from "react-redux";
import { login } from "../../components/utils/Login";
import Router from "next/router";
import { useState } from "react";

function FormLogin() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
  } = useForm();
  const [loading, setLoading] = useState(isSubmitSuccessful);

  const onSubmit = (data) => {
    setLoading(true);
    const res = axios.post(
      "https://tick-account.herokuapp.com/api/auth/login",
      data
    );
    setLoading(false);
    res
      .then((res) => {
        setCookies("token", res.data.user.accessToken);
        dispatch(addTransaction(res.data.user));
        login(res.data.user);
      })
      .catch((err) => {
        console.log(err);
        isSubmitSuccessful(false);
      });
  };

  return (
    <>
      <div
        className=" w-full md:ml-5 dark:bg-gray-800 rounded-xl h-[80vh]
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
        <form
          className="w-full mt-5 space-y-7 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mx-2 space-y-3">
            <label
              className="font-medium text-gray-500 text-md"
              htmlFor="userName"
            >
              userName
            </label>

            <input
              className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
              placeholder="userName"
              {...register("userName", { required: true })}
            />

            {errors.userName && (
              <p className="text-sm text-red-400">This field is required</p>
            )}
          </div>
          <div className="flex flex-col mx-2 space-y-3">
            <label
              className="font-medium text-gray-500 text-md"
              htmlFor="userName"
            >
              password
            </label>
            <input
              type="password"
              {...register("password", { required: true })}
              className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
              placeholder="password"
            />

            {errors.password && (
              <p className="text-sm text-red-400">This field is required</p>
            )}
          </div>

          <button
            className="w-full px-10 py-2 text-2xl text-white duration-300 ease-in bg-blue-600 rounded-md hover:bg-blue-500 hover:drop-shadow-md"
            type="submit"
            disabled={isSubmitSuccessful}
          >
            {isSubmitSuccessful ? "Loading..." : "Login"}
          </button>
        </form>
      </div>
    </>
  );
}

export default FormLogin;

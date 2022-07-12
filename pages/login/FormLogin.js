import Image from "next/image";
import { useForm } from "react-hook-form";
import onlyLogo from "../assets/onlyLogo.png";
import { setCookies } from "cookies-next";
import axios from "axios";
import { addUserEnd } from "../../redux/slices/loginSlice";
import { useDispatch } from "react-redux";
import { login } from "../../components/utils/Login";
import { useState } from "react";
import {
  ChasingDots,
  Circle,
  CubeGrid,
  DoubleBounce,
  FadingCircle,
  FoldingCube,
  Pulse,
  RotatingPlane,
  ThreeBounce,
  WanderingCubes,
  Wave,
} from "better-react-spinkit";

function FormLogin() {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
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
        dispatch(addUserEnd(res.data.user));
        login(res.data.user);
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
        {message && (
          <div className="mt-4 text-center text-red-500">{message}</div>
        )}
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
              className={`w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
               border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
                 ${errors.userName ? "ring-2 ring-red-400" : null}`}
              placeholder="userName"
              {...register("userName", { required: true })}
            />

            {errors.userName && (
              <span className="py-2 text-sm text-red-400">
                user name is required
              </span>
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
              className={`w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
              border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
                ${errors.password ? "ring-2 ring-red-400" : null}`}
              placeholder="password"
            />

            {errors.password && (
              <p className="text-sm text-red-400">This field is required</p>
            )}
          </div>
          {loading ? (
            <button
              class="flex space-x-6 items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl  px-4 py-2 text-white"
              disabled
            >
              <DoubleBounce color="white" size={30} />
              <span class="font-medium"> Loading... </span>
            </button>
          ) : (
            <button
              className="w-full px-10 py-2 text-2xl text-white duration-300 ease-in bg-blue-600 rounded-md hover:bg-blue-500 hover:drop-shadow-md"
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

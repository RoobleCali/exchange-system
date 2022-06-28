import Image from "next/image";
import { useForm } from "react-hook-form";
import onlyLogo from "../assets/onlyLogo.png";
import Router from "next/router";
function FormLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    Router.push("/dashboard");
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
              UserName
            </label>

            <input
              class="focus:ring-2 focus:ring-gray-400 w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
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
              Password
            </label>
            <input
              type="password"
              {...register("firstName", { required: true })}
              class="focus:ring-2 focus:ring-gray-400 w-full focus:outline-none placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700 "
              placeholder="password"
            />

            {errors.firstName && (
              <p className="text-sm text-red-400">This field is required</p>
            )}
          </div>

          <button
            className="w-full px-10 py-2 text-2xl text-white duration-300 ease-in bg-blue-600 rounded-md hover:bg-blue-500 hover:drop-shadow-md"
            type="submit"
          >
            Sign In
          </button>
        </form>
      </div>
    </>
  );
}

export default FormLogin;

export const getServerSideProps = async (ctx) => {
  const res = await axios.get(
    "https://tick-account.herokuapp.com/api/auth/login  ",
    {
      withCredentials: true,
      headers: {
        Cookie: req.headers.cookie,
      },
    }
  );
  const data = await res.data;
  return { props: { data } };
};

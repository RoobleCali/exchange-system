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
        <div className="flex items-container justify-center">
          <Image src={onlyLogo} alt="" />
        </div>
        <p className="text-center text-2xl text-gray-600 dark:text-white mt-10">
          WELCOME BACK !
        </p>
        <p className="text-center text-xl mt-2 text-gray-400 ">
          please sign in your credentials to continue
        </p>
        {/* form submit login */}
        <form
          className="w-full space-y-7 mt-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col mx-2 space-y-3">
            <label
              className="text-md font-medium text-gray-500"
              htmlFor="userName"
            >
              UserName
            </label>

            <input
              className=" px-10 py-2 rounded-md border border-slate-300"
              placeholder="userName"
              {...register("userName", { required: true })}
            />

            {errors.userName && (
              <p className="text-red-400 text-sm">This field is required</p>
            )}
          </div>
          <div className="flex flex-col mx-2 space-y-3">
            <label
              className="text-md font-medium text-gray-500"
              htmlFor="userName"
            >
              Password
            </label>
            <input
              type="password"
              {...register("firstName", { required: true })}
              className=" px-10 text-left py-2 rounded-md border border-slate-300"
              placeholder="password"
            />

            {errors.firstName && (
              <p className="text-red-400 text-sm">This field is required</p>
            )}
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
      hover:bg-blue-500 text-2xl hover:drop-shadow-md duration-300 ease-in"
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

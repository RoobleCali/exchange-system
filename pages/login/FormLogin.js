import { useForm } from "react-hook-form";

function FormLogin() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  return (
    <>
      <div
        className=" w-full md:ml-5 dark:bg-gray-800 rounded-xl h-[85vh]
  md:h-auto  px-2 md:px-0  md:w-1/2"
      >
        <p className="text-center text-2xl text-gray-600 mt-20">
          WELCOME BACK !
        </p>
        <p className="text-center text-xl mt-2 text-gray-400 ">
          please sign in your credentials to continue
        </p>
        {/* // onSubmit={SubmitHandler} */}
        <form
          className="w-full space-y-7 mt-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-4">
            <label className="text-md font-light" for="userName">
              UserName
            </label>

            <input
              {...register("userName", { required: true })}
              className=" px-10 py-2 rounded-md border border-slate-400"
            />

            {errors.userName && (
              <p className="text-red-400 text-sm">This field is required</p>
            )}
          </div>
          <div className="flex flex-col space-y-4">
            <label className="text-md font-light" for="userName">
              UserName
            </label>

            <input
              type="password"
              {...register("firstName", { required: true, maxLength: 20 })}
              className=" px-10 py-2 rounded-md border border-slate-400"
            />

            {errors.firstName && (
              <p className="text-red-400 text-sm">This field is required</p>
            )}
          </div>

          <button
            className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
      hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
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

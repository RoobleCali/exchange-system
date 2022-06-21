import React from "react";
import { Field, Formik, ErrorMessage, useFormik } from "formik";

function FormLogin() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
        <Formik>
          {/* // onSubmit={SubmitHandler} */}
          <form
            className="w-full space-y-7 mt-5 "
            onSubmit={formik.handleSubmit}
          >
            <div className="flex flex-col space-y-4">
              <label className="text-md font-light" for="userName">
                UserName
              </label>
              <Field
                className=" px-10 py-2 rounded-md border border-slate-400"
                type="userName"
                name="userName"
                placeholder="Your Email"
                onChange={formik.handleChange}
                value={formik.values.email}
              />
              <ErrorMessage
                name="userName"
                className="text-red-400 transition-all duration-500 animate-pulse -mt-24"
                component="div"
              />
            </div>
            <div className="flex flex-col space-y-4">
              <label className="text-md font-light" for="password">
                Password
              </label>
              <Field
                className="  px-10 w-full py-2 rounded-md border border-slate-400"
                type="password"
                name="password"
                placeholder="Your Password"
              />
              <ErrorMessage
                className="text-red-600 animate-pulse "
                name="password"
                component="div"
              />
            </div>

            <button
              className="w-full px-10 py-2 bg-blue-600 text-white rounded-md
      hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in"
              type="submit"
            >
              Sign In
            </button>
          </form>
        </Formik>
      </div>
    </>
  );
}

export default FormLogin;

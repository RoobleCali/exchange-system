import LoginNavbar from "./LoginNavbar";
import { Formik, Form, Field, ErrorMessage } from "formik";

export default () => {
  return (
    <div className="bg-gray-100 h-screen dark:bg-slate-800 transition-all duration-500 ">
      <LoginNavbar />
      <div className="max-w-3xl mx-auto mt-20 transition-all duration-500 shadow-sm h-screen md:h-auto p-10">
        <p className="text-xl text-center text-gray-600 dark:text-gray-200">
          Welcome back!/blog/git/
        </p>
        <Formik
          initialValues={{ userName: "", password: "" }}
          validate={(values) => {
            const errors = {};
            if (!values.userName) {
              errors.userName = "Username is required";
            }
            if (!values.password) {
              errors.password = "password is Required";
            }

            return errors;
          }}
          // onSubmit={SubmitHandler}
        >
          <Form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                htmlFor="LogginguserNameAddress"
              >
                Username
              </label>
              <Field
                type="userName"
                name="userName"
                placeholder="Enter your username"
                className="block w-full px-4 py-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                name="userName"
                className="text-red-400"
                component="div"
              />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label
                  className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
                  htmlFor="loginPassword"
                >
                  Password
                </label>
              </div>

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="block w-full px-4 py-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-300"
              />
              <ErrorMessage
                className="text-red-600 animate-pulse "
                name="password"
                component="div"
              />
            </div>
            <div className="mt-8">
              <button
                type="submit"
                className="focus:ring-2 text-xl w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
              >
                Login
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

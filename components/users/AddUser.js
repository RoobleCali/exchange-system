import Image from "next/image";
import React from "react";
import { useForm } from "react-hook-form";
import avatar from "../../pages/assets/avatar.png";
function AddUser({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
  } = useForm();
  const onSubmit = (data) => {
    const res = axios.post(
      "https://tick-account.herokuapp.com/api/auth/login",
      data
    );
    setLoading(false);
    res
      .then((res) => {
        setCookies("token", res.data.user.accessToken);
        dispatch(addUserEnd(res.data.user));
        login(res.data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div
        id="popup"
        className={`z-50 fixed w-full flex justify-center inset-0 ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
            open ? " opacity-90" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div className="container mx-auto">
          <div className="flex items-center justify-center w-full h-full">
            <div className="fixed w-10/12 overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="flex items-center justify-between px-4 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold dark:text-white">
                  Create New User
                </p>
                <button
                  role="button"
                  aria-label="close label"
                  onclick="popuphandler(false)"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <img
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                    alt="icon"
                  />
                </button>
              </div>
              <div className="px-4 pt-6 md:px-10 md:pt-12 md:pb-4 pb-7">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center p-16 bg-gray-100 rounded-md focus:outline-none">
                    <Image src={avatar} alt="icon" />
                  </div>
                </div>
                <form className="mt-5 " onSubmit={handleSubmit(onSubmit)}>
                  <div className="flex items-center justify-center space-x-9">
                    <input
                      placeholder="FullName"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("FullName", { required: true })}
                    />
                    {errors.FullName && (
                      <p className="text-sm text-red-400">
                        This field is required
                      </p>
                    )}

                    <input
                      placeholder="UserName"
                      type="UserName"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("UserName", { required: true })}
                    />
                    {errors.UserName && (
                      <p className="text-sm text-red-400">
                        This field is required
                      </p>
                    )}
                  </div>
                  <div className="flex items-center mt-8 space-x-9">
                    <div>
                      <input
                        placeholder="password"
                        type="password"
                        className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                        {...register("password", { required: true })}
                      />
                      {errors.password && (
                        <p className="text-sm text-red-400">
                          This field is required
                        </p>
                      )}
                    </div>
                    <div className="mt-2">
                      <input
                        placeholder="UserPhone"
                        type="tell"
                        className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                        {...register("UserPhone", { required: true })}
                      />
                      {errors.UserPhone && (
                        <p className="text-sm text-red-400">
                          This field is required
                        </p>
                      )}
                    </div>
                  </div>
                  <div
                    tabindex="0"
                    className="focus:outline-none focus:ring-2 focus:ring-gray-400 w-1/2 bg-white dark:bg-gray-900  border rounded border-gray-200 dark:border-gray-700  py-2.5 px-3"
                  >
                    <select
                      {...register("Title", { required: true })}
                      className="w-1/2 text-sm text-gray-500 dark:bg-gray-900 focus:outline-none"
                    >
                      <option value="Mr">Mr</option>
                      <option value="Mrs">Mrs</option>
                      <option value="Miss">Miss</option>
                      <option value="Dr">Dr</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between mt-9">
                    <button
                      onclick="popuphandler(false)"
                      className="px-6 py-3 text-sm text-white bg-gray-600 rounded shadow focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      aria-label="add user"
                      role="button"
                      className="px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                    >
                      Add User
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;

import { XIcon } from "@heroicons/react/solid";
import axios from "axios";
import { getCookie } from "cookies-next";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import avatar from "../../pages/assets/avatar.png";
function AddUser({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful, submitCount },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
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
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center w-full h-full">
            <div className="fixed overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto ">
              <div className="flex items-center justify-between px-4 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold text-gray-700 dark:text-white">
                  Create New User
                </p>
                <button
                  role="button"
                  aria-label="close label"
                  onclick="popuphandler(false)"
                  className="text-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="w-7" />
                </button>
              </div>
              <div className="px-4 pt-6 md:px-10 md:pt-12 md:pb-4 pb-7">
                <form
                  className="mt-5 space-y-4"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <div className="flex flex-col px-24">
                    <input
                      placeholder="Full Name"
                      type="tell"
                      className="w-full py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded px-14 focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("FullName", { required: true })}
                    />
                    {errors.FullName && (
                      <span className="py-2 text-sm text-red-400">
                        user name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col ">
                    <input
                      placeholder="UserName"
                      type="text"
                      min="0"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("UserName", { required: true })}
                    />
                    {errors.UserName && (
                      <span className="py-2 text-sm text-red-400">
                        user name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="UserPhone"
                      type="tell"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("UserPhone", { required: true })}
                    />
                    {errors.UserPhone && (
                      <span className="py-2 text-sm text-red-400">
                        user name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <input
                      placeholder="password"
                      type="password"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("password", { required: true })}
                    />
                    {errors.password && (
                      <span className="py-2 text-sm text-red-400">
                        user name is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col mt-6">
                    <textarea
                      placeholder="Description"
                      className="w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                      {...register("Description", { required: true })}
                    ></textarea>
                    {errors.Description && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                  </div>
                  <button
                    aria-label="add Branch"
                    role="button"
                    type="submit"
                    className="w-full px-6 py-3 mt-5 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                  >
                    Add User
                  </button>
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

import { XIcon } from "@heroicons/react/solid";
import { DoubleBounce } from "better-react-spinkit";
import { useForm } from "react-hook-form";
import {
  useAddUserMutation,
  useGetRolesQuery,
  useUsersQuery,
} from "../../redux/api/UserApi";
import Swal from "sweetalert2";
import React, { useEffect, useState } from "react";

function AddRole({ open, setOpen }) {
  const [addUser, { isLoading, isError, isSuccess }] = useAddUserMutation();
  const { refetch } = useUsersQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const { data } = useGetRolesQuery();
  const onSubmit = async (data) => {
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
        <div className="container mx-auto">
          <div className="flex items-center justify-center w-full h-full">
            <div className="fixed w-4/5 overflow-y-auto bg-white rounded-md shadow md:w-1/2 lg:w-max dark:bg-gray-800 sm:h-auto ">
              <div className="flex items-center justify-between px-4 text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold ">Create New Role</p>
                <button
                  role="button"
                  aria-label="close label"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="w-7" />
                </button>
              </div>
              <div className="px-4 pt-6 pb-1 md:px-10 md:pt-12 md:pb-4">
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                  <div class="form-floating mb-3 xl:w-96">
                    <input
                      type="text"
                      className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      id="floatingInput"
                      placeholder="Role Name"
                      {...register("RoleName", { required: true })}
                    />
                    {errors.RoleName && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                    <label for="floatingInput" class="text-gray-700 text-sm">
                      Role Name
                    </label>
                  </div>
                  {isLoading ? (
                    <button
                      class="flex space-x-6 items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl  px-4 py-2 text-white"
                      disabled
                    >
                      <DoubleBounce color="white" size={30} />
                      <span class="font-medium"> Loading... </span>
                    </button>
                  ) : (
                    <button
                      aria-label="add user"
                      type="submit"
                      className="w-full px-6 py-3 mt-2 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                    >
                      Add User
                    </button>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRole;
import { XIcon } from "@heroicons/react/solid";
import { DoubleBounce } from "better-react-spinkit";
import { useForm } from "react-hook-form";

import {
  useAddUserMutation,
  useGetRolesQuery,
  useUsersQuery,
} from "../../store/user/User";

function AddUser({ open, setOpen }) {
  const [addUser, { isLoading, isError, isSuccess }] = useAddUserMutation();

  const { refetch } = useUsersQuery();
  const { register, handleSubmit, errors, resetField } = useForm();
  const { data: rolesData } = useGetRolesQuery();
  const onSubmit = async (data) => {
    if (!data) return {};
    await addUser(data);
    refetch();
    setOpen(false);
    resetField(
      "FullName",
      "UserPhone",
      "UserName",
      "password",
      "UserType",
      "RoleID"
    );
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
                <p className="text-base font-semibold ">Create New User</p>
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
                  <div className="mb-3 form-floating xl:w-96">
                    <input
                      type="text"
                      className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      id="floatingInput"
                      placeholder="FullName"
                      {...register("FullName", { required: true })}
                    />
                    {errors.FullName && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                    <label
                      htmlFor="floatingInput"
                      className="text-sm text-gray-700"
                    >
                      FullName
                    </label>
                  </div>
                  <div className="mb-3 form-floating xl:w-96">
                    <input
                      type="text"
                      className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      id="floatingInput"
                      placeholder="UserName"
                      {...register("UserName", { required: true })}
                    />
                    {errors.UserName && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                    <label
                      htmlFor="floatingInput"
                      className="text-sm text-gray-700"
                    >
                      UserName
                    </label>
                  </div>
                  <div className="mb-3 form-floating xl:w-96">
                    <input
                      type="text"
                      className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      id="floatingInput"
                      placeholder="UserPhone"
                      {...register("UserPhone", { required: true })}
                    />
                    {errors.UserPhone && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                    <label
                      htmlFor="floatingInput"
                      className="text-sm text-gray-700"
                    >
                      UserPhone
                    </label>
                  </div>
                  <div className="mb-3 form-floating xl:w-96">
                    <select
                      className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                      {...register("RoleID", { required: true })}
                    >
                      <option value="">Select Role</option>
                      {rolesData &&
                        rolesData.map((role) => (
                          <option key={role.id} value={role._id}>
                            {role.RoleName}
                          </option>
                        ))}
                    </select>
                    {errors.RoleID && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                  </div>

                  <div className="mb-3 form-floating xl:w-96">
                    <input
                      type="text"
                      className="block w-full px-3 py-24 pl-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      id="floatingInput"
                      placeholder="password"
                      {...register("password", { required: true })}
                    />

                    {errors.password && (
                      <span className="py-2 text-sm text-red-400">
                        Amount must not be empty!
                      </span>
                    )}
                    <label
                      htmlFor="floatingInput"
                      className="text-sm text-gray-700"
                    >
                      password
                    </label>
                  </div>
                  {isLoading ? (
                    <button
                      className="flex space-x-6 items-center w-full rounded-lg bg-[#FD5353] text-center justify-center text-2xl  px-4 py-2 text-white"
                      disabled
                    >
                      <DoubleBounce color="white" size={30} />
                      <span className="font-medium"> Loading... </span>
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

export default AddUser;

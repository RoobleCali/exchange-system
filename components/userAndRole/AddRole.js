import { XIcon } from "@heroicons/react/solid";
import { DoubleBounce } from "better-react-spinkit";
import { useForm } from "react-hook-form";

import { ChevronDownIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";

function AddRole({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },

    watch,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    alert("submit");
  };
  const rolesJson = [
    {
      Roles: [
        {
          path: "Clients",
          access: ["read", "create", "update", "export", "deposit"],
        },
      ],
    },
  ];
  const [showAccess, setShowAccess] = useState(false);
  const handleCheck = () => {
    setShowAccess(!showAccess);
  };
  const path = watch("path");
  console.log(path);

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
                  <div className="max-h-fit">
                    {/* map the roles json and display as checkbox */}
                    {rolesJson.map((role) => (
                      <div class="form-floating mb-3 xl:w-96">
                        {role.Roles.map((subRole) => (
                          <div class="form-floating mb-3 xl:w-96 border border-gray-200 px-4 overflow-scroll">
                            <div
                              class="accordion accordion-flush"
                              id="accordionFlushExample"
                            >
                              <div class="accordion-item border-t-0 border-l-0 border-r-0 rounded-none bg-white border border-gray-200">
                                <button
                                  class="accordion-button relative flex items-center w-full  py-4   px-5 text-base text-gray-800 text-left bg-white  border-0 rounded-none transition focus:outline-none"
                                  type="button"
                                  data-bs-toggle="collapse"
                                  data-bs-target="#flush-collapseOne"
                                  aria-expanded="false"
                                  aria-controls="flush-collapseOne"
                                  onClick={handleCheck}
                                >
                                  <div className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                      type="checkbox"
                                      value=""
                                      name="bordered-checkbox"
                                      class="w-5 h-5  "
                                      {...register("path", {
                                        required: {
                                          value: true,
                                          message:
                                            "Please select at least one access",
                                        },
                                      })}
                                    />

                                    <p className="text-lg text-gray-600 cursor-pointer">
                                      {subRole.path}
                                    </p>
                                    {errors.path && (
                                      <span className="py-2 text-sm text-red-400">
                                        Amount must not be empty!
                                      </span>
                                    )}
                                  </div>
                                </button>

                                <div
                                  id="flush-collapseOne"
                                  class="accordion-collapse border-0 collapse show"
                                  aria-labelledby="flush-headingOne"
                                  data-bs-parent="#accordionFlushExample"
                                >
                                  <div class="accordion-body py-4 px-5">
                                    {subRole.access.map((access) => (
                                      <div
                                        class={`form-floating mb-3 xl:w-96 
                              ${showAccess && "block"}`}
                                      >
                                        <div className="flex items-center ml-3 space-x-7">
                                          <input
                                            type="checkbox"
                                            checked={path}
                                            {...register(access, {})}
                                          />

                                          <p className="text-gray-500">
                                            {access}
                                          </p>
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <button
                    aria-label="add user"
                    type="submit"
                    className="w-full px-6 py-3 mt-2 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
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

export default AddRole;

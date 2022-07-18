import { XIcon } from "@heroicons/react/solid";
import {
  useForm,
  useFieldArray,
  Controller,
  FormProvider,
} from "react-hook-form";

import React, { useState } from "react";

function AddRole({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues: {
      RoleName: "cashier",
      Roles: [
        {
          path: "client",
          access: ["Deposit", "withdraw"],
        },
      ],
    },
  });
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
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "test",
    }
  );
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
                  {/* inputs based on default value */}
                  {/* <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="RoleName"
                      className="text-gray-600 dark:text-white"
                    >
                      Role Name
                    </label>
                    <Controller
                      as={<input type="text" className="w-full" />}
                      name="RoleName"
                      control={control}
                    />
                    <label
                      htmlFor="path"
                      className="text-gray-600 dark:text-white"
                    >
                      Path
                    </label>
                    <Controller
                      as={<input type="text" className="w-full" />}
                      name="path"
                      control={control}
                    />
                    <label
                      htmlFor="access"
                      className="text-gray-600 dark:text-white"
                    >
                      Access
                    </label>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Controller
                            as={<input type="checkbox" />}
                            name="access"
                            control={control}
                          />
                          <p className="text-sm text-gray-600 dark:text-white">
                            Read
                          </p>
                        </div>
                      </div>
                    </div>
                  </div> */}
                  {/* use array field based on default values */}
                  {/* <div className="flex flex-col space-y-2">
                    <label
                      htmlFor="Roles"
                      className="text-gray-600 dark:text-white"
                    >
                      Roles
                    </label>
                    <div className="flex flex-col space-y-2">
                      {fields.map((field, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between"
                        >
                          <div className="flex items-center">
                            <Controller
                              as={<input type="checkbox" />}
                              name={`${field}.access`}
                              control={control}
                            />
                            <p className="text-sm text-gray-600 dark:text-white">
                              {field.access}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <Controller
                              as={<input type="text" className="w-full" />}
                              name={`${field}.path`}
                              control={control}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}

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

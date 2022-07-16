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
  const userData = [
    { name: "Jeevan" },
    { name: "Manish" },
    { name: "Prince" },
    { name: "Arti" },
    { name: "rahul" },
  ];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (name === "allSelect") {
      let tempUser = users.map((user) => {
        return { ...user, isChecked: checked };
      });
      setUsers(tempUser);
    } else {
      let tempUser = users.map((user) =>
        user.name === name ? { ...user, isChecked: checked } : user
      );
      setUsers(tempUser);
    }
  };
  const [addUser, { isLoading, isError, isSuccess }] = useAddUserMutation();
  const { refetch } = useUsersQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
  } = useForm();
  const { data } = useGetRolesQuery();
  const rolesData = [
    {
      _id: "Role01-01-01",
      RoleName: "CASHIER",
      Roles: [
        {
          path: "Clients",
          access: [
            "read",
            "create",
            "update",
            "export",
            "deposit",
            "withdraw",
            "transfer",
            "exchange",
            "update_client",
            "change_password",
            "view_transactions",
          ],
        },
      ],
    },
    {
      _id: "Role01-01-02",
      RoleName: "ADMINISTRATOR",
      Roles: [
        {
          path: "Clients",
          access: [
            "cash_on_hand",
            "receivable_cash",
            "payable_cash",
            "read",
            "create",
            "update",
            "delete",
            "export",
            "deposit",
            "withdraw",
            "transfer",
            "exchange",
            "close_account",
            "update_client",
            "change_password",
            "view_transactions",
            "delete_transaction",
            "update_transaction",
          ],
        },
        {
          path: "Exchanges",
          access: ["read", "create", "update", "delete", "export", "rate"],
        },
        {
          path: "Banks",
          access: [
            "read",
            "create",
            "update",
            "delete",
            "export",
            "deposit",
            "withdraw",
            "transfer",
            "exchange",
            "close_account",
            "view_transactions",
            "delete_transaction",
            "update_transaction",
          ],
        },
        {
          path: "Cash-flow",
          access: ["read", "create", "update", "delete", "export"],
        },
        {
          path: "Expenses",
          access: ["read", "create", "update", "delete", "export"],
        },
        {
          path: "Capital",
          access: [
            "export",
            "deposit",
            "withdraw",
            "delete_transaction",
            "update_transaction",
          ],
        },
        {
          path: "Summary",
          access: ["read", "create", "update", "delete", "export"],
        },
        {
          path: "General",
          access: ["read", "create", "update", "delete", "export"],
        },
        {
          path: "Users",
          access: ["read", "create", "update"],
        },
        {
          path: "Roles",
          access: ["read", "create", "update"],
        },
        {
          path: "Settings",
          access: ["change_language", "use_dark_mode"],
        },
        {
          path: "inactive-clients",
          access: ["read", "activate", "export"],
        },
      ],
    },
  ];
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

                  <div>
                    <input type="" />
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

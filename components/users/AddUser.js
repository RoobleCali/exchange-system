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
    axios
      .post("https://tick-account.herokuapp.com/api/users/", data, {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      })
      .then((res) => {
        // set users previusly added
        setUsers(res.data);
        setOpen(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // fetch roles from server using axios with token and then show in select box
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    axios
      .get("https://tick-account.herokuapp.com/api/users/roles/", {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      })
      .then((res) => {
        setRoles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <div className="fixed w-10/12 overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
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
                <form className="mt-5">
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="FullName"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="UserName"
                      type="text"
                      min="0"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                  <div className="flex items-center mt-8 space-x-9">
                    <input
                      placeholder="UserPhone"
                      type="tell"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="password"
                      type="password"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                  <div className="flex items-center space-x-9 mt-11">
                    <input
                      placeholder="description"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                </form>
                <div className="flex items-center justify-between mt-9">
                  <button
                    role="button"
                    aria-label="close button"
                    onclick="popuphandler(false)"
                    className="px-6 py-3 text-sm text-white bg-gray-600 rounded shadow focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    aria-label="add Branch"
                    role="button"
                    className="px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                  >
                    Add Branch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUser;

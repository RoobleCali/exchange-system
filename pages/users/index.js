import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import Table from "../../components/table/Table";
import AddUser from "../../components/users/addUser";
import useSWR from "swr";

function index() {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState([]);

  const fetcher = (url, token) => {
    token
      ? axios
          .get(url, { headers: { Authorization: "Bearer " + token } })
          .then((res) => setData(res.data))
      : Router.replace("/login");
  };

  const columns = [
    {
      Header: "_id",
      accessor: "_id",
    },
    {
      Header: "FullName",
      accessor: "FullName",
    },
    {
      Header: "UserPhone",
      accessor: "UserPhone",
    },
    {
      Header: "RoleName",
      accessor: "RoleName",
    },

    // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
  ];
  const token = getCookie("token");
  const { error } = useSWR(
    ["https://tick-account.herokuapp.com/api/users/", token],
    fetcher
  );

  return (
    <div>
      <div class="sm:px-6 w-full">
        <div class="bg-white dark:bg-gray-800 py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="w-full sm:px-6">
            <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
              <div class="flex items-center justify-between">
                <p class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white ">
                  All Users
                </p>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 
                  inline-flex sm:ml-3  items-start justify-start px-6 py-3 
                  bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  onClick={() => setOpen(!open)}
                >
                  <p class="text-sm font-medium leading-none text-white">
                    New User
                  </p>
                </button>
              </div>
            </div>
            <AddUser open={open} setOpen={setOpen} users={Data} />

            {/* table */}
            <Table columns={columns} data={Data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

import axios from "axios";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import Table from "../../components/table/Table";
import AddUser from "../../components/users/addUser";
import { ajax } from "rxjs/ajax";

function index() {
  const [open, setOpen] = useState(false);
  const [Data, setData] = useState([]);
  // get the data using ajax rxjs with token

  console.log(data);
  // get the data with token and cosole log it using rxjs
  const token = getCookie("token");
  const data = ajax
    .getJSON("https://tick-account.herokuapp.com/api/users/", token)
    // get ajax with token and console log it
    .subscribe((res) => console.log(res));

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

  return (
    <div>
      <div class="p-2 mx-auto space-y-10  min- max-w-7xl md:p-4">
        <div class="px-2 md:px-5 py-2 md:py-3 bg-gray-100 dark:bg-gray-700 ">
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

          <AddUser open={open} setOpen={setOpen} users={Data} />

          {/* table */}
        </div>
      </div>

      {/* <Table columns={columns} data={Data} /> */}
    </div>
  );
}

export default index;

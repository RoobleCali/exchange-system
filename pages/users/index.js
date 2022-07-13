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

  // get the data with token and cosole log it using rxjs
  const token = getCookie("token");

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
      <div className="p-2 mx-auto space-y-10 min- max-w-7xl md:p-4">
        <div className="px-2 py-2 bg-gray-100 md:px-5 md:py-3 dark:bg-gray-700 ">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl dark:text-white ">
              All Users
            </p>
            <button
              className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <p className="text-sm font-medium leading-none text-white">
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

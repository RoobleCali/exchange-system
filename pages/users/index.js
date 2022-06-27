import axios from "axios";
import React from "react";
import Actions from "../../components/models/Actions";
import Table, { StatusPill } from "../../components/table/Table";

function index({ data }) {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "Date",
      accessor: "date",
    },
    {
      Header: "Amount",
      accessor: "amount",
    },
    {
      Header: "Description",
      accessor: "description",
    },
    {
      Header: "Currency",
      accessor: "currency",
    },
    {
      Header: "Status",
      accessor: "status",
      Cell: StatusPill,
    },
    // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
    {
      Header: "Actions",
      accessor: "_id",
      Cell: ({ row }) => (
        <Actions link={`transactions/${row.id}`} StatusPill={StatusPill} />
      ),
    },
  ];
  return (
    <div>
      <div class="sm:px-6 w-full">
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="sm:flex items-center justify-between">
            <h1>10 Users Here</h1>
            <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 mt-4 sm:mt-0 inline-flex items-start justify-start px-6 py-3 bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded">
              <p class="text-sm font-medium leading-none text-white">
                Add User
              </p>
            </button>
          </div>
          <Table data={data} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default index;

export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies;
  if (!token) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  } else {
    const resp = await axios.get(`http://localhost:3000/api/transactions`);

    return {
      props: {
        data: resp.data,
      },
    };
  }
};

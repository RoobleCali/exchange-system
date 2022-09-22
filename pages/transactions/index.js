import Table from "../../components/table/Table";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { StatusPill } from "../../components/table/StatusBill";
import Actions from "../../components/clients/Actions";
import React from "react";

function index({ Data }) {
  const columns = [
    {
      Header: "id",
      accessor: "id",
    },
    {
      Header: "name",
      accessor: "name",
    },
    {
      Header: "username",
      accessor: "username",
    },
    {
      Header: "email",
      accessor: "email",
    },
    {
      Header: "phone",
      accessor: "phone",
    },
    {
      Header: "website",
      accessor: "website",
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
    <div className="w-full">
      <Table columns={columns} data={Data} />
    </div>
  );
}

export default index;

export const getServerSideProps = async (ctx) => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  return {
    props: {
      Data: resp.data,
    },
  };
};

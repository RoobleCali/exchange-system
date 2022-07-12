import Table from "../../components/table/Table";
import axios from "axios";
import { useState } from "react";
import { getCookie } from "cookies-next";
import Actions from "../../components/clients/Actions";
import regeneratorRuntime from "regenerator-runtime";
import { useTasksQuery } from "../../redux/api/UserApi";

import { StatusPill } from "../../components/table/StatusBill";

export default () => {
  const { data, error, isLoading, isSuccess } = useTasksQuery();
  console.log(data);
  const columns = [
    {
      Header: "_id",
      accessor: "userId",
    },
    {
      Header: "name",
      accessor: "title",
    },
    {
      Header: "completed",
      accessor: "completed",
    },

    {
      Header: "Actions",
      accessor: "_id",
      Cell: ({ row }) => (
        <Actions link={`transactions/${row.id}`} StatusPill={StatusPill} />
      ),
    },

    // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
  ];
  return (
    <div className="w-full">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Table columns={columns} data={data} />
      )}
    </div>
  );
};

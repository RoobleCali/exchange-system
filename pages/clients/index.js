import Table from "../../components/table/Table";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import { getCookie } from "cookies-next";
import Router from "next/router";
import Actions from "../../components/clients/Actions";
import regeneratorRuntime from "regenerator-runtime";

import { StatusPill } from "../../components/table/StatusBill";

export default () => {
  const [Data, setData] = useState([]);
  const fetcher = (url, token) => {
    token
      ? axios
          .get(url, { headers: { Authorization: "Bearer " + token } })
          .then((res) => setData(res.data))
      : Router.push("/login");
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
      Header: "RoleName",
      accessor: "RoleName",
    },
    {
      Header: "UserPhone",
      accessor: "UserPhone",
    },
    {
      Header: "Actions",
      accessor: "id",
      Cell: ({ row }) => (
        <Actions link={`transactions/${row.id}`} StatusPill={StatusPill} />
      ),
    },

    // actions column with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
  ];
  const token = getCookie("token");
  const { data } = useSWR(
    ["https://tick-account.herokuapp.com/api/users/", token],
    fetcher
  );

  return (
    <div className="w-full">
      <Table columns={columns} data={Data} />
    </div>
  );
};

export const getServerSideProps = async (ctx) => {
  const resp = await axios.get(`https://jsonplaceholder.typicode.com/users`);

  return {
    props: {
      Data: resp.data,
    },
  };
};

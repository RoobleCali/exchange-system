import Table from "../../components/table/Table";
import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import { getCookie } from "cookies-next";
import Router from "next/router";
import Actions from "../../components/clients/Actions";
import { StatusPill } from "../../components/table/StatusBill";

export default ({ data }) => {
  const [Data, setData] = useState(data);
  const fetcher = (url, token) => {
    token
      ? axios
          .get(url, { headers: { athorization: token } })
          .then((res) => setData(res.data))
      : Router.push("/login");
  };

  const columns = [
    {
      Header: "_id",
      accessor: "_id",
    },
    {
      Header: "phone",
      accessor: "phone",
    },
    {
      Header: "CustFullName",
      accessor: "CustFullName",
    },
    {
      Header: "AccountNumber",
      accessor: "AccountNumber",
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
  const { error } = useSWR(
    ["https://www.riyoclean.com/api/customer", token],
    fetcher
  );
  if (error) console.log(error);
  return (
    <div className="w-full">
      <Table columns={columns} data={Data} />
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  // get the token in the cookie
  const token = req.headers.cookie;
  // get the toke in cookie

  if (!token) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  } else {
    try {
      const tokenInCookie = token.split("=")[1];
      console.log(tokenInCookie);
      const response = await axios.get(`http://localhost:3000/api/clients`, {
        headers: {
          athorization: tokenInCookie,
        },
      });
      const data = response.data;

      return { props: { data: data } };
    } catch (error) {
      console.log(error);
    }
  }
};

import Table, { StatusPill } from "../../components/Table";
import { useEffect, useState } from "react";
import axios from "axios";
import Actions from "../../components/models/Actions";
import useSWR from "swr";
export default ({ daata }) => {
  const [Data, setData] = useState(daata);

  // fetch data from api and set it to Data state and set loading to false to stop loading spinner and show table using swr library to fetch data from api and set it to Data state and mutate it to Data state

  const fetcher = async (url) => {
    const res = await axios.get(url);
    return res.data;
  };
  const { data, isValidating } = useSWR(
    "http://localhosts:3000/api/transactions",
    fetcher
  );
  useEffect(() => {
    if (data) {
      // console.log(data);
      setData(data);
      setLoading(false);
    }
  }, [data]);

  if (isValidating) {
    return <div>Loading...</div>;
  }

  // colums for the transactions table (id, date, amount, description, category, actions)  with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
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
    <div className="w-full">
      <Table columns={columns} data={Data} />
    </div>
  );
};

// get sercver side props in nextjs with token to fetch table data
export const getServerSideProps = async (ctx) => {
  console.log(ctx.req.headers.cookie);
  const res = await axios.get(`http://localhost:3000/api/transactions`);
  return { props: { daata: res.data } };
};

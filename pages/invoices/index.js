import axios from "axios";
import Actions from "../../components/models/Actions";
import Table, { StatusPill } from "../../components/Table";
import regeneratorRuntime from "regenerator-runtime";
import { useSelector } from "react-redux";

export default ({ data }) => {
  const user = useSelector((state) => state.transactions.transactions);

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
      Cell: ({ row }) => {
        return <Actions link={`/invoices/${row.id}`} StatusPill={StatusPill} />;
      },
    },
  ];
  return (
    <div>
      <Table data={data} columns={columns} />
    </div>
  );
};

export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies;
  if (token) {
    res.writeHead(302, {
      Location: "/login",
    });
  } else {
    const resp = await axios.get(`http://localhost:3000/api/transactions`);

    return {
      props: {
        data: resp.data,
      },
    };
  }
};

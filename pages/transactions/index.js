import Table, { StatusPill } from "../../components/Table";
import axios from "axios";
import Actions from "../../components/models/Actions";
import regeneratorRuntime from "regenerator-runtime";
export default ({ Data }) => {
  // fetch data from api and set it to Data state and set loading to false to stop loading spinner and show table using swr library to fetch data from api and set it to Data state and mutate it to Data state

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
export const getStaticProps = async ({ req }) => {
  const res = await axios.get(`http://localhost:3000/api/transactions`);
  return { props: { Data: res.data } };
};

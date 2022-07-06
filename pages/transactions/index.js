import Table from "../../components/table/Table";
import axios from "axios";
import regeneratorRuntime from "regenerator-runtime";
import { StatusPill } from "../../components/table/StatusBill";
import Actions from "../../components/clients/Actions";
export default ({ Data }) => {
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

export const getServerSideProps = async ({ req, res }) => {
  const response = await axios.get(`http://localhost:3000/api/transactions`);
  const data = response.data;

  return { props: { Data: data } };
};

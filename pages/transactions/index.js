import Table, { StatusPill } from "../../components/Table";
import axios from "axios";
import Actions from "../../components/models/Actions";
import regeneratorRuntime from "regenerator-runtime";
import { wrapper } from "../../redux/store";
import { addTransaction, addUser } from "../../redux/slices/transactionSlice";
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const token = req.headers.cookie;

      const resp = await axios.get(`http://localhost:3000/api/transactions`);
      const data = resp.data;
      store.dispatch(addTransaction(data));
      return { props: { Data: data } };
    }
);

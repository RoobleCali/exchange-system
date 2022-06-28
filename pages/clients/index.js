import Table from "../../components/table/Table";
import axios from "axios";
import Actions from "../../components/table/Actions";
import regeneratorRuntime from "regenerator-runtime";
import { wrapper } from "../../redux/store";
import { addTransaction } from "../../redux/slices/transactionSlice";
import { StatusPill } from "../../components/table/StatusBill";
export default ({ Data }) => {
  const columns = [
    {
      Header: "ID",
      accessor: "id",
    },
    {
      Header: "name",
      accessor: "name",
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
      // get the token in the cookie
      const token = req.headers.cookie;
      console.log(token);
      if (token) {
        res.writeHead(302, {
          Location: "/login",
        });
        res.end();
      } else {
        // get jsonplaceholder data user

        // dispatch the data to the reducer
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = response.data;
        store.dispatch(addTransaction(data));

        return { props: { Data: data } };
      }
    }
);

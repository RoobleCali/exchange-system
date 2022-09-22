import axios from "axios";
import Actions from "../../components/table/Actions";
import Table from "../../components/table/Table";
import regeneratorRuntime from "regenerator-runtime";
import { useSelector } from "react-redux";
import { StatusPill } from "../../components/table/StatusBill";

function Index({ data }) {
  // colums for the transactions table (id, date, amount, description, category, actions)  with crud operations (create, update, delete) for each row (edit, delete) and a link to the transaction details page (/transactions/:id) for each row
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
}
export default Index;
export const getServerSideProps = async ({ req, res }) => {
  const token = req.cookies;
  if (!token) {
    res.writeHead(302, {
      Location: "/login",
    });
    res.end();
  } else {
    try {
      const resp = await axios.get(
        `https://jsonplaceholder.typicode.com/users`
      );

      return {
        props: {
          data: resp.data,
        },
      };
    } catch (error) {
      console.log(error);
    }
  }
};

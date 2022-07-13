import Actions from "../../components/clients/Actions";
import { useTasksQuery } from "../../redux/api/UserApi";
import Table from "../../components/table/Table";

import { StatusPill } from "../../components/table/StatusBill";

export default () => {
  const { data, error, isLoading, isSuccess } = useTasksQuery();
  console.log(data);
  console.log(error);
  const columns = [
    {
      Header: "_id",
      accessor: "_id",
    },
    {
      Header: "name",
      accessor: "FullName",
    },
    {
      Header: "UserPhone",
      accessor: "UserPhone",
    },
    {
      Header: "userType",
      accessor: "userType",
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

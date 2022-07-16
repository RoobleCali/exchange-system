import Actions from "../../components/clients/Actions";
import Table from "../../components/table/Table";

import { StatusPill } from "../../components/table/StatusBill";
import { useGetClientsQuery } from "../../redux/api/UserApi";
export default () => {
  const { data: Clients, isLoading, error } = useGetClientsQuery();

  console.log(Clients);
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
      <div className="mt-4">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Table columns={columns} data={Clients} />
        )}
      </div>
    </div>
  );
};

// import Actions from "../../components/clients/Actions";
import Table from "../../components/table/Table";

// import { StatusPill } from "../../components/table/StatusBill";
import { useGetClientsQuery } from "../../redux/api/UserApi";
function Index() {
  const { data: Clients, isLoading, error } = useGetClientsQuery();

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
}

export default Index;

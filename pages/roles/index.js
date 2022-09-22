import React, { useState } from "react";
import AddRole from "../../components/userAndRole/AddRole";
import { PencilAltIcon, TrashIcon } from "@heroicons/react/solid";
import { useGetRolesQuery } from "../../redux/api/UserApi";
function Index() {
  const [open, setOpen] = useState(false);
  const { data, error, isLoading, isSuccess } = useGetRolesQuery();
  console.log(data);
  return (
    <div>
      <div className="p-2 mx-auto space-y-10 min- max-w-7xl ">
        <div className="px-2 py-2 bg-gray-100 md:py-3 dark:bg-gray-700 ">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold leading-normal text-gray-800 focus:outline-none sm:text-lg md:text-xl lg:text-2xl dark:text-white ">
              All Roles
            </p>
            <button
              className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
              onClick={() => setOpen(!open)}
            >
              <p className="text-sm font-medium leading-none text-white">
                New Role
              </p>
            </button>
          </div>
          <AddRole open={open} setOpen={setOpen} />
          {/* table */}
          <div className="relative overflow-x-auto sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 mt-14 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th className="px-6 py-3">User name</th>

                  <th className="px-6 py-3">RoleName</th>
                  <th className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              {/* map the data */}
              {isSuccess && data.map((item) => console.log(item.Roles))}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;

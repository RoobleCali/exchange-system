import React from "react";
import { useRouter } from "next/router";
import {
  AdjustmentsIcon,
  CloudDownloadIcon,
  UserAddIcon,
} from "@heroicons/react/solid";
import ReactToPrint from "react-to-print";
import DataPicker from "../models/DataPicker";
function Topbar({ preGlobalFilteredRows, setGlobalFilter, globalFilter }) {
  const router = useRouter();
  const route = router.pathname;
  function GlobalFilter({
    preGlobalFilteredRows,
    globalFilter,
    setGlobalFilter,
    headerGroups,
  }) {
    const count = preGlobalFilteredRows.length;
    const [value, setValue] = useState(globalFilter);
    const onChange = useAsyncDebounce((value) => {
      setGlobalFilter(value || undefined);
    }, 100);

    return (
      <div className="relative">
        <div class="relative w-2xl">
          <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <svg
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
               focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
               dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
            placeholder={`${count} ${
              route === "/transactions" ? "transactions" : "invoices"
            }`}
            value={value || ""}
            onChange={(e) => {
              setValue(e.target.value);
              onChange(e.target.value);
            }}
          />
        </div>
      </div>
    );
  }
  return (
    <div>
      {/* top bar */}
      <div>
        {route === "/transactions" ||
          (route === "/clients" && (
            <div className="flex items-center justify-between w-full space-x-10">
              <div className="flex items-center justify-center space-x-5 sm:justify-between sm:space-x-3">
                {/* filter  */}
                <GlobalFilter />

                {/* DateFilter function call here nd show filtered date*/}
                {/* <DateFilter column={{ id: "date" }} /> */}
                <div
                  className="items-center px-2 py-1 space-x-2 bg-white cursor-pointer dark:bg-slate-600 sm:flex innline-flex"
                  onClick={() => setOpen(!open)}
                >
                  <AdjustmentsIcon className="w-5 h-6 text-gray-500 rotate-90 bg-white dark:text-gray-200 dark:bg-slate-600" />
                </div>
              </div>
              {/* filter  */}
              <div className="flex items-center justify-center space-x-3">
                <ReactToPrint
                  trigger={() => (
                    <div className="flex items-center justify-center px-2 py-2 ml-3 space-x-2 text-white bg-orange-700 rounded-md cursor-pointer dark:bg-slate-600 sm:flex innline-flex">
                      <CloudDownloadIcon className="w-4 h-4" />
                      <button className="truncate ">Print </button>
                    </div>
                  )}
                  content={() => componentRef}
                />
                {/* add client button */}
                <div className="flex items-center justify-center px-2 py-2 ml-3 space-x-2 text-white bg-blue-700 rounded-md cursor-pointer dark:bg-slate-600 sm:flex innline-flex">
                  <UserAddIcon className="w-5 h-6 " />

                  <button className="truncate ">Add Client</button>
                </div>
              </div>
            </div>
          ))}
        {route === "/invoices" && (
          <div className="flex items-center justify-between w-full">
            {/* left */}
            <div className="flex items-center max-w-md py-2 space-x-2 text-xs text-white bg-blue-700 rounded-md w-max innline-flex md:px-2">
              <CloudDownloadIcon className="w-4 h-4" />
              <button className="truncate w-14 sm:w-max">download PDF </button>
            </div>
            {/* right */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* filter  */}
              <GlobalFilter
                preGlobalFilteredRows={preGlobalFilteredRows}
                globalFilter={state.globalFilter}
                setGlobalFilter={setGlobalFilter}
              />
              {headerGroups.map((headerGroup) =>
                headerGroup.headers.map((column) =>
                  column.Filter ? (
                    <div key={column.id}>
                      <label htmlFor={column.id}>
                        {column.render("Header")}:{" "}
                      </label>
                      {column.render("Filter")}
                    </div>
                  ) : null
                )
              )}
              {/* filter  */}
              <select className="items-center hidden py-2 space-x-2 text-xs bg-white border-none rounded-sm outline-none cursor-pointer sm:inline-block focus:border-none dark:bg-gray-800 md:px-2 innline-flex">
                <option value="">Pending</option>
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Cancelled</option>
              </select>
            </div>
          </div>
        )}
      </div>
      {/* model filter data */}
      <DataPicker />
    </div>
  );
}

export default Topbar;

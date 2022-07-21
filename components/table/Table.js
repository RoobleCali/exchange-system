import { useRef, useState } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import { SortIcon, SortUpIcon, SortDownIcon } from "../shared/Icons";
import { AdjustmentsIcon, CloudDownloadIcon } from "@heroicons/react/outline";
import DataPicker from "../models/DataPicker";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";
import Pagination from "./Pagination";
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 100);
  const router = useRouter();
  const route = router.pathname;
  return (
    <div className="relative w-full">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="voice-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
          rounded-lg focus:ring-blue-500
         focus:border-blue-500 block   px-4  pl-10 p-2.5  dark:bg-gray-700
          dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
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
function Table({ columns, data }) {
  const [open, setOpen] = useState(false);
  let componentRef = useRef(null);
  const router = useRouter();
  const route = router.pathname;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  // Render the UI for your table
  return (
    <div className="p-2 mx-auto space-y-10 shadow-xl min- max-w-7xl md:p-4">
      {/* top bar */}
      <div>
        {route === "/transactions" ||
          (route === "/clients" && (
            <div className="flex items-center justify-between w-full space-x-4">
              <div className="flex items-center justify-center space-x-2 sm:justify-between sm:space-x-3">
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
                {/* DateFilter function call here nd show filtered date*/}
                {/* <DateFilter column={{ id: "date" }} /> */}
                <div
                  className="items-center px-2 py-1 space-x-2 bg-white cursor-pointer md:ml-1 dark:bg-slate-600 sm:flex innline-flex"
                  onClick={() => setOpen(!open)}
                >
                  <AdjustmentsIcon className="w-5 h-6 text-gray-500 rotate-90 bg-white dark:text-gray-200 dark:bg-slate-600" />
                </div>
              </div>
              {/* filter  */}
              <div className="flex items-center justify-center md:space-x-3">
                <ReactToPrint
                  trigger={() => (
                    <div className="flex items-center max-w-md py-2 space-x-2 text-xs text-center text-white bg-blue-700 rounded-md cursor-pointer md:px-2 w-max innline-flex">
                      <CloudDownloadIcon className="w-4 h-4" />
                      <button className="truncate ">Print </button>
                    </div>
                  )}
                  content={() => componentRef}
                />
              </div>
            </div>
          ))}
        {route === "/invoices" && (
          <div className="flex items-center justify-between w-full">
            {/* left */}
            <div className="flex items-center max-w-md px-2 py-2 space-x-2 text-xs text-white bg-blue-700 rounded-md w-max innline-flex md:px-2">
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
            </div>
          </div>
        )}
      </div>
      {/* model filter data */}
      <DataPicker open={open} setOpen={setOpen} data={data} />
      {/* table */}
      <div className="w-full border-b divide-y divide-gray-200">
        <table
          {...getTableProps()}
          className="inline-block w-full overflow-hidden overflow-x-scroll border-gray-200 dark:bg-gray-800 sm:rounded-lg dark:text-gray-300"
          ref={(el) => (componentRef = el)}
        >
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={index}>
                {headerGroup.headers.map((column) => (
                  <th
                    className="w-full px-5 py-3 m-auto text-xs font-medium tracking-wider text-left text-gray-500 uppercase bg-gray-200 group dark:bg-gray-600 p-auto dark:text-gray-600"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex justify-between w-full items-cente dark:text-gray-300">
                      {column.render("Header")}
                      {/* Add a sort direction indicator */}
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <SortDownIcon className="w-4 h-4 text-gray-400" />
                          ) : (
                            <SortUpIcon className="w-4 h-4 text-gray-400" />
                          )
                        ) : (
                          <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                        )}
                      </span>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="w-full h-full divide-y divide-gray-200 "
          >
            {/* if page lenght is less than zero show no data else show the data */}
            {page.length > 0 ? (
              page.map((row, i) => {
                // new
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()} key={i}>
                    {row.cells.map((cell, i) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-5 py-4 text-gray-500 dark:text-gray-300 w-max whitespace-nowrap"
                          role="cell"
                          key={i}
                        >
                          {cell.column.Cell.name === "defaultRenderer" ? (
                            <div className="text-sm text-gray-500 dark:text-gray-300">
                              {cell.render("Cell")}
                            </div>
                          ) : (
                            cell.render("Cell")
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })
            ) : (
              <tr className="mt-24">
                <td colSpan={columns.length} className="mt-24 text-center">
                  <div className="mt-24 text-xl font-medium text-gray-500 dark:text-gray-300">
                    No Data Found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
        pageOptions={pageOptions}
        state={state}
        gotoPage={gotoPage}
        setPageSize={setPageSize}
      />
    </div>
  );
}

export default Table;

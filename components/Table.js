import React, { useRef, useState } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
//hero icons
import {
  ChevronDoubleLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleRightIcon,
  å,
} from "@heroicons/react/solid";
//table component
import { Button, PageButton } from "./shared/Button";
import { SortIcon, SortUpIcon, SortDownIcon } from "./shared/Icons";
import {
  AdjustmentsIcon,
  CloudDownloadIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import DataPicker from "./models/DataPicker";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";

// access status row data and return the status icon and color based on the status
export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={`  
       ${
         status.startsWith("success")
           ? "bg-green-100 text-green-500 px-4 py-1 text-sm  w-max truncate rounded-md"
           : null
       }
        ${
          status.startsWith("pending")
            ? "bg-orange-100 text-orange-500 px-4 py-1 text-sm  rounded-md truncate"
            : null
        }
        ${
          status.startsWith("error")
            ? "   text-red-700 bg-red-100  px-7 py-1 text-sm w-32  truncate rounded-md"
            : null
        } 
    
 `}
    >
      {status}
    </span>
  );
}
// global filter component for the table header if no data found in the table then show no data found

// Define a default UI for filtering
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
    <div className="relative">
      <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4  text-gray-600" />
      </div>
      <input
        type="search"
        id="default-search"
        className="block py-2 px-10 w-full text-[12px] sm:text-sm text-gray-900 bg-white rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
  );
}

function Table({ columns, data }) {
  const [open, setOpen] = useState(false);
  let componentRef = useRef(null);
  const router = useRouter();
  const route = router.pathname;

  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page
    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
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
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );

  // Render the UI for your table
  return (
    <div className="space-y-10 max-w-7xl mx-auto shadow-xl p-2 md:p-4">
      {/* top bar */}

      <div>
        {route === "/invoices" && (
          <div className="w-full flex items-center justify-between">
            {/* left */}
            <div className="  w-max flex space-x-2 innline-flex items-center bg-blue-700 md:px-2 max-w-md text-xs py-2 rounded-md text-white">
              <CloudDownloadIcon className="w-4 h-4" />
              <button className="w-14 sm:w-max truncate">download PDF </button>
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
              <div
                className="  cursor-pointer  bg-white dark:text-gray-700 dark:bg-gray-800 px-2 py-1 sm:flex space-x-2 innline-flex items-center "
                onClick={() => setOpen(!open)}
              >
                <AdjustmentsIcon className="w-5 h-6 text-gray-500     dark:text-gray-200 rotate-90" />
              </div>
              {/* filter  */}
              <select className="cursor-pointer hidden sm:inline-block py-2 focus:border-none border-none outline-none text-xs bg-white dark:bg-gray-800 rounded-sm md:px-2     space-x-2 innline-flex items-center">
                <option value="">Pending</option>
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Cancelled</option>
              </select>
            </div>
          </div>
        )}
        {route === "/transactions" && (
          <div className="w-full space-x-10 flex items-center justify-between">
            <div className="flex items-center justify-center sm:justify-between sm:space-x-3 space-x-5">
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
              <div
                className=" cursor-pointer  bg-white dark:bg-slate-600   px-2 py-1 sm:flex space-x-2 innline-flex items-center "
                onClick={() => setOpen(!open)}
              >
                <AdjustmentsIcon className="w-5 h-6 text-gray-500 dark:text-gray-200  bg-white dark:bg-slate-600  rotate-90" />
              </div>
            </div>
            {/* filter  */}
            <div className="flex items-center justify-center space-x-3">
              <select className="cursor-pointer hidden  py-2  sm:inline-block focus:border-none border-none outline-none text-xs bg-white dark:bg-gray-800 rounded-sm px-0    space-x-2 innline-flex items-center">
                <option value="">Pending</option>
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Cancelled</option>
              </select>
              <ReactToPrint
                trigger={() => (
                  <div className="cursor-pointer text-center w-max flex space-x-2 innline-flex items-center bg-blue-700 px-2 max-w-md text-xs py-2 rounded-md text-white">
                    <CloudDownloadIcon className="w-4 h-4" />
                    <button className=" truncate">Print </button>
                  </div>
                )}
                content={() => componentRef}
              />
            </div>

            {/* download button */}
            {/* download report and print */}
          </div>
        )}
      </div>
      {/* model filter data */}
      <DataPicker open={open} setOpen={setOpen} data={data} />
      {/* table */}
      <div className="w-full   divide-y divide-gray-200    border-b">
        <table
          {...getTableProps()}
          className="  dark:bg-gray-800 w-full pb-16 overflow-x-scroll overflow-hidden   inline-block border-gray-200 sm:rounded-lg dark:text-gray-300 "
          ref={(el) => (componentRef = el)}
        >
          <thead className="">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props

                  <th
                    className="group px-5 w-full m-auto bg-gray-200 dark:bg-gray-600  text-gray-500 p-auto  py-3 text-left text-xs font-medium   dark:text-gray-600 uppercase tracking-wider"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex items-cente  dark:text-gray-300 w-full justify-between">
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
            className=" divide-y divide-gray-200 w-full"
          >
            {/* if page lenght is less than zero show no data else show the data */}
            {page.length > 0 ? (
              page.map((row, i) => {
                // new
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <td
                          {...cell.getCellProps()}
                          className="px-5 text-gray-500 dark:text-gray-300 py-4 w-max whitespace-nowrap"
                          role="cell"
                        >
                          {cell.column.Cell.name === "defaultRenderer" ? (
                            <div className="text-sm  text-gray-500 dark:text-gray-300">
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
                <td colSpan={columns.length} className="text-center mt-24">
                  <div className="text-xl font-medium mt-24 text-gray-500 dark:text-gray-300">
                    No Data Found
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="w-full flex items-center justify-center">
        {/* mobile pagination */}
        <div className="flex-1 p-2 flex justify-between  sm:hidden">
          <Button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </Button>
          <Button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </Button>
        </div>
        {/* large screen pagination */}
        <div className="hidden flex-1 sm:flex sm:items-center px-2 justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <select
                className="cursor-pointer py-2 focus:border-none border-none outline-none
               text-sm bg-white dark:bg-gray-800 rounded-sm px-2   
               flex space-x-2 innline-flex items-center"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-xl"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <ChevronDoubleRightIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;

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
} from "@heroicons/react/solid";
//table component
import { Button, PageButton } from "../shared/Button";
import { SortIcon, SortUpIcon, SortDownIcon } from "../shared/Icons";
import {
  AdjustmentsIcon,
  CloudDownloadIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import DataPicker from "../models/DataPicker";
import { useRouter } from "next/router";
import ReactToPrint from "react-to-print";

// access status row data and return the status icon and color based on the status

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
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchIcon className="w-4 text-gray-600" />
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
    <div className="p-2 mx-auto space-y-10 shadow-xl max-w-7xl md:p-4">
      {/* top bar */}

      <div>
        {route === "/transactions" && (
          <div className="flex items-center justify-between w-full space-x-10">
            <div className="flex items-center justify-center space-x-5 sm:justify-between sm:space-x-3">
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
                className="items-center px-2 py-1 space-x-2 bg-white cursor-pointer dark:bg-slate-600 sm:flex innline-flex"
                onClick={() => setOpen(!open)}
              >
                <AdjustmentsIcon className="w-5 h-6 text-gray-500 rotate-90 bg-white dark:text-gray-200 dark:bg-slate-600" />
              </div>
            </div>
            {/* filter  */}
            <div className="flex items-center justify-center space-x-3">
              <select className="items-center hidden px-0 py-2 space-x-2 text-xs bg-white border-none rounded-sm outline-none cursor-pointer sm:inline-block focus:border-none dark:bg-gray-800 innline-flex">
                <option value="">Pending</option>
                <option value="">All</option>
                <option value="">Completed</option>
                <option value="">Cancelled</option>
              </select>
              <ReactToPrint
                trigger={() => (
                  <div className="flex items-center max-w-md px-2 py-2 space-x-2 text-xs text-center text-white bg-blue-700 rounded-md cursor-pointer w-max innline-flex">
                    <CloudDownloadIcon className="w-4 h-4" />
                    <button className="truncate ">Print </button>
                  </div>
                )}
                content={() => componentRef}
              />
            </div>

            {/* download button */}
            {/* download report and print */}
          </div>
        )}
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
              <div
                className="items-center px-2 py-1 space-x-2 bg-white cursor-pointer dark:text-gray-700 dark:bg-gray-800 sm:flex innline-flex"
                onClick={() => setOpen(!open)}
              >
                <AdjustmentsIcon className="w-5 h-6 text-gray-500 rotate-90 dark:text-gray-200" />
              </div>
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
      <DataPicker open={open} setOpen={setOpen} data={data} />
      {/* table */}
      <div className="w-full border-b divide-y divide-gray-200">
        <table
          {...getTableProps()}
          className="inline-block w-full pb-16 overflow-hidden overflow-x-scroll border-gray-200 dark:bg-gray-800 sm:rounded-lg dark:text-gray-300"
          ref={(el) => (componentRef = el)}
        >
          <thead className="">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
                {headerGroup.headers.map((column) => (
                  // Add the sorting props to control sorting. For this example
                  // we can add them into the header props

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
            className="w-full divide-y divide-gray-200 "
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
      {/* Pagination */}
      <div className="flex items-center justify-center w-full">
        {/* mobile pagination */}
        <div className="flex justify-between flex-1 p-2 sm:hidden">
          <button onClick={() => previousPage()} disabled={!canPreviousPage}>
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
        {/* large screen pagination */}
        <div className="justify-between flex-1 hidden px-2 sm:flex sm:items-center">
          <div className="flex items-baseline gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <select
                className="flex items-center px-2 py-2 space-x-2 text-sm bg-white border-none rounded-sm outline-none cursor-pointer focus:border-none dark:bg-gray-800 innline-flex"
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
              className="relative z-0 inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-xl"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <ChevronDoubleLeftIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <ChevronLeftIcon
                  className="w-5 h-5 text-gray-400"
                  aria-hidden="true"
                />
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <ChevronRightIcon
                  className="w-5 h-5 text-gray-400"
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
                  className="w-5 h-5 text-gray-400"
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

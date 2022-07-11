import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { AdjustmentsIcon, CloudDownloadIcon } from "@heroicons/react/outline";
import ReactToPrint from "react-to-print";

function Pagination({
  previousPage,
  nextPage,
  canPreviousPage,
  canNextPage,
  state,
  pageOptions,
  gotoPage,
  setPageSize,
}) {
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
  // filter date range in the table
  // function DateFilter({ preFilteredRows, setFilter, filter, column: { id } }) {
  //   const [min, setMin] = useState(filter.min);
  //   const [max, setMax] = useState(filter.max);
  //   const onMinChange = (e) => {
  //     setMin(e.target.value);
  //   };
  //   const onMaxChange = (e) => {
  //     setMax(e.target.value);
  //   };
  //   const onSubmit = () => {
  //     setFilter((rows) => {
  //       return rows.filter((row) => {
  //         const rowValue = row.values[id];
  //         return rowValue >= min && rowValue <= max;
  //       });
  //     });
  //   };
  //   return (
  //     <div className="flex items-center">
  //       <div className="flex-1">
  //         <input
  //           type="date"
  //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
  //          focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  //          dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //           required
  //           value={min}
  //           onChange={onMinChange}
  //         />
  //       </div>
  //       <div className="flex-1">
  //         <input
  //           type="date"
  //           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500
  //           focus:border-blue-500 block w-4xl pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
  //           dark:focus:ring-blue-500 dark:focus:border-blue-500"
  //           required
  //           value={max}
  //           onChange={onMaxChange}
  //         />
  //       </div>
  //       <div className="flex-1">
  //         <button
  //           className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
  //           type="button"
  //           onClick={onSubmit}
  //         >
  //           Filter
  //         </button>
  //       </div>
  //     </div>
  //   );
  // }
  return (
    <div>
      {/* pagination */}
      <div className="flex justify-between flex-1 p-2 sm:hidden">
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          Previous
        </button>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          Next
        </button>
      </div>
      <div className="justify-between flex-1 hidden px-2 sm:flex sm:items-center">
        <div className="flex items-baseline w-96 gap-x-2">
          <span className="text-sm text-gray-800 dark:text-gray-300">
            Page <span className="font-medium">{state.pageIndex + 1}</span> of
            <span className="ml-2 font-medium">{pageOptions.length}</span>
          </span>
          <label>
            <select
              className="flex items-center px-2 py-2 space-x-2 text-sm text-gray-600 border-none rounded-sm outline-none cursor-pointer focus:border-none dark:bg-gray-800 innline-flex"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 100, 150].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className="flex items-center justify-center">
          <div>
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <ChevronLeftIcon className="text-gray-400 w-7 h-7" />
            </button>
          </div>
          <div className="flex max-w-md overflow-x-scroll">
            {pageOptions.map((page, i) => {
              const isActive = i === state.pageIndex;
              return (
                <div className="max-w-2xl py-6 mx-auto" key={i}>
                  <span
                    key={page}
                    className={`rounded-l-xl  px-3 py-2 mx-2 text-base font-bold leading-tight 
                       transition duration-150 ease-in-out rounded 
                       shadow cursor-pointer text-gray-200 hover:text-white hover:bg-indigo-600  sm:mx-4 focus:outline-none ${
                         isActive
                           ? "bg-indigo-600 text-white"
                           : "text-indigo-700"
                       }`}
                    onClick={() => gotoPage(i)}
                    disabled={i === state.pageIndex}
                  >
                    {page}
                  </span>
                </div>
              );
            })}
          </div>
          <div className="pl-2">
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <ChevronRightIcon className="text-gray-400 w-7 h-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;

import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import ReactPaginate from "react-paginate";

function Pagination({ state, pageOptions, gotoPage, setPageSize }) {
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
    <div className="justify-between flex-1 px-2 space-y-5 md:space-y-0 sm:flex sm:items-center">
      <div className="flex items-baseline w-96 gap-x-2">
        <span className="text-sm text-gray-800 dark:text-gray-300">
          Page <span className="font-medium">{state.pageIndex + 1}</span> of
          <span className="ml-2 font-medium">{pageOptions.length}</span>
        </span>
        <label>
          <select
            className="flex items-center px-2 py-2 space-x-2 text-sm text-gray-600 border-none rounded-sm outline-none cursor-pointer dark:text-gray-300 focus:border-none dark:bg-gray-800 innline-flex"
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
      <div className="flex h-8 py-0 overflow-x-scroll bg-gray-300 rounded-md w-max dark:bg-gray-600">
        <ReactPaginate
          previousLabel={<ChevronLeftIcon className="text-gray-400 w-7 h-7" />}
          nextLabel={<ChevronRightIcon className="text-gray-400 w-7 h-7" />}
          breakLabel={"..."}
          breakClassName={"break-me mx-2"}
          pageCount={pageOptions.length}
          marginPagesDisplayed={1.5}
          pageRangeDisplayed={1}
          onPageChange={(e) => gotoPage(e.selected)}
          containerClassName={
            "pagination flex items-center justify-center py-3 "
          }
          activeClassName={
            "rounded-l-xl      w-[24px] flex items-center  justify-center text-center transition duration-150 ease-in-out rounded   shadow cursor-pointer text-gray-200 text-white bg-indigo-600   focus:outline-none"
          }
          // forcePage={state.pageIndex}
          disabledClassName={"disabled"}
          pageLinkClassName={
            "rounded-l-xl  px-2 py-2 mx-2 text-base font-bold leading-tight   transition duration-150 ease-in-out rounded   shadow cursor-pointer dark:text-gray-200 hover:text-white hover:bg-indigo-600   focus:outline-none"
          }
          previousClassName={""}
          nextClassName={"page-link"}
        />
      </div>
    </div>
  );
}

export default Pagination;

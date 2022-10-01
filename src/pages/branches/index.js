import { PencilIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import AddBranch from "../../components/branches/AddBranch";
import SearchFilter from "../../components/common/SearchFilter";
import Grid from "../../components/Loaders/Grid";
import { useBranchQuery, useDeleteBranchMutation } from "../../store/branch";

function Index() {
  const [open, setOpen] = useState(false);
  const [openDailog, setopenDailog] = useState(false);
  const [inputText, setInputText] = useState("");
  const { error, isFetching, data } = useBranchQuery();
  const [DeleteBranch, { isLoading }] = useDeleteBranchMutation();
  const { refetch } = useBranchQuery();
  const inputHandler = (e) => {
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  // delete Branch
  const deleteBranch = (d) => {
    DeleteBranch(d);
    refetch();
  };
  const filteredData =
    data &&
    data.filter((branch) => {
      //if no input the return the original
      if (inputText === "") return branch;
      else {
        return branch.BranchName.toLowerCase().includes(inputText);
      }
    });
  return (
    <div className="space-y-7 max-w-[90rem]max-w- mx-auto">
      {/* top */}
      <div className="px-4 py-4 bg-gray-100 rounded-tl-lg rounded-tr-lg md:px-10 md:py-7 dark:bg-gray-700">
        <div className="flex items-center justify-between">
          <SearchFilter inputHandler={inputHandler} />
          <button
            className="inline-flex items-start justify-start px-6 py-3 bg-indigo-700 rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 sm:ml-3 hover:bg-indigo-600 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <p className="text-sm font-medium leading-none text-white truncate">
              Add Branch
            </p>
          </button>
        </div>
      </div>
      <AddBranch open={open} setOpen={setOpen} />
      {/* cards */} {isFetching && <Grid />}
      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {/* card one */}
        {data &&
          filteredData.map((e) => (
            // eslint-disable-next-line react/jsx-key
            <div className="relative w-full mx-auto">
              <a
                className="relative inline-block w-full transition-transform duration-300 ease-in-out transform hover:-translate-y-2"
                key={e._id}
              >
                <div className="p-4 bg-white rounded-lg shadow">
                  <div className="relative flex justify-center h-40 overflow-hidden rounded-lg">
                    <div className="w-full transition-transform duration-500 ease-in-out transform hover:scale-110">
                      <div className="absolute inset-0 bg-black opacity-10" />
                    </div>

                    <div className="absolute bottom-0 flex justify-center mb-3" />

                    <span className="absolute top-0 left-0 z-10 inline-flex px-3 py-2 mt-3 ml-3 text-sm font-medium text-white bg-red-500 rounded-lg select-none">
                      {/* {e.Balance} */}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h2
                      className="text-base font-medium text-gray-800 md:text-lg line-clamp-1"
                      title="New York"
                    >
                      {e.BranchName}
                    </h2>
                    <p
                      className="mt-2 text-sm text-gray-800 line-clamp-1"
                      title="New York, NY 10004, United States"
                    >
                      {e.BranchPhone}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-8">
                    <p className="flex items-center text-center text-gray-800 xl:flex-row xl:items-center">
                      <svg
                        className="inline-block w-6 h-6 mr-3 text-gray-800 fill-current xl:w-4 xl:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M570.53,242,512,190.75V48a16,16,0,0,0-16-16H400a16,16,0,0,0-16,16V78.75L298.53,4a16,16,0,0,0-21.06,0L5.47,242a16,16,0,0,0,21.07,24.09L64,233.27V464a48.05,48.05,0,0,0,48,48H464a48.05,48.05,0,0,0,48-48V233.27l37.46,32.79A16,16,0,0,0,570.53,242ZM480,464a16,16,0,0,1-16,16H112a16,16,0,0,1-16-16V205.27l192-168,192,168Zm0-301.25-64-56V64h64ZM208,218.67V325.34A26.75,26.75,0,0,0,234.66,352H341.3A26.76,26.76,0,0,0,368,325.34V218.67A26.75,26.75,0,0,0,341.3,192H234.66A26.74,26.74,0,0,0,208,218.67ZM240,224h96v96H240Z"></path>
                      </svg>
                      <span className="truncate ">
                        ${e.SendCommission} charge
                      </span>
                    </p>
                    <p className="flex items-center text-center text-gray-800 ">
                      <svg
                        className="inline-block w-5 h-5 mr-3 text-gray-800 fill-current xl:w-4 xl:h-4"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.5883 7.872H16.4286L16.7097 8.99658H6.74743V10.1211H17.4309C17.5163 10.1211 17.6006 10.1017 17.6774 10.0642C17.7542 10.0267 17.8214 9.97222 17.874 9.90487C17.9266 9.83753 17.9631 9.75908 17.9808 9.6755C17.9986 9.59192 17.997 9.5054 17.9763 9.42251L17.5883 7.872ZM17.5883 4.49829H16.4286L16.7097 5.62286H6.74743V6.74743H17.4309C17.5163 6.74742 17.6006 6.72794 17.6774 6.69046C17.7542 6.65299 17.8214 6.59851 17.874 6.53116C17.9266 6.46381 17.9631 6.38537 17.9808 6.30179C17.9986 6.2182 17.997 6.13168 17.9763 6.04879L17.5883 4.49829ZM17.4309 0H0.562286C0.413158 0 0.270139 0.0592407 0.16469 0.16469C0.0592407 0.270139 0 0.413158 0 0.562286L0 2.81143C0 2.96056 0.0592407 3.10358 0.16469 3.20903C0.270139 3.31448 0.413158 3.37372 0.562286 3.37372H4.49829V5.62286H1.28271L1.56386 4.49829H0.404143L0.0175714 6.04879C-0.00313354 6.13162 -0.00470302 6.21808 0.012982 6.30161C0.0306671 6.38514 0.0671423 6.46355 0.119641 6.53088C0.172139 6.59822 0.239283 6.65271 0.315978 6.69023C0.392673 6.72775 0.476905 6.74731 0.562286 6.74743H4.49829V8.99658H1.28271L1.56386 7.872H0.404143L0.0175714 9.42251C-0.00313354 9.50534 -0.00470302 9.5918 0.012982 9.67533C0.0306671 9.75886 0.0671423 9.83727 0.119641 9.9046C0.172139 9.97193 0.239283 10.0264 0.315978 10.0639C0.392673 10.1015 0.476905 10.121 0.562286 10.1211H4.49829V14.7228C4.12312 14.8554 3.80693 15.1164 3.60559 15.4596C3.40424 15.8028 3.33072 16.2062 3.39801 16.5984C3.4653 16.9906 3.66907 17.3464 3.9733 17.6028C4.27754 17.8593 4.66265 18 5.06057 18C5.4585 18 5.84361 17.8593 6.14784 17.6028C6.45208 17.3464 6.65585 16.9906 6.72314 16.5984C6.79043 16.2062 6.7169 15.8028 6.51556 15.4596C6.31422 15.1164 5.99803 14.8554 5.62286 14.7228V3.37372H17.4309C17.58 3.37372 17.723 3.31448 17.8285 3.20903C17.9339 3.10358 17.9932 2.96056 17.9932 2.81143V0.562286C17.9932 0.413158 17.9339 0.270139 17.8285 0.16469C17.723 0.0592407 17.58 0 17.4309 0V0ZM5.06057 16.8686C4.94936 16.8686 4.84065 16.8356 4.74818 16.7738C4.65572 16.712 4.58365 16.6242 4.54109 16.5215C4.49853 16.4187 4.4874 16.3057 4.50909 16.1966C4.53079 16.0875 4.58434 15.9873 4.66298 15.9087C4.74162 15.8301 4.8418 15.7765 4.95088 15.7548C5.05995 15.7331 5.17301 15.7443 5.27575 15.7868C5.3785 15.8294 5.46631 15.9014 5.5281 15.9939C5.58988 16.0864 5.62286 16.1951 5.62286 16.3063C5.62286 16.4554 5.56362 16.5984 5.45817 16.7039C5.35272 16.8093 5.2097 16.8686 5.06057 16.8686ZM16.8686 2.24914H1.12457V1.12457H16.8686V2.24914Z"></path>
                      </svg>
                      <span className="truncate ">
                        {e.PayCommission} PayCommission
                      </span>
                    </p>
                    <p className="flex items-center text-gray-800">
                      <svg
                        className="inline-block w-5 h-5 mr-3 text-gray-800 fill-current xl:w-4 xl:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path d="M399.959 170.585c-4.686 4.686-4.686 12.284 0 16.971L451.887 239H60.113l51.928-51.444c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0l-84.485 84c-4.686 4.686-4.686 12.284 0 16.971l84.485 84c4.686 4.686 12.284 4.686 16.97 0l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273h391.773l-51.928 51.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l84.485-84c4.687-4.686 4.687-12.284 0-16.971l-84.485-84c-4.686-4.686-12.284-4.686-16.97 0l-7.07 7.071z" />
                      </svg>
                      <span className="truncate">1,386 sq. ft.</span>
                    </p>
                    <p className="flex items-center text-gray-800">
                      <svg
                        className="inline-block w-5 h-5 mr-3 text-gray-800 fill-current xl:w-4 xl:h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                      >
                        <path d="M532.01 386.17C559.48 359.05 576 325.04 576 288c0-80.02-76.45-146.13-176.18-157.94 0 .01.01.02.01.03C368.37 72.47 294.34 32 208 32 93.12 32 0 103.63 0 192c0 37.04 16.52 71.05 43.99 98.17-15.3 30.74-37.34 54.53-37.7 54.89-6.31 6.69-8.05 16.53-4.42 24.99A23.085 23.085 0 0 0 23.06 384c53.54 0 96.67-20.24 125.17-38.78 9.08 2.09 18.45 3.68 28 4.82C207.74 407.59 281.73 448 368 448c20.79 0 40.83-2.41 59.77-6.78C456.27 459.76 499.4 480 552.94 480c9.22 0 17.55-5.5 21.18-13.96 3.64-8.46 1.89-18.3-4.42-24.99-.35-.36-22.39-24.14-37.69-54.88zm-376.59-72.13l-13.24-3.05-11.39 7.41c-20.07 13.06-50.49 28.25-87.68 32.47 8.77-11.3 20.17-27.61 29.54-46.44l10.32-20.75-16.49-16.28C50.75 251.87 32 226.19 32 192c0-70.58 78.95-128 176-128s176 57.42 176 128-78.95 128-176 128c-17.73 0-35.42-2.01-52.58-5.96zm289.8 100.35l-11.39-7.41-13.24 3.05A234.318 234.318 0 0 1 368 416c-65.14 0-122-25.94-152.43-64.29C326.91 348.62 416 278.4 416 192c0-9.45-1.27-18.66-3.32-27.66C488.12 178.78 544 228.67 544 288c0 34.19-18.75 59.87-34.47 75.39l-16.49 16.28 10.32 20.75c9.38 18.86 20.81 35.19 29.53 46.44-37.19-4.22-67.6-19.41-87.67-32.47zM233.38 182.91l-41.56-12.47c-4.22-1.27-7.19-5.62-7.19-10.58 0-6.03 4.34-10.94 9.66-10.94h25.94c3.9 0 7.65 1.08 10.96 3.1 3.17 1.93 7.31 1.15 10-1.4l11.44-10.87c3.53-3.36 3.38-9.22-.54-12.11-8.18-6.03-17.97-9.58-28.08-10.32V104c0-4.42-3.58-8-8-8h-16c-4.42 0-8 3.58-8 8v13.4c-21.85 1.29-39.38 19.62-39.38 42.46 0 18.98 12.34 35.94 30 41.23l41.56 12.47c4.22 1.27 7.19 5.62 7.19 10.58 0 6.03-4.34 10.94-9.66 10.94h-25.94c-3.9 0-7.65-1.08-10.96-3.1-3.17-1.94-7.31-1.15-10 1.4l-11.44 10.87c-3.53 3.36-3.38 9.22.54 12.11 8.18 6.03 17.97 9.58 28.08 10.32V280c0 4.42 3.58 8 8 8h16c4.42 0 8-3.58 8-8v-13.4c21.85-1.29 39.38-19.62 39.38-42.46 0-18.98-12.35-35.94-30-41.23z"></path>
                      </svg>
                      <span className="truncate">{e.Limit} Limmit</span>
                    </p>
                  </div>

                  <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center space-x-3">
                      <button
                        type="button"
                        data-modal-toggle="user-modal"
                        className="inline-flex items-center p-1.5 text-sm font-normal text-center text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300 hover:text-gray-900 hover:scale-[1.02] transition-all"
                      >
                        <svg
                          className="w-5 h-5 text-center"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                          <path
                            fillRule="evenodd"
                            d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                      <button
                        type="button"
                        data-modal-toggle="delete-user-modal"
                        disabled={isLoading}
                        className="inline-flex items-center p-1.5 text-sm font-normal text-center
                         text-white bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-md
                          shadow-gray-300 hover:scale-[1.02] transition-transform disabled:cursor-not-allowed"
                        onClick={() => deleteBranch(e._id)}
                      >
                        <svg
                          className="w-5 h-5 text-center"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </button>
                    </div>

                    <div className="flex justify-end">
                      <p className="inline-block font-semibold leading-tight text-primary whitespace-nowrap rounded-xl">
                        <span className="text-sm uppercase">$</span>
                        <span className="text-lg">3,200</span>/m
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          ))}
      </div>
      {error && (
        <div className="flex items-center justify-center pb-24 mt-16 text-center">
          Something went wrong
        </div>
      )}
    </div>
  );
}

export default Index;

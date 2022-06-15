import { Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";

export default function DataPicker({ open, setOpen, data }) {
  const cancelButtonRef = useRef(null);
  const HandleChange = (e) => {
    // get the selected  date from the datepicker
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    // filter the data based on the selected date and type of transaction
    const filteredData = data.filter(
      (transaction) => transaction.date === e.target.value
    );
    console.log(filteredData);
    setOpen(false);
  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0  overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center overflow-y-scroll min-h-screen  pt-4 px-4 pb-32 text-center sm:block
         sm:p-0"
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterfrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500  bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block max-h-[800px]  sm:mt-16   h- 92 overflow-y-scroll overflow-hidden  bg-white dark:bg-gray-700 rounded-lg text-left shadow-xl transform 
            transition-all  my-52 sm:align-middle  sm:max-w-md w-screen p-4  "
            >
              <h1>Search by date</h1>
              <form
                className="grid mt-4 grid-cols-1 gap-x-10"
                onSubmit={HandleSubmit}
              >
                <div className="mb-6">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                  >
                    From Date
                  </label>
                  <input
                    type="date"
                    className="  border  truncate border-gray-300  text-md text-gray-600 rounded-lg   block w-full p-2.5 
                    dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                    onChange={HandleChange}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                  >
                    To Date
                  </label>
                  <input
                    type="date"
                    className="  border text-md text-gray-600  truncate border-gray-300   rounded-lg   block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                    onChange={HandleChange}
                  />
                </div>
                <div className="flex items-center justify-center space-x-10 sm:justify-between">
                  <button
                    type="button"
                    className=" inline-flex justify-center
                  rounded-md border border-gray-300 shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                     focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-4 py-2 bg-red-600
                    text-base font-medium text-white hover:bg-red-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm "
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
export default function Model({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [formFields, setFormFields] = useState([
    { name: "", Phone: "", Branch: "" },
  ]);
  const addFields = () => {
    let object = {
      name: "",
      Phone: "",
      Branch: "",
    };

    setFormFields([...formFields, object]);
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
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
            transition-all my-8 sm:align-middle  sm:max-w-2xl w-screen p-4  "
            >
              {/* sender inputs */}{" "}
              <div>
                <div
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div>
                    <h1 className="text-gray-600 dark:text-gray-300 font-medium text-lg">
                      Sender Information
                    </h1>
                    <form className="grid mt-4 grid-cols-2 gap-x-10">
                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                        >
                          Phone
                        </label>
                        <input
                          type="tell"
                          id="tell"
                          className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                          placeholder="254618995283"
                          required
                        />
                      </div>

                      <div className="mb-6">
                        <label
                          htmlFor="email"
                          className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                        >
                          Name
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                          placeholder="name"
                          required
                        />
                      </div>
                    </form>
                  </div>
                  {/* reciever information */}
                  <div>
                    <h1 className="text-gray-500 dark:text-gray-300 mt-3 text-lg">
                      Recciever Information
                    </h1>

                    {formFields.map((form, index) => {
                      return (
                        <div key={index}>
                          <form
                            className="grid mt-4 grid-cols-2 gap-x-10"
                            key={index}
                          >
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                Name
                              </label>
                              <input
                                type="text"
                                id="text"
                                className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                                placeholder="254618995283"
                                required
                              />
                            </div>
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                Phone
                              </label>
                              <input
                                type="tell"
                                id="tell"
                                className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                                placeholder="shakuur ally"
                                required
                              />
                            </div>
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                Branch
                              </label>
                              <input
                                type="tell"
                                id="tell"
                                className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                                placeholder="shakuur ally"
                                required
                              />
                            </div>
                            <div className="mb-6">
                              <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-500 dark:text-gray-300"
                              >
                                Description
                              </label>
                              <input
                                type="tell"
                                id="tell"
                                className="  border  truncate border-gray-300 dark:border-none text-gray-700 text-xs rounded-lg   block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-800 dark:text-white  "
                                placeholder="write the reason"
                                required
                              />
                            </div>
                          </form>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              {/* ÷cancel and submit button */}
              <div className=" flex items-center justify-between gap-x-10 sm:gap-x-24 col-span-2 ">
                <button
                  type="button"
                  className=" flex-auto inline-flex justify-center
                  rounded-md border border-gray-300 dark:border-none shadow-sm px-4 py-2
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
                  type="button"
                  className=" flex-auto w-auto 
                  rounded-md border border-gray-300 dark:border-none shadow-sm px-4 py-2
                   bg-white text-base font-medium text-gray-700
                    hover:bg-gray-50 focus:outline-none focus:ring-2
                      sm:mt-0
                      sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={addFields}
                >
                  <PlusIcon className="w-5 sm:hidden" />
                  <span className="hidden  items-center justify-center sm:flex text-center">
                    New transfer
                  </span>
                </button>
                <button
                  type="submit"
                  className="w-full flex-auto inline-flex justify-center rounded-md
                   border border-transparent shadow-sm px-4 py-2 bg-red-600
                    text-base font-medium text-white hover:bg-red-700 
                    focus:outline-none focus:ring-2 focus:ring-offset-2
                     focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                >
                  Send <span className="ml-2 hidden sm:flex">Money</span>
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

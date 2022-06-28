import { useState } from "react";

function SendMoney({ open, setOpen }) {
  const [formFields, setFormFields] = useState([
    { name: "", Phone: "", decribtion: "" },
  ]);
  const addFields = () => {
    let object = {
      name: "",
      Phone: "",
      decribtion: "",
    };

    setFormFields([...formFields, object]);
  };

  return (
    <div>
      <div
        id="popup"
        class={`z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
            open ? " opacity-90" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div class="flex items-center justify-center overflow-scroll h-full w-full">
          <div class="bg-white  max-h-full  dark:bg-gray-800 justify-center  rounded-md shadow fixed overflow-y-auto sm:h-auto w-full md:w-[44%] ">
            <div
              class="bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md px-2 md:px-4
               md:py-4 py-7 flex items-center justify-between sticky top-0"
            >
              <p class="text-base font-semibold dark:text-white">Send Money</p>
              <button
                role="button"
                aria-label="close label"
                onclick="popuphandler(false)"
                class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                  alt="icon"
                />
              </button>
            </div>
            <div class="px-4 md:px-10  md:pt-5 md:pb-4">
              {/* sender info */}{" "}
              <form class="mt-2 space-y-10">
                <div>
                  <h1 className="text-gray-600 pb-3 dark:text-gray-300 font-medium text-lg">
                    Sender Information
                  </h1>
                  <div class="flex items-center space-x-9">
                    <input
                      placeholder="Name"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 
                        text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  
                        border rounded border-gray-200 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none
                         placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800
                          bg-white dark:bg-gray-900  border rounded
                           border-gray-200 dark:border-gray-700 "
                    />
                  </div>
                </div>
              </form>
              {/* Reciever info */}
              {formFields.map((form, index) => {
                return (
                  <div key={index}>
                    <form key={index}>
                      <h1 className="text-gray-600 pb-3 dark:text-gray-300 mt-6 font-medium text-lg">
                        Reciever Information
                      </h1>
                      <div class="flex items-center space-x-9 ">
                        <input
                          placeholder="Name"
                          class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none placeholder-gray-500 py-3 px-3 
                        text-sm leading-none text-gray-800 bg-white dark:bg-gray-900  
                        border rounded border-gray-200 dark:border-gray-700 "
                        />
                        <input
                          placeholder="Phone"
                          type="tell"
                          class="focus:ring-2 focus:ring-gray-400 w-1/2 focus:outline-none
                         placeholder-gray-500 py-3 px-3 text-sm leading-none text-gray-800
                          bg-white dark:bg-gray-900  border rounded
                           border-gray-200 dark:border-gray-700 "
                        />
                      </div>{" "}
                      <div class="mt-6">
                        <textarea
                          placeholder="Description"
                          class=" focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 py-3 pl-3 overflow-y-auto h-24 border placeholder-gray-500 rounded border-gray-200 dark:border-gray-700  w-full resize-none focus:outline-none"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                );
              })}
              {/* actions */}
              <div class="flex items-center p-3 justify-between mt-2">
                <button class="focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none px-6 py-3 bg-gray-600 hover:bg-gray-500 shadow rounded text-sm text-white">
                  Cancel
                </button>
                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 
                  focus:outline-none px-6 py-3 bg-indigo-700 hover:bg-opacity-80 shadow 
                  rounded text-sm text-white"
                  onClick={addFields}
                >
                  Send new
                </button>
                <button class="focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:outline-none px-6 py-3 bg-blue-700 hover:bg-opacity-80 shadow rounded text-sm text-white">
                  Add User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SendMoney;

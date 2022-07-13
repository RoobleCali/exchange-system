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
        className={`z-50 fixed w-full flex justify-center inset-0  overflow-scroll ${
          open ? "flex" : "hidden"
        }`}
      >
        <div
          className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
            open ? " opacity-90" : "opacity-0 pointer-events-none"
          }`}
        ></div>
        <div className="flex items-center justify-center w-full h-full overflow-scroll">
          <div className="bg-white  max-h-full  dark:bg-gray-800 justify-center  rounded-md shadow fixed overflow-y-auto sm:h-auto w-[96%] lg:w-[44%] ">
            <div className="sticky top-0 flex items-center justify-between px-2 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-4 md:py-4 py-7">
              <p className="text-base font-semibold dark:text-white">
                Send Money
              </p>
              <button
                role="button"
                aria-label="close label"
                className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                onClick={() => setOpen(false)}
              >
                <img
                  src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                  alt="icon"
                />
              </button>
            </div>
            <div className="px-4 md:px-10 md:pt-5 md:pb-4">
              {/* sender info */}{" "}
              <form className="mt-2 space-y-10">
                <div>
                  <h1 className="pb-3 text-lg font-medium text-gray-600 dark:text-gray-300">
                    Sender Information
                  </h1>
                  <div className="flex items-center space-x-9">
                    <input
                      placeholder="Name"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Phone"
                      type="tell"
                      className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                  </div>
                </div>
              </form>
              {/* Reciever info */}
              {formFields.map((form, index) => {
                return (
                  <div key={index}>
                    <form key={index}>
                      <h1 className="pb-3 mt-6 text-lg font-medium text-gray-600 dark:text-gray-300">
                        Reciever Information
                      </h1>
                      <div className="flex items-center space-x-9 ">
                        <input
                          placeholder="Name"
                          className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                        />
                        <input
                          placeholder="Phone"
                          type="tell"
                          className="w-1/2 px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                        />
                      </div>
                      <div className="mt-6">
                        <textarea
                          placeholder="Description"
                          className="w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        ></textarea>
                      </div>
                    </form>
                  </div>
                );
              })}
              {/* actions */}
              <div className="flex items-center justify-between p-3 mt-2">
                <button className="px-6 py-3 text-sm text-white bg-gray-600 rounded shadow focus:ring-2 focus:ring-offset-2 focus:bg-gray-600 focus:ring-gray-600 focus:outline-none hover:bg-gray-500">
                  Cancel
                </button>
                <button
                  className="flex px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80 "
                  onClick={addFields}
                >
                  Send
                  <span className="hidden ml-1 md:flex">New</span>
                </button>
                <button className="flex px-6 py-3 text-sm text-white bg-blue-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-blue-800 focus:outline-none hover:bg-opacity-80">
                  Add <span className="hidden ml-1 md:flex">User</span>
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

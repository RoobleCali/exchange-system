import Image from "next/image";
import avatar from "../../pages/assets/avatar.png";
function TransferModel({ open, setOpen }) {
  return (
    <div>
      <div>
        <div
          id="popup"
          className={`z-50 fixed w-full flex justify-center inset-0 ${
            open ? "flex" : "hidden"
          }`}
        >
          <div
            className={`absolute inset-0 bg-gray-400 text-white bg-opacity-100 z-0  transition-opacity duration-200 ${
              open ? " opacity-90" : "opacity-0 pointer-events-none"
            }`}
          ></div>
          <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full">
              <div className="fixed overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 w-max ">
                <div className="flex items-center justify-between px-4 bg-gray-100 dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                  <p className="text-base font-semibold dark:text-white">
                    Transfer Form
                  </p>
                  <button
                    className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                    onClick={() => setOpen(false)}
                  >
                    <img
                      src="https://tuk-cdn.s3.amazonaws.com/can-uploader/add_user-svg1.svg"
                      alt="icon"
                    />
                  </button>
                </div>
                {/* Transfer section */}
                <div className="px-4 pt-3 shadow-2xl md:px-10 md:pb-4 pb-7">
                  <div className="flex items-center justify-between pb-5">
                    <div className="flex items-center space-x-3">
                      <Image src={avatar} alt="" width={50} height={50} />
                      <div>
                        <span className="text-gray-600 text-md dark:text-gray-300">
                          Abdishakuur ally
                        </span>
                        <p className="text-gray-500">+252618995283</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3">Current Money</p>
                  <div className="flex flex-col flex-wrap justify-between mt-2 space-y-3 md:items-center md:space-y-0 md:space-x-2 md:flex-row">
                    <button className="px-2 py-1.5 text-green-600 bg-green-100 rounded-md">
                      USD $9, 543, 268
                    </button>
                    <button className="px-2 py-1.5   text-red-500 bg-red-100 rounded-md">
                      KES $9, 543, 268
                    </button>
                  </div>
                  <form className="mt-11">
                    <input
                      placeholder="Amout"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <input
                      placeholder="Date"
                      type="date"
                      className="block w-full px-3 py-3 mt-3 text-sm text-lg leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                    />
                    <div className="mt-6">
                      <textarea
                        placeholder="Description"
                        className="w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                      ></textarea>
                    </div>
                  </form>
                  <button
                    aria-label="add user"
                    role="button"
                    className="w-full px-6 py-3 text-sm text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                  >
                    Transfer
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransferModel;

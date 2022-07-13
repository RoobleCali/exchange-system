import { XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";

function AddBranch({ open, setOpen }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
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
            <div className="fixed w-10/12 overflow-y-auto bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="flex items-center justify-between px-4 text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold ">Create New Branch</p>
                <button
                  role="button"
                  aria-label="close label"
                  className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 focus:outline-none"
                  onClick={() => setOpen(false)}
                >
                  <XIcon className="w-7" />
                </button>
              </div>
              <div className="px-4 pt-6 pb-1 md:px-10 md:pt-12 md:pb-4">
                <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-10">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <input
                          placeholder="Branch Name"
                          className="px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                          {...register("BranchName", { required: true })}
                        />
                        {errors.BranchName && (
                          <span className="py-2 text-xs text-red-400">
                            Amount must not be empty!
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col w-full">
                        <input
                          placeholder="Branch Phone"
                          type="tell"
                          min="0"
                          className="px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                          {...register("BranchPhone", { required: true })}
                        />

                        {errors.BranchPhone && (
                          <span className="py-2 text-xs text-red-400">
                            Amount must not be empty!
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <input
                          placeholder="Country"
                          type="Country"
                          className="px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                          {...register("Country", { required: true })}
                        />
                        {errors.Country && (
                          <span className="py-2 text-xs text-red-400">
                            Amount must not be empty!
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col w-full">
                        <input
                          placeholder="City"
                          type="city"
                          className="px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                          {...register("city", { required: true })}
                        />
                        {errors.city && (
                          <span className="py-2 text-sm text-red-400">
                            Amount cannot be empty!
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col w-full">
                      <textarea
                        placeholder="Commiton"
                        className="w-full h-24 py-3 pl-3 overflow-y-auto placeholder-gray-500 border border-gray-200 rounded resize-none focus:ring-2 focus:ring-gray-400 dark:bg-gray-900 dark:border-gray-700 focus:outline-none"
                        {...register("Commiton", { required: true })}
                      ></textarea>

                      {errors.Commiton && (
                        <span className="py-2 text-xs text-red-400">
                          commiton cannot be empty
                        </span>
                      )}
                    </div>
                  </div>{" "}
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-2 text-xs text-white bg-indigo-700 rounded shadow focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 focus:outline-none hover:bg-opacity-80"
                  >
                    Add Branch
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddBranch;

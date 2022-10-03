import { XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useAddChargeMutation, useChargeQuery } from "../../store/charge";
import { useCityQuery } from "../../store/city";
import { Button, ErrorMessage, LoaderButton, InputField } from "../controllers";
function NewCharge({ open, setOpen }) {
  const [addCharge, { isLoading, error, isSuccess }] = useAddChargeMutation();
  const { data } = useCityQuery();
  const { refetch } = useChargeQuery();
  const { register, handleSubmit, watch, reset, errors } = useForm();
  const source = watch("source");
  const destination = watch("destination");

  const onSubmit = async (data) => {
    const Data = {
      charge: [
        {
          source: data.source,
          destination: data.destination,
          rate: data.rate * 1,
        },
        {
          source: data.source1,
          destination: data.destination1,
          rate: data.rate1 * 1,
        },
      ],
    };
    await addCharge(Data);
    reset(Data);
    refetch();
    if (isSuccess) {
      setOpen(false);
    }
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
                <p className="text-base font-semibold ">Create New Charge</p>
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
                <ErrorMessage error={error} />
                <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-10">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <div className="flex items-center justify-center space-x-4 ">
                          <select
                            className="w-full max-w-md px-3 py-2 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 "
                            name="source"
                            ref={register({ required: true })}
                          >
                            <option value="">Select Source</option>
                            {data &&
                              data.map((role) => (
                                <option key={role._id} value={role._id}>
                                  {role._id}
                                </option>
                              ))}
                          </select>
                          <select
                            className="block w-full max-w-md px-3 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            name="destination"
                            ref={register({ required: true })}
                          >
                            <option value="">Select destination</option>
                            {data &&
                              source != data.map((role) => role._id) &&
                              data.map((role) => (
                                <option key={role._id} value={role._id}>
                                  {role._id}
                                </option>
                              ))}
                          </select>
                          <InputField
                            id="rate"
                            name="rate"
                            type="number"
                            // label="rate"
                            register={register}
                            error={errors.rate}
                          />{" "}
                        </div>
                        {source && (
                          <div className="flex items-center justify-center mt-5 space-x-4 px-">
                            <InputField
                              id="source1"
                              type="text"
                              name="source1"
                              // label="source"
                              register={register}
                              error={errors.source1}
                              value={destination}
                              disabled={true}
                            />
                            <InputField
                              id="destination1"
                              name="destination1"
                              type="text"
                              disabled={true}
                              value={source}
                              register={register}
                              error={errors.destination1}
                            />
                            <InputField
                              id="rate1"
                              name="rate1"
                              type="number"
                              // label="rate"
                              register={register}
                              error={errors.rate1}
                            />{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>{" "}
                  {isLoading ? <LoaderButton /> : <Button title="Add Charge" />}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCharge;

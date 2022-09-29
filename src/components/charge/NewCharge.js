import { XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useAddChargeMutation, useChargeQuery } from "../../store/charge";
import Button from "../controllers/Button";
import InputField from "../controllers/InputField";
import LoaderButton from "../controllers/LoaderButton";

function NewCharge({ open, setOpen }) {
  const [addCharge, { isLoading, error, isSuccess }] = useAddChargeMutation();
  const { refetch } = useChargeQuery();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = async (data) => {
    await addCharge(data);
    refetch();
    setOpen(false);
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
                <form className="mt-11" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-10">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="source"
                          type="text"
                          name="source"
                          // label="source"
                          register={register}
                          error={errors.source}
                        />
                        <InputField
                          id="destination"
                          name="destination"
                          type="text"
                          // label="destination"
                          register={register}
                          error={errors.destination}
                        />
                        <InputField
                          id="rate"
                          name="rate"
                          type="number"
                          // label="rate"
                          register={register}
                          error={errors.rate}
                        />{" "}
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

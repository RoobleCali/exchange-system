import { XIcon } from "@heroicons/react/solid";
import { useForm } from "react-hook-form";
import { useAddBranchMutation, useBranchQuery } from "../../store/branch";
import Button from "../controllers/Button";
import Checkbox from "../controllers/Checkbox";
import InputField from "../controllers/InputField";
import LoaderButton from "../controllers/LoaderButton";

function AddBranch({ open, setOpen }) {
  const [addBranch, { isLoading, error, isSuccess }] = useAddBranchMutation();
  console.log(error);
  console.log(isSuccess);
  const { refetch } = useBranchQuery();
  const { register, handleSubmit, errors, reset } = useForm();
  const onSubmit = async (data) => {
    const branchData = {
      BranchName: data.BranchName,
      BranchPhone: data.BranchPhone,
      BrachCity: data.BrachCity,
      Limit: data.Limit * 1,
      CanSend: data.CanSend,
      SendCommission: data.SendCommission * 1,
      CanPay: data.CanPay,
      PayCommission: data.PayCommission * 1,
      UserName: data.UserName,
      Password: data.Password,
      ManagerFullName: data.ManagerFullName,
      ManagerPhone: data.ManagerPhone,
    };
    await addBranch(branchData);
    refetch();
    reset();
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
            <div className="fixed w-10/12 overflow-y-scroll bg-white rounded-md shadow dark:bg-gray-800 sm:h-auto md:w-8/12 lg:w-1/2 2xl:w-2/5">
              <div className="flex items-center justify-between px-4 py-5 text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4">
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
                <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="space-y-5">
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="BranchName"
                          type="text"
                          name="BranchName"
                          label="BranchName"
                          register={register}
                          error={errors.BranchName}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <InputField
                          id="BranchPhone"
                          name="BranchPhone"
                          type="number"
                          label="BranchPhone"
                          register={register}
                          error={errors.BranchPhone}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="BrachCity"
                          type="text"
                          name="BrachCity"
                          label="BrachCity"
                          register={register}
                          error={errors.BrachCity}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <InputField
                          id="SendCommission"
                          name="SendCommission"
                          type="number"
                          label="SendCommission"
                          register={register}
                          error={errors.SendCommission}
                        />
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="Limit"
                          name="Limit"
                          type="number"
                          label="Limit"
                          register={register}
                          error={errors.Limit}
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <InputField
                          id="PayCommission"
                          name="PayCommission"
                          type="number"
                          label="PayCommission"
                          register={register}
                          error={errors.PayCommission}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="UserName"
                          name="UserName"
                          type="text"
                          label="UserName"
                          register={register}
                          error={errors.UserName}
                        />
                      </div>{" "}
                      <div className="flex flex-col w-full">
                        <InputField
                          id="Password"
                          name="Password"
                          type="password"
                          label="Password"
                          register={register}
                          error={errors.Password}
                          // TextArea={true}
                        />
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex flex-col w-full">
                        <InputField
                          id="FullName"
                          name="ManagerFullName"
                          type="text"
                          label="FullName"
                          register={register}
                          error={errors.ManagerFullName}
                        />
                      </div>{" "}
                      <div className="flex flex-col w-full">
                        <InputField
                          id="ManagerPhone"
                          name="ManagerPhone"
                          type="number"
                          label="ManagerPhone"
                          register={register}
                          error={errors.ManagerPhone}
                          // TextArea={true}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between px-4 mt-4 space-x-3">
                    <Checkbox
                      label="Can pay"
                      register={register}
                      name="CanPay"
                      error={errors.CanPay}
                    />
                    <Checkbox
                      label="Can Send"
                      register={register}
                      name="CanSend"
                      error={errors.CanSend}
                    />
                  </div>
                  {isLoading ? <LoaderButton /> : <Button title="Add Branch" />}
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

import { XIcon } from "@heroicons/react/solid";
import { DoubleBounce } from "better-react-spinkit";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useChangePasswordMutation } from "../../../store/user/User";
import Button from "../../controllers/Button";
import InputField from "../../controllers/InputField";
import LoaderButton from "../../controllers/LoaderButton";
function ChangePassword({ open, setOpen }) {
  const [message, setMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();
  const [changePassword, { isLoading, isError, isSuccess }] =
    useChangePasswordMutation();
  const onSubmit = async (data) => {
    if (!data) return {};
    const res = await changePassword(data);
    if (res.error) {
      setMessage(res.error.data.message);
    }
    if (res.error.data == "correct passowr") {
      setOpen(false);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      setMessage("");
    }, 10000);
  }, [message]);

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
            <div className="fixed w-4/5 overflow-y-auto bg-white rounded-md shadow md:w-1/2 lg:w-max dark:bg-gray-800 sm:h-auto ">
              <div className="flex items-center justify-between px-4 text-gray-600 bg-gray-100 dark:text-white dark:bg-gray-600 rounded-tl-md rounded-tr-md md:px-8 md:py-4 py-7">
                <p className="text-base font-semibold ">Change Password</p>
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
                {/* meesage here */}
                {message && (
                  <div
                    className="p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <span className="font-medium">{message}</span>
                  </div>
                )}
                <form className="mt-3" onSubmit={handleSubmit(onSubmit)}>
                  <InputField
                    id="oldPass"
                    name="oldPass"
                    type="text"
                    label="oldPass"
                    register={register}
                    error={errors.oldPass}
                  />
                  <InputField
                    id="newPass"
                    name="newPass"
                    type="text"
                    label="newPass"
                    register={register}
                    error={errors.newPass}
                  />

                  {isLoading ? (
                    <LoaderButton />
                  ) : (
                    <Button title="Change Password" />
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChangePassword;

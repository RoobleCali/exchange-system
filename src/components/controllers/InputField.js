import React from "react";
import { useForm } from "react-hook-form";
function InputField({ placeholder, type }) {
  const {
    register,
    formState: { errors },
  } = useForm();
  console.log(placeholder);
  return (
    <>
      {" "}
      <input
        className={`w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
     border-gray-200 rounded dark:text-gray-400 focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
       `}
        placeholder={placeholder}
        type={type}
        {...register(placeholder, { required: true })}
      />
      {errors.placeholder && (
        <span className="-mt-24 text-sm text-red-400">
          user name is required
        </span>
      )}
    </>
  );
}

export default InputField;

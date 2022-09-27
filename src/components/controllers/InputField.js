function InputField({ register, error, label, id, ...inputProps }) {
  console.log(error);
  return (
    <div className="mt-4 space-y-4">
      <div className="mb-3 form-floating xl:w-96">
        <input
          type="text"
          placeholder={id}
          className="block w-full px-3 py-3 mt-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded form-control focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
          ref={register({
            required: true,
            message: "Please enter",
          })}
          id={id}
          {...inputProps}
        />
        {error && (
          <span className="py-2 text-sm text-red-400">
            this field can`t be empty
          </span>
        )}
        <label htmlFor="floatingInput" className="text-sm text-gray-700">
          {label}
        </label>
      </div>
    </div>
  );
}

export default InputField;

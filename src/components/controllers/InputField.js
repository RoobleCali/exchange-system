function InputField({
  register,
  error,
  label,
  TextArea,
  id,
  type,
  disabled,
  value,
  ...inputProps
}) {
  return (
    <div className="flex flex-col mx-2 space-y-3">
      <label className="font-medium text-gray-500 text-md" htmlFor="userName">
        {label}
      </label>
      <input
        className={`w-full px-5 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border
               border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 
                 ${error ? "ring-2 ring-red-400" : null}
                 ${TextArea && " h-24 text-left"}
                 ${disabled && "bg-gray-500"}
                 `}
        ref={register({
          required: true,
          message: "Please enter",
          // valueAsNumber: true,
        })}
        id={id}
        {...inputProps}
        placeholder={id}
        type={type}
        disabled={disabled}
        value={value}
      />

      {error && (
        <span className="py-2 text-sm text-red-400">
          this field is required is required
        </span>
      )}
    </div>
  );
}

export default InputField;

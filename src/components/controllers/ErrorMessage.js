import React from "react";

function ErrorMessage({ error }) {
  return (
    <>
      {error && (
        <div
          className="p-4 mb-4 text-sm text-center text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
          role="alert"
        >
          <span className="font-medium">
            {JSON.stringify(error.data.message)}
          </span>
        </div>
      )}
    </>
  );
}

export default ErrorMessage;

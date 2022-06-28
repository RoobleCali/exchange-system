export function StatusPill({ value }) {
  const status = value ? value.toLowerCase() : "unknown";

  return (
    <span
      className={`  
         ${
           status.startsWith("success")
             ? "bg-green-100 text-green-500 px-4 py-1 text-sm  w-max truncate rounded-md"
             : null
         }
          ${
            status.startsWith("pending")
              ? "bg-orange-100 text-orange-500 px-4 py-1 text-sm  rounded-md truncate"
              : null
          }
          ${
            status.startsWith("error")
              ? "   text-red-700 bg-red-100  px-7 py-1 text-sm w-32  truncate rounded-md"
              : null
          } 
      
   `}
    >
      {status}
    </span>
  );
}

<div className="w-48 mt-10 ml-4 ">
  <ul className="mt-1 text-[12px] dark:text-white space-y-1 ">
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/dashboard">
        <a
          className={` flex  px-2 py-3 rounded-md   transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/dashboard" && "bg-blue-700 text-white"}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <HomeIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">Dashboard</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/wallet">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/wallet" && "bg-blue-700 text-white"}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <HomeIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">my wallet</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/clients">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/clients" ? "bg-blue-700 text-white" : ""}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <HomeIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">Clients</span>
        </a>
      </Link>
    </li>

    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/transactions">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
        ${
          router.pathname === "/transactions" ||
          router.pathname === "/transactions/[id]"
            ? "bg-blue-700 text-white"
            : ""
        }
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <SwitchHorizontalIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">transactions</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/invoices">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
        ${
          router.pathname === "/invoices" ||
          router.pathname === "/invoices/[id]"
            ? "bg-blue-700 text-white"
            : ""
        }
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <SwitchHorizontalIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">invoices</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/branches">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/branches" && "bg-blue-700 text-white"}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <SwitchHorizontalIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">Branches</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/cardcenter">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/cardcenter" && "bg-blue-700 text-white"}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <SwitchHorizontalIcon className="w-4 h-4" />
          </div>
          <span className="ml-5">card Center</span>
        </a>
      </Link>
    </li>
    <li className="text-gray-500 dark:text-gray-300">
      <Link href="/remittance">
        <a
          className={` flex  px-2 py-3 rounded-md  transition-all duration-100 items-center mt-1 dark:text-white space-y-13 hover:bg-blue-700 hover:text-white
    
            ${router.pathname === "/remittance" && "bg-blue-700 text-white"}
            `}
        >
          <div className="w-4 h-4 text-gray-200">
            <SortAscendingIcon className="w-4 h-4" />
          </div>
          <span className="ml-5"> Remittance</span>
        </a>
      </Link>
    </li>
    {/*  dropdown*/}
    {/*  dropdown*/}
    <li
      className={`  ${!Button || (Button && "text-gray-500")}`}
      onClick={() => setDropdown(!Dropdown)}
    >
      <div onClick={() => setButton(!Button)}>
        <a
          className={`flex  px-2 py-2 rounded-md 
         transition-all duration-100 items-center
          dark:text-white hover:bg-blue-600 hover:text-gray-100
            ${
              router.pathname === "/users" || router.pathname === "/roles"
                ? "bg-blue-600 text-white"
                : ""
            }`}
        >
          <div className="w-4 h-4 text-gray-200">
            <SortAscendingIcon className="w-4 h-4" />
          </div>
          <button
            className={`flex items-center justify-between px-5  py-1 font-normal
          transition duration-75 rounded-lg
          hover:text-gray-200
          group dark:text-white text-gray-500

          ${
            router.pathname === "/users" || router.pathname === "/roles"
              ? "text-white"
              : ""
          }
          `}
          >
            <span className="w-24 -ml-2">Roles & Users</span>
            {Dropdown ? (
              <ChevronUpIcon className="w-4 h-4 ml-9" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 ml-9" />
            )}
          </button>
        </a>
      </div>
      <ul className={`${Dropdown ? "innline-flex" : "hidden"}  py-2 space-y-2`}>
        <li>
          <Link href="/users">
            <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
              users
            </a>
          </Link>
        </li>
        <li>
          <Link href="/roles">
            <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
              Roles
            </a>
          </Link>
        </li>
      </ul>
    </li>
    {/* reports */}
    <li
      className={`  ${!Report || (Report && "text-gray-400")}`}
      onClick={() => setReportDropdown(!ReportDropdown)}
    >
      <div onClick={() => setReportDropdown(!ReportDropdown)}>
        <a
          className={`flex  px-2 py-2 rounded-md 
         transition-all duration-100 items-center
         text-gray-400
          dark:text-white hover:text-gray-200 hover:bg-blue-600  ${
            router.pathname === "/Report" ? "bg-blue-600 text-white" : ""
          }`}
        >
          <div className="w-4 h-4 text-gray-200">
            <SortAscendingIcon className="w-4 h-4" />
          </div>
          <button
            className={`flex items-center justify-between px-5  py-1 font-normal
          transition duration-75 rounded-lg
          group dark:text-white 
          ${Report && "text-gray-400"} `}
          >
            <span className=" w-14">Reports</span>
            {ReportDropdown ? (
              <ChevronUpIcon className="w-4 h-4 ml-16" />
            ) : (
              <ChevronDownIcon className="w-4 h-4 ml-16" />
            )}
          </button>
        </a>
      </div>
      <ul
        className={`${
          ReportDropdown ? "innline-flex" : "hidden"
        }  py-2 space-y-2`}
      >
        <li>
          <Link href="/">
            <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
              Transactions
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="flex items-center w-full p-2 text-xs font-normal text-gray-500 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 pl-11">
              Common Report
            </a>
          </Link>
        </li>
      </ul>
    </li>
    <hr className="mt-2 border-gray-200 border-b-1" />
  </ul>
</div>;

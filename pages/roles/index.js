import React, { useState } from "react";
import AddRole from "../../components/roles/AddRole";

function index() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div class="sm:px-6 w-full">
        <div class="bg-white py-4 md:py-7 px-4 md:px-8 xl:px-10">
          <div class="w-full sm:px-6">
            <div class="px-4 md:px-10 py-4 md:py-7 bg-gray-100 dark:bg-gray-700 rounded-tl-lg rounded-tr-lg">
              <div class="flex items-center justify-between">
                <p
                  tabindex="0"
                  class="focus:outline-none text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-normal text-gray-800 dark:text-white "
                >
                  All Roles
                </p>

                <button
                  class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 
                  inline-flex sm:ml-3 mt-4 sm:mt-0 items-start justify-start px-6 py-3 
                  bg-indigo-700 hover:bg-indigo-600 focus:outline-none rounded"
                  onClick={() => setOpen(!open)}
                >
                  <p class="text-sm font-medium leading-none text-white">
                    New Role
                  </p>
                </button>
              </div>
            </div>
            <AddRole open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;

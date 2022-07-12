/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import ManageAccount from "./ManageAccount";
import { EyeIcon, UserAddIcon } from "@heroicons/react/solid";
import ViewModel from "../transactions.js/ViewModel";

export default function Actions() {
  const [open, setOpen] = useState(false);
  const [View, setView] = useState(false);

  return (
    <div>
      <div className="flex items-center space-x-3">
        <UserAddIcon
          className="w-5 text-blue-600 cursor-pointer"
          onClick={() => setOpen(!open)}
        />
        <EyeIcon
          className="w-5 text-red-600 cursor-pointer "
          onClick={() => setView(!View)}
        />
      </div>

      <ManageAccount
        id="search-modal"
        searchId="search"
        open={open}
        setOpen={setOpen}
      />
      <ViewModel open={View} setOpen={setView} />
    </div>
  );
}

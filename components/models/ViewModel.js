/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { PlusIcon } from "@heroicons/react/outline";
export default function ViewModel({ open, setOpen }) {
  const cancelButtonRef = useRef(null);
  const [addNewTransaction, setAddNewTransaction] = useState(false);
  const [formFields, setFormFields] = useState([
    { name: "", Phone: "", Branch: "" },
  ]);
  const addFields = () => {
    let object = {
      name: "",
      Phone: "",
      Branch: "",
    };

    setFormFields([...formFields, object]);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0  overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setOpen}
      >
        <div
          className="flex items-end justify-center overflow-y-scroll h-full 
         text-center sm:block
         sm:p-0"
        >
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              className="inline-block  sm:mt-16  overflow-y-scroll overflow-hidden  bg-white dark:bg-gray-700 rounded-lg text-left shadow-xl transform 
            transition-all my-8 sm:align-middle -mt-40  w-full h-full   p-4  "
            >
              {/* sender inputs */}{" "}
              <div>
                <div
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <div className="flex items-center text-center justify-center">
                    some contents
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

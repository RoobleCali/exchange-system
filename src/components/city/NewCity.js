import { XIcon } from "@heroicons/react/solid";
import { DoubleBounce } from "better-react-spinkit";
import { useState } from "react";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { useAddCityMutation, useCityQuery } from "../../store/city";
import Button from "../controllers/Button";
import InputField from "../controllers/InputField";
import LoaderButton from "../controllers/LoaderButton";
import TagsInput from "../controllers/TagsInput";

function NewCity({ open, setOpen }) {
  const [addCity, { isLoading, error, isSuccess }] = useAddCityMutation();
  const [tags, setTags] = useState([]);
  const [cauntry, setcauntry] = useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  const Cities = (data) => {
    console.log(data);
  };
  const { refetch } = useCityQuery();
  const { register, errors } = useForm();
  const handleSubmit = async (event) => {
    event.preventDefault(); // 👈️ prevent page refresh
    const data = {
      country: cauntry,
      city: tags,
    };
    console.log(data);
    await addCity(data);
    refetch();
    setOpen(false);
  };

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
                <p className="text-base font-semibold ">Create New City</p>
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
                <form
                  className="mt-3"
                  onSubmit={handleSubmit}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") e.preventDefault();
                  }}
                >
                  <div className="mb-3 form-floating xl:w-96">
                    <input
                      type="text"
                      placeholder="cauntry"
                      name="Cauntry"
                      className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700"
                      onChange={(event) => setcauntry(event.target.value)}
                    />
                  </div>

                  {/* tags */}
                  <div className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700">
                    <ul className="tags">
                      {tags.map((tag, index) => (
                        <li key={index} className="tag">
                          <span className="tag-title">{tag}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="tag-close-icon"
                            onClick={() => removeTags(index)}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </li>
                      ))}
                    </ul>
                    <input
                      type="text"
                      onKeyUp={(event) => addTags(event)}
                      placeholder="Press enter to add tags"
                      p
                    />
                  </div>
                  {isLoading ? <LoaderButton /> : <Button title="Add City" />}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewCity;

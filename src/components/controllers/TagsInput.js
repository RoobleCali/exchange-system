// TagsInput.jsx
import React from "react";
const TagsInput = ({ selectedTags, register }) => {
  const [tags, setTags] = React.useState([]);
  const addTags = (event) => {
    if (event.key === "Enter" && event.target.value !== "") {
      setTags([...tags, event.target.value]);
      selectedTags([...tags, event.target.value]);
      event.target.value = "";
    }
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
  };
  return (
    <div className="w-full px-3 py-3 text-sm leading-none text-gray-800 placeholder-gray-500 bg-white border border-gray-200 rounded tags-input focus:ring-2 focus:ring-gray-400 focus:outline-none dark:bg-gray-900 dark:border-gray-700 ">
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
  );
};
export default TagsInput;

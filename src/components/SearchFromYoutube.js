import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchFromYoutube = ({ searchFromYoutube }) => {
  const [textSearch, setTextSearch] = useState("");

  const toggleSearchText = (event) => {
    setTextSearch(event.target.value);
  };
  return (
    <div className="relative flex items-center">
      <FaSearch className="absolute inset-3 text-xl text-gray-600 dark:text-gray-400" />
      <input
        type="text"
        placeholder="Search to Add to Playlist"
        className="rounded-xl w-full dark:border-primary border-opacity-80 shadow-md dark:shadow-primary border p-2 pl-12 focus:outline-none text-gray-600 dark:bg-gray-300 dark:text-gray-500"
        onChange={toggleSearchText}
      />
      <button
        className="absolute inset-y-0 right-0 bg-gray-300 dark:bg-gray-500 dark:text-gray-100 rounded-xl px-4 text-gray-700
         hover:bg-gray-400 hover:text-gray-800 transform duration-300 ease-in-out focus:outline-none"
        onClick={() => searchFromYoutube(textSearch)}
      >
        search
      </button>
    </div>
  );
};

export default SearchFromYoutube;

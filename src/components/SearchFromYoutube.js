import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchFromYoutube = ({ searchFromYoutube }) => {
  return (
    <div className="relative flex items-center">
      <input
        type="text"
        placeholder="Search to Add to Playlist"
        className="rounded-xl w-full dark:border-primary border-opacity-80 shadow-md dark:shadow-primary border p-2 pl-12 focus:outline-none"
        onChange={searchFromYoutube}
      />
      <FaSearch className="absolute inset-3 text-xl" />
    </div>
  );
};

export default SearchFromYoutube;

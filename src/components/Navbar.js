import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="w-full h-20 md:h-40 flex justify-between items-center dark:bg-black">
      <Link
        to="/"
        className="text-gray-800 dark:text-primary cursor-pointer font-sans text-xl tracking-widest drop-shadow-md"
      >
        Juke Box
      </Link>
      <div className="flex justify-end items-center space-x-2">
        <span className="text-sm text-gray-800 dark:text-gray-300">Light</span>
        <div>
          <input type="checkbox" name="" id="toggle" className="hidden" />
          <label htmlFor="toggle">
            <div
              className="w-9 h-5 flex items-center bg-gray-300 dark:bg-gray-400 rounded-full p-1"
              onClick={() => {
                document.querySelector("#toggle").checked
                  ? document.querySelector("html").classList.remove("dark")
                  : document.querySelector("html").classList.add("dark");
              }}
            >
              <div className="toggle-dot w-4 h-4 bg-white dark:bg-gray-800 rounded-full shadow-md transform duration-300 ease-in-out"></div>
            </div>
          </label>
        </div>
        <span className="text-sm text-gray-400 dark:text-gray-100">Dark</span>
      </div>
    </nav>
  );
};

export default Navbar;

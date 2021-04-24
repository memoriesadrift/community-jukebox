import React from "react";

const AddToPlayListButton = ({ addToPlaylist, video }) => {
  return (
    <div className="lg:col-span-1 flex items-center justify-end">
      <button
        className="px-4 py-2 border-gray-300 dark:border-secondary border-2 text-gray-800 dark:shadow-secondary shadow-md dark:text-gray-800 rounded-xl text-md focus:outline-none"
        onClick={() => addToPlaylist(video)}
      >
        <span>add to playlist</span>
      </button>
    </div>
  );
};

export default AddToPlayListButton;

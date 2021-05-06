import React from "react";
import VideoItem from "./VideoItem";

const MostRecent = ({ video }) => {
  return (
    <div className="flex flex-col items-start justify-center border border-opacity-50 dark:border-secondary shadow-md dark:shadow-secondary rounded-xl box-content mt-8 p-4 bg-gray-200 dark:bg-gray-300">
      {video ? (
        <div>
      <p className="text-gray-700 mb-4">
        Song added to the playlist:
      </p>
        <VideoItem video={video} />
        </div>
      ) : (
        <h1 className="text-gray-700"> </h1>
      )}
    </div>
  );
};

export default MostRecent;

import React from "react";
import VideoItem from "./VideoItem";

const MostVoted = ({ video }) => {
  return (
    <div className="flex flex-col items-start justify-center border border-opacity-50 dark:border-secondary shadow-md dark:shadow-secondary rounded-xl box-content mt-8 p-4 bg-gray-200 dark:bg-gray-300">
      <p className="text-gray-700 mb-4">
        Most voted: This video will play next.
      </p>
      {video ? (
        <VideoItem video={video} />
      ) : (
        <h1 className="text-gray-700">empty</h1>
      )}
    </div>
  );
};

export default MostVoted;

//TODO: Change most voted to most recent or something, sadly that isnt working rn

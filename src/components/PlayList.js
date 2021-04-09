import React from "react";
import VideoItem from "./VideoItem";

const PlayList = ({ listVideo }) => {
  let hasVideos;
  if (listVideo.length > 0) hasVideos = true;

  return (
    <div className="mt-4 rounded-lg md:mt-0 md:col-span-1 md:h-full border dark:border-primary border-opacity-50 shadow-md dark:shadow-primary ">
      {hasVideos ? (
        listVideo.map((el) => <VideoItem key={el.id.videoId} video={el} />)
      ) : (
        <div className="flex items-center justify-center mt-4">
          <p className="text-xl font-bold text-gray-700 dark:text-gray-100">
            List is empty.
          </p>
        </div>
      )}
    </div>
  );
};

export default PlayList;

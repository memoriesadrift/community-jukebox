import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="dark:bg-white bg-gray-200 shadow-lg grid grid-cols-4 p-1 gap-2 rounded-sm m-2">
      <div className="col-span-1">
        <img
          className="w-full h-full object-cover object-center"
          src={video.snippet.thumbnails.default.url}
          alt="pic"
        />
      </div>
      <div className="col-span-2">
        <p className="text-black text-xs font-bold justify-center">
          {video.snippet.title.slice(0, 30)} ...
        </p>
      </div>
      <div className="col-span-1 flex items-center justify-center">
        <button className="px-4 py-2 text-gray-800 border-gray-700 border rounded-xl text-sm">
          <span>
            add to <br /> playlist
          </span>
        </button>
      </div>
    </div>
  );
};

export default VideoItem;

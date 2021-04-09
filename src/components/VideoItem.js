import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="col-span-1 lg:col-span-2 grid grid-cols-3 gap-4">
      <div className="col-span-1">
        <img
          className="w-full h-full object-cover object-center"
          src={video.snippet.thumbnails.default.url}
          alt="pic"
        />
      </div>
      <div className="col-span-2">
        <p className="text-black text-xs font-bold justify-center">
          {video.snippet.title.slice(0, 50)} ...
        </p>
      </div>
    </div>
  );
};

export default VideoItem;

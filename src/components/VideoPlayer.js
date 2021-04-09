import React from "react";
const VideoPlayer = () => {
  return (
    <div className="aspect-w-16 aspect-h-9">
      <iframe
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0"
        title="Video Player"
      ></iframe>
    </div>
  );
};

export default VideoPlayer;

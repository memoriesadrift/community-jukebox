import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import PlayList from "./components/PlayList";
import MostVoted from "./components/MostVoted";
import SearchFromYoutube from "./components/SearchFromYoutube";
import youtube from "./apis/youtube";

function App() {
  const [listVideo, setListVideo] = useState([]);
  // const [playListVideo, setPlayListVideo] = useState([]);

  const searchFromYoutube = async (event) => {
    await youtube
      .get("/search", {
        params: {
          q: event.target.value,
        },
      })
      .then((res) => {
        console.log(res.data.items);
        setListVideo(res.data.items);
      });
  };

  return (
    <div className="w-full h-full dark:bg-black bg-gray-200">
      <div className="container p-4 mx-auto max-w-screen-xl h-screen">
        <Navbar />
        <div className="grid md:grid-cols-3 md:gap-4 mt-4 md:mt-0">
          <div className="md:col-span-2">
            <VideoPlayer />
            <div className="w-full md:w-2/3 m-auto mt-4">
              <SearchFromYoutube searchFromYoutube={searchFromYoutube} />
              <MostVoted />
            </div>
          </div>
          <PlayList listVideo={listVideo} />
        </div>
      </div>
    </div>
  );
}

export default App;

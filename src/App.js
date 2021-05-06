import React, { useState } from "react";
import Navbar from "./components/Navbar";
import VideoPlayer from "./components/VideoPlayer";
import PlayList from "./components/PlayList";
import MostRecent from "./components/MostRecent";
import SearchFromYoutube from "./components/SearchFromYoutube";
import youtube from "./apis/youtube";
import SearchList from "./components/SearchList";
import { socket } from "./apis/socketServer";

function App() {
  const [listVideo, setListVideo] = useState([]);
  const [mostRecentVideo, setMostRecentVideo] = useState(null);
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [playListVideo, setPlayListVideo] = useState([]);

  const toggleShowPlaylist = (isActive) => {
    setShowPlaylist(isActive);
  };
  const searchFromYoutube = async (searchText) => {
    await youtube
      .get("/search", {
        params: {
          q: searchText,
        },
      })
      .then((res) => {
        setShowPlaylist(false);
        setListVideo(res.data.items);
      });
  };

  const addToPlaylist = (video) => {
    socket.emit('addToPlaylist', video);
    _addToPlaylist(video);
  }

  socket.on('newPlaylist', (playlist) => {
    setPlayListVideo(playlist);
  });

  const _addToPlaylist = (video) => {
    setMostRecentVideo(video);
  };

  return (
    <div className="w-full min-h-screen dark:bg-black bg-gray-200">
      <div className="container p-4 mx-auto max-w-screen-xl">
        <Navbar />
        <div className="grid md:grid-cols-3 md:gap-4 mt-4 md:mt-0">
          <div className="md:col-span-2">
            <VideoPlayer />
            <div className="w-full md:w-2/3 m-auto mt-4">
              <SearchFromYoutube searchFromYoutube={searchFromYoutube} />
              <MostRecent video={mostRecentVideo} />
            </div>
          </div>
          <div className="md:col-span-1 mt-4 md:mt-0">
            <button
              className={showPlaylist ? "tab-active" : "tab-deactive"}
              onClick={() => toggleShowPlaylist(true)}
            >
              Playlist
            </button>
            <button
              className={!showPlaylist ? "tab-active" : "tab-deactive"}
              onClick={() => toggleShowPlaylist(false)}
            >
              Search List
            </button>
            {showPlaylist ? (
              <PlayList listVideo={playListVideo} />
            ) : (
              <SearchList listVideo={listVideo} addToPlaylist={addToPlaylist} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

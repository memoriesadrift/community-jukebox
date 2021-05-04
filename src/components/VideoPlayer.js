import React from "react";
import YouTube from "react-youtube";
import {socket} from "../apis/socketServer";

var song = '';

class VideoPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {song: "url", isAdmin: false, xyz: 0};
    this._onReady = this._onReady.bind(this);
    this.onYoutubeStateChange = this.onYoutubeStateChange.bind(this);
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }

  componentDidMount(){
    //let newSong = fetchSong();
    //this.setState({song: newSong});
    socket.emit('currentSong');
    socket.on('currentSong', (song) => {
        this.setState({song: song});
    });
    console.log('song ' + this.state.song);
    socket.on('changeAdmin', () => {
      console.log('Admin change');
      this.setState({isAdmin: true});
    });
    socket.on('changeSong', (song) => {
      this.setState({song: song});
    });
  }

  onYoutubeStateChange(event) {
    if(!this.state.isAdmin){
      return
    }
    if(event.data !== 0){
      return
    }
    socket.emit('nextSong', '1vrEljMfXYo');
    this.setState({xyz: Math.random()*12});
  }

  render () {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        autoplay: 1,
      }
    }

    return (
      <div className="aspect-w-16 aspect-h-9" id="player">
        <YouTube videoId={this.state.song} opts={opts} onReady={this._onReady} onStateChange={this.onYoutubeStateChange}/>
      </div>
    )
  } 
};



export default VideoPlayer;

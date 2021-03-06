import React from "react";
import YouTube from "react-youtube";
import {socket} from "../apis/socketServer";
class VideoPlayer extends React.Component {

  constructor(props){
    super(props);
    this.state = {song: "url", isAdmin: false, xyz: 0};
    this._onReady = this._onReady.bind(this);
    this.onYoutubeStateChange = this.onYoutubeStateChange.bind(this);
    this.becomeAdmin = this.becomeAdmin.bind(this);
  }

  _onReady(event) {
    event.target.pauseVideo();
  }

  componentDidMount(){
    socket.emit('currentSong');
    socket.on('currentSong', (song) => {
        this.setState({song: song});
    });
    socket.on('changeAdmin', () => {
      this.setState({isAdmin: true});
    });
    socket.on('changeSong', (song) => {
      this.setState({song: song});
    });
    socket.on('removeAdmin', () => {
      this.setState({isAdmin: false});
    });
  }

  onYoutubeStateChange(event) {
    if(!this.state.isAdmin){
      return
    }
    if(event.data !== 0){
      return
    }
    socket.emit('nextSong');
    this.setState({xyz: Math.random()*12});
  }

  becomeAdmin(event){
    if(this.state.isAdmin){
      return
    }
    socket.emit('becomeAdmin');
    this.setState({isAdmin: true});
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
      <div>
        <div className="aspect-w-16 aspect-h-9" id="player">
          <YouTube videoId={this.state.song} opts={opts} onReady={this._onReady} onStateChange={this.onYoutubeStateChange}/>
        </div>
        <button onClick={this.becomeAdmin}>Become Admin</button>
      </div>
    )
  } 
};



export default VideoPlayer;

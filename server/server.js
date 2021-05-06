const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

var users = 0;
var currentSong = 'dQw4w9WgXcQ';
var videos = new Map();
var videosForClient = [];

function voteOnVideo(videoId) {
    if (videos.has(videoId)) {
        let value = videos.get(videoId);
        videos.set(videoId, value + 1);
        return;
    }
    videos.set(videoId, 1);
}

function determineWinner() {
    let highestValue = 0;
    let winningVideo = ''; 

    console.log('Picking winner from:');
    videos.forEach((votes, video) => {
        console.log(video, ' ', votes);
        let value = votes;
        if (value > highestValue) {
            highestValue = value;
            winningVideo = video;
        }
    });
    console.log(winningVideo);
    if (winningVideo){
        return winningVideo
    }
    return 'L_jWHffIx5E';
}

io.on('connection', (client) => {
    
    // A user connects, returns current song and increases users number
    console.log('User has connected');
    users++;
    console.log('There are ' + users + ' users');
    io.emit('getSong', currentSong);
    if(users === 1) {
        io.emit('changeAdmin');
    }

    // A user disconnects, decreases users number
    client.on('disconnect', () => {
        console.log('User has disconnected');
        users--;
        console.log('There are ' + users + ' users');
    });

    client.on('currentSong', () => {
        console.log('Getting current song');
        io.emit('currentSong', currentSong);
        console.log(currentSong);
    });

    client.on('addToPlaylist', (video) => {
        if (videosForClient.length >= 10) {
            console.log("Playlist is full!!!");
            return;
        }

        if (videosForClient.includes(video)) {
            console.log("This video is already in Playlist.");
            return;
        }

        videosForClient.push(video);
        console.log('Song added: ', video);
        io.emit('newPlaylist', videosForClient);
    });

    client.on('voteOnSong', (songId) => {
        console.log('Song added: ', songId);
        voteOnVideo(songId);
    });

    client.on('nextSong', () => {
        currentSong = determineWinner();
        videos = new Map();
        videosForClient = [];
        console.log('next song', currentSong);
        io.emit('changeSong', currentSong);
        io.emit('newPlaylist', videosForClient);
    });

    client.on('becomeAdmin', () => {
        client.broadcast.emit('removeAdmin');
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
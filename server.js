const { Socket } = require("dgram");

const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

var users = 0;
var currentSong = 'dQw4w9WgXcQ';
var clients = [];

io.on('connection', (client) => {
    
    // A user connects, returns current song and increases users number
    console.log('User has connected');
    users++;
    console.log('There are ' + users + ' users');
    io.emit('getSong', currentSong);
    if(users == 1) {
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

    client.on('nextSong', (song) => {
        currentSong = song;
        io.emit('changeSong', currentSong);
    });

    client.on('becomeAdmin', () => {
        client.broadcast.emit('removeAdmin');
    });
});

const port = 8000;
io.listen(port);
console.log('listening on port ', port);
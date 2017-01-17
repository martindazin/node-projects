/* TODO
    /!\ Homework : here are some ideas to improve the application :
    - Broadcast a message to connected users when someone connects or disconnects
    - Don’t send the same message to the user that sent it himself.
        Instead, append the message directly as soon as he presses enter.
    - Add “{user} is typing” functionality
    - Show who’s online
    - Add private messaging
    - Share your improvements!

    - Permettez aux clients de changer leur pseudo en plein milieu d'une session de Chat
    - Et si vous rajoutiez des boutons sur la page pour faire jouer des sons préchargés à distance ?
        Un bon petit "ding" pour que les autres clients endormis se réveillent ?
    - Essayez de sauvegarder les messages en mémoire sur le serveur
        pour qu'on retrouve la liste des derniers messages échangés lorsqu'on se connecte !
        Vous pouvez sauvegarder les informations juste en mémoire vive comme on a appris à le faire...
        ou essayer carrément de coupler Node.js à une base de données MySQL, MongoDB, redis...
    - Et si vos clients pouvaient s'envoyer des images en plus du texte ? :)
*/

// Express initializes app to be a function handler that you can supply to an HTTP server
var app = require('express')();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
// Allow us to block HTML's characters
var ent = require('ent');
var fs = require('fs');

// Load index.html
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.sockets.on('connection', function (socket, nickname) {
    // When we have a nickname, we stock it in a session var and we inform other ppl
    socket.on('new_user', function(nickname) {
        nickname = ent.encode(nickname);
        socket.nickname = nickname;
        socket.broadcast.emit('new_user', nickname);
    });

    // When we receive a msg, we recover the nickname and we transmit it to other ppl
    socket.on('msg', function (msg) {
        msg = ent.encode(msg);
        socket.broadcast.emit('msg', {nickname: socket.nickname, msg: msg});
    }); 
});

server.listen(8080);
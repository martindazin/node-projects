var http = require('http');

// http.createServer([requestListener])
// Returns a new instance of http.Server.
// The requestListener is a function which is automatically added to the 'request' event.
var server = http.createServer(function(req, res) {
    res.writeHead(200);
    res.end('Salut tout le monde !');
});

server.on('close', function() { // On écoute l'event close
    console.log('Bye bye !');
});

server.on('close', function() { // On peut écouter plusieurs fois le même event
    console.log('Bye bye à nouveau !');
});

server.listen(8080);

server.close()
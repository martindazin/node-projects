var http = require ('http');
var url = require('url');

var server = http.createServer(function (req, res) {
    var page = url.parse(req.url).pathname;
    console.log(page);

    if (page == '/' || page == '/martin' || page == '/fin'){
        res.writeHead(200, {"Content-Type": "text/plain"});
        if (page == '/'){
            res.write('Bonjour, vous êtes bien sur ma page d\'accueil !');
        } else if (page == '/martin'){
            // res.writeHead(200, {"Content-Type": "text/plain"});
            res.write('Ceci est ma page de biographie !');
        } else if (page == '/fin'){
            // res.writeHead(200, {"Content-Type": "text/plain"});
            res.write('Vous êtes sur la page de fin de mon site !');
        }
    } else {
        res.writeHead(404, {"Content-Type": "text/plain"})

    }

    res.end();
});

server.listen(8080);
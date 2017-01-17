var http = require('http');

var server = http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(
        '<!DOCTYPE hmtl>' +
            '<html>' +
                '<head>' +
                    '<meta charset="utf-8" />' +
                    '<title>Ma première page Node.js !</title>' +
                '</head>' +
                '<body>' +
                    '<p>Voici un paragraphe <strong>HTML</strong> ! </p>' +
                '<body>' +
            '</html>'
    );
    res.end();
});

server.listen(8080);
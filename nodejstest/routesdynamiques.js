var express = require('express');
var app = express();

// Le ':' permet d'avoir n'importe quel param

// On peut passer autant d'arguments que l'on veut dans l'URL
// app.get('/soussol/:soussolnum/chambre', function(req, res) {
app.get('/soussol/:soussolnum', function(req, res) {
    res.setHeader('Content-Type', 'text-plain');

    if (parseInt(req.params.soussolnum, 10)) { // Un numéro de ss-sol est tapé
        // Permet de récupérer le n° du ss-sol
        res.end('Vous êtes au sous-sol n°' + req.params.soussolnum);
    } else { // Autre chose qu'un numéro de ss-sol est tapée
        res.writeHead(404, {"Content-Type": "text/plain"});
        res.end();
    }
    // console.log(req.params.soussolnum);
});

app.listen(8080);
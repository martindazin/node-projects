// server.js
// Load the things we need
var express = require('express');
var app = express();

// Set the view engine to ejs
app.set('view engine', 'ejs');

// Use res.render to load up and ejs view file
// Index page
app.get('/', function(req, res) {
   res.render('accueil.ejs');
});

// About a specific page
app.get('/soussol/:soussolnum', function(req, res) {
    res.render('soussol.ejs', {soussol: req.params.soussolnum});
});

// Multi parameters and loops
app.get('/compter/:nombre', function (req, res) {
    var noms = ['Martin', 'Miou', 'Jean-Jacques', 'Isabelle', 'Rachel'];
    res.render('page.ejs', {compteur: req.params.nombre, noms: noms});
});

app.listen(8080);

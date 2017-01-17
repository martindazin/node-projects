// 1ère façon de faire -DEBUT-

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil.');
});

app.get('/biographie', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page de biographie.');
});

app.get('/privee', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('C\'est une page privée !');
});

// On gère les erreurs 404 après toutes les pages autorisées
// et avant l'ecoute sur le serveur
app.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

app.listen(8080);

// 1ère façon de faire -FIN-

/* 2ième façon de faire -DEBUT-

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Vous êtes à l\'accueil.');
})
.get('/biographie', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page de biographie.');
})
.get('/privee', function (req, res) {
    res.setHeader('Content-Type', 'text/plain');
    res.end('C\'est une page privée !');
})
.use(function (req, res, next) {
    res.setHeader('Content-Type', 'text/plain');
    res.send(404, 'Page introuvable !');
});

 2ième façon de faire -FIN- */
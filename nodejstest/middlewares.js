var express = require('express');
var morgan = require('morgan'); // Charge le middleware de logging
var favicon = require('serve-favicon'); // Charge le middleware de favicon

var app = express()
// Active le middleware de logging
.use(morgan('combined'))
// Indique que le dossier /public contient des fichiers statiques (middleware chargé de base)
.use(express.static(__dirname + '/public'))
// Active la favicon indiquée
.use(favicon(__dirname + '/public/favicon.ico'))
// Répond enfin
.use(function(req, res) {
    res.send('Hello !');
});

app.listen(8080);
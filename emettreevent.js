var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('nouveaujoueur', function (message) {
   console.log(message);
});

jeu.on('gameover', function (message){
   console.log(message);
});

// Deux params sur la fonction de callback
jeu.emit('nouveaujoueur', 'Martin', 22);

jeu.emit('gameover', 'Vous avez perdu !');
/* TODO
    - Modification des noms des tâches
    - Réagencement des tâches entre elles
    - Exportation CSV
    - Attribution d'une priorité et d'une date limite
    - Persistence de la todolist (stockage dans une base de données ou une base NoSQL)
    - Partage d'une todolist entre plusieurs personnes
    - Synchronisation de la todolist en temps réel entre les personnes sans avoir besoin de recharger la page
*/

var express = require('express');
// Load the session's middleware
var session = require('cookie-session');
// Load the parameters manager's middleware
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var app = express();

// Using sessions 
app.use(session({secret: 'todotopsecret'}));

// If todolist doesn't exist
// we'll create an empty middleware (array) before the next steps
app.use(function(req, res, next){
    if (typeof(req.session.todolist) == 'undefined') {
        req.session.todolist = [];
    }
    // next allows to use a callback on the next function
    // @ req.session.todolist
    next();
});

// It displays the todolist and the form
app.get('/todo', function(req, res) { 
    res.render('todo.ejs', {todolist: req.session.todolist});
});

// It adds a element to the todolist
app.post('/todo/ajouter/', urlencodedParser, function(req, res) {
    if (req.body.newtodo != '') {
        req.session.todolist.push(req.body.newtodo);
    }
    res.redirect('/todo');
});

// It deletes a element to the todolist
app.get('/todo/supprimer/:id', function(req, res) {
    if (req.params.id != '') {
        req.session.todolist.splice(req.params.id, 1);
    }
    res.redirect('/todo');
});

// It redirects to the todolist if the asked page isn't find
app.use(function(req, res, next){
    res.redirect('/todo');
});

app.listen(8080);
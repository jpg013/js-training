// ==============================
// Require modules
// ==============================
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

// ==============================
// Create an express app
// ==============================
var app = express();

// ==============================
// Our middleware to log all
// incoming requests
// ==============================
app.use(function(req, res, next) {
  console.log('Incoming Request at time: ' + Date.now() + ' with path ' + req.path)
  next();
});

// ==============================
// Built in middleware for serving
// static files and parsing json
// data from forms
// ==============================
app.use(express.static('./public'));
app.use(express.static('./images'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ==============================
// Init our API Routes
// ==============================
require('./api/note')(app);
require('./api/number')(app);
require('./api/user')(app);

// ==============================
// All other routes should
// send our 404 image
// ==============================
app.route('/*')
  .get(function (req, res, next) {
    res.sendFile(path.join(__dirname, '/public/404.html'))
  });

// ==============================
// Tell our express app to listen
// to the port 3030
// ==============================
app.listen(3030);

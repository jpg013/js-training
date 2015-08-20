var express = require('express');
var path = require('path');
var app = express();

app.use(function(req, res, next) {
  console.log("incoming request");
  next();
});

app.get('/users', function(req, res, next) {
  console.log(req.path);
  var users = ['justin', 'heather'];
  res.send(users);
});

app.get('/', function(req, res, next) {
  res.send("Hello world!")
});

app.get('/text', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/examples/example-1-text'));
})

app.get('/redirect', function(req, res, next) {
  res.redirect('/users')
})

app.listen(8080);

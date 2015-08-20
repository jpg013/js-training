var express = require('express');
var app = express();

app.get("/", function(req, res, next) {
  return res.send("Hello world")
});

app.get("/users", function(req, res, next) {
  var users = [
    {name: "justin", email: 'Justin.Graber@yrcfreightl.com'},
    {name: "dallas", email: 'dallas@yrcfreight.com'}
  ];
  res.send(users);
});

app.get("/users/:id", function(req, res, next) {
  var id = req.params.id
  res.send("user : " + id );
});

app.listen(8080);
console.log('listening on port 8080');

var express = require('express');
var path = require("path");
var app = express();

app.use(function(req, res, next) {
  console.log("I'm in middleware 1");
  next();
});

app.use(function(req, res, next) {
  console.log(Date.now());
});

app.listen(3030);